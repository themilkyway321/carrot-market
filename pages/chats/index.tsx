import Layout from "@components/layout";
import type { NextPage } from "next";
import Link from "next/link";

const Chats:NextPage = ()=>{
  return (
 <Layout hasTabBar title="채팅">
    <div className="py-10  divide-y-[1.5px]">
      {[1,2,3,4,5,6,7].map((_,i)=>(
        <Link
        href={`/chats/${i}`} 
        key={i}
        className="flex py-3 items-center space-x-3 cursor-pointer  px-4 ">
        <div className="w-12 h-12 rounded-full bg-slate-300" />
        <div>
          <p className="text-sm  text-gray-700">Steve Jebs</p>
          <p className="text-sm font-medium text-gray-500">See you tomorrow in the corner at 2pm!</p>
        </div>
      </Link>
      ))}
    </div>
 </Layout>);
}

export default Chats;