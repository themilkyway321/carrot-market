import Layout from "@components/layout";
import useMutation from "@libs/client/useMutation";
import useUser from "@libs/client/useUser";
import { cls } from "@libs/client/utils";
import { Item, User } from "@prisma/client";
import type { NextPage } from "next";
import { cookies } from "next/dist/client/components/headers";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR, { useSWRConfig } from "swr";

interface ItemWithUser extends Item {
  user:User;
}

interface ItemDetailResponse {
  ok:boolean;
  item:ItemWithUser;
  relatedProducts:Item[];
  isLiked:boolean;
}

const ItemDetail: NextPage<ItemDetailResponse> = ({
  item,
  relatedProducts,
  isLiked,
}) => {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const {mutate} =useSWRConfig();
  const { data, mutate:boundMutate } = useSWR<ItemDetailResponse>(
    router.query.id ? `/api/items/${router.query.id}` : null
  );
  const [toggleFav]= useMutation(`/api/items/${router.query.id}/fav`);
  const onFavClick =()=>{
    if(!data)return;
    boundMutate((prev) => prev && { ...prev, isLiked: !prev.isLiked }, false);
    // mutate("/api/users/me", (prev: any) => ({ ok: !prev.ok }), false);
    toggleFav({});
  };

  return (
<Layout canGoBack>
      <div className="px-4 py-10">
        <div className="mb-8">
          <div className="h-96 bg-slate-300" />
          <div className="flex py-3 items-center space-x-3 border-t border-b cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-slate-300" />
            <div>
              <p className="text-sm font-medium text-gray-700">{data?.item?.user?.name} </p>
              <Link className="text-xs font-medium text-gray-500" href={`/users/profiles/${item?.user?.id}`}>View profile &rarr;</Link>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-3xl font-bold text-gray-900">{data?.item?.name}</h1>
            <p className="text-3xl mt-3 text-gray-900">${data?.item?.price}</p>
            <p className="text-base my-6 text-gray-700">
              {data?.item?.description}
            </p>
            <div className="flex items-center justify-between space-x-2">
              <button className="flex-1 bg-orange-500 text-white py-3 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 hover:bg-orange-600">Talk to seller</button>
              <button onClick={onFavClick} 
              className={cls("p-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 ",
              isLiked ? "text-red-400 hover:text-red-500":"text-gray-400 hover:text-gray-500")}>
                <svg
                  className="h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill={data?.isLiked ? "currentColor":"none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Similar items</h2>
          <div className="mt-6 grid grid-cols-2 gap-4">
              {relatedProducts?.map((v) => (
                <Link href={`/items/${v.id}`}>
                <div key={v.id}>
                  <div className="h-56 w-full bg-slate-400 mb-4"/>
                  <h3 className="text-gray-700 -mb-1">{v.name}</h3>
                  <p className="text-sm font-bold text-gray-900">${v.price}</p>
                </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
</Layout>
  );
};
export default ItemDetail;