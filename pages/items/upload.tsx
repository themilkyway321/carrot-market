import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import TextArea from "@components/textarea";
import useMutation from "@libs/client/useMutation";
import { Item } from "@prisma/client";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useReducer } from "react";
import { useForm } from "react-hook-form";

interface UploadItemForm{
  name:string;
  price:number;
  description:string;
}

interface UploadProductMutation{
  ok:boolean;
  item:Item;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const {register, handleSubmit} =useForm<UploadItemForm>();
  const [uploadProduct, {loading, data}]=useMutation<UploadProductMutation>("/api/items");
  const onValid =(data:UploadItemForm)=>{
   if(loading) return;
   uploadProduct(data);
  };
  useEffect(()=>{
    if(data?.ok){
      router.push(`/items/${data.item.id}`);
    }
  },[data,router]);
  return (
    <Layout canGoBack title="Upload Product">
      <form className="px-4 space-y-5 py-10" onSubmit={handleSubmit(onValid)}>
        <div>
            <label className="w-full cursor-pointer text-gray-600 hover:text-orange-500 hover:border-orange-500 flex items-center justify-center border-2 border-dashed border-gray-300 h-48 rounded-md">
              <svg
                className="h-12 w-12"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <input type="file" className="hidden" />
            </label>
        </div>
        
        <Input 
        register={register("name",{required:true})}
        required 
        label="Name" 
        name="name" 
        type="text" />
        <Input 
        register={register("price",{required:true})}
        required 
        label="Price" 
        name="price" type="number" kind="price" />
        <TextArea
        register={register("description")}
          name="description"
          label="Description"
          required
        />
      <Button text={loading? "Loading...": "Upload Item"} />
      </form>
    </Layout>
  );
};

export default Upload;