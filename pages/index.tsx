import FloatingButton from "@components/floating-button";
import Product from "@components/item";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import { Item } from "@prisma/client";
import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";

interface ItemWithCount extends Item {
  _count:{
    favs:number;
  }
}

interface ItemsResponse {
  ok:boolean;
  items:ItemWithCount[];
}

const Home: NextPage = () => {
  const {user, isLoading} = useUser();
  
  const {data}=useSWR<ItemsResponse>("/api/items");
  console.log(data)
  return (
    <Layout title="홈" hasTabBar>
      <Head><title>Home</title></Head>
      <div className="flex flex-col space-y-5 ">
      {data?.items?.map((v) => (
          <Product
          id={v.id}
          key={v.id}
          title={v.name}
          price={v.price}
          comments={1}
          hearts={v._count.favs}
        />
      ))}
      <FloatingButton href="/items/upload">
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </FloatingButton>
    </div>
    </Layout>
  );
};

export default Home;