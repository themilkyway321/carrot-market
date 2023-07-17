import React, { useEffect } from "react";
import useSWR, { useSWRConfig } from "swr";

interface ItemDetailResponse {
  url: string;
  isLiked: boolean;
}
export default function Dog() {
  const { data, mutate:boundMutate } = useSWR<ItemDetailResponse>(
    "https://dogs-api.nomadcoders.workers.dev"
  );
  const { mutate } = useSWRConfig();
  const onLikeClick = () => {
    if (!data) return;
    boundMutate(
      (prev) => prev && { ...prev, isLiked: !prev.isLiked },
      false
    );
    
  }; 
  const onDogClick = ()=>{
    if (!data) return;
    boundMutate((prev) => prev && { ...prev }, true);
  };
  useEffect(()=>{

  },[data?.url])
  console.log(data?.url);
  return (
    <div className="bg-black px-20 py-5">
      <h1 className="text-white left-0 text-3xl font-bold mb-6">TV</h1>
      <video
        className="w-[700px] h-[400px]"
        controls
        autoPlay
        src={`${data?.url}`}
      ></video>
      <div className="flex text-center gap-5 mt-6">
        <span onClick={onDogClick} className="w-[300px]  cursor-pointer py-2 text-xl bg-blue-400 active:ring-2 hover:bg-blue-500">
          New dog!
        </span>
        <span onClick={onLikeClick} className="w-[300px]  cursor-pointer py-2 text-xl bg-orange-400 active:ring-2 ring-orange-400 hover:bg-orange-500">{data?.isLiked ? "Unlike" : "Like"}</span>
      </div>
    </div>
  );
};
