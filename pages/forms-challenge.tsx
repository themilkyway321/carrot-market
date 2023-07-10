import React, { useState } from "react";

import { useForm } from "react-hook-form"

interface LoginForm {
  workpart:string;
  workreason:string;
  salary:string;
  introduce:string;
  detail:string;
  email:string;
}

export default function Forms(){
  
  const {register, handleSubmit, formState:{isSubmitSuccessful, errors}, getValues} = useForm<LoginForm>({
    
    shouldFocusError: false,
  });
  const [data, setData] = useState("");
  const onValid = (data:LoginForm) => {
    setData(JSON.stringify(data));
    
  };
  return (
  <form className="relative space-y-7 bg-pink-100 border-2 border-black border-b-8 border-r-8 rounded-lg my-10 py-5 px-10" onSubmit={handleSubmit(onValid)} >

    <h2 className="font-extrabold text-center text-[25px] my-6">Job Application Form</h2> 
    <div>
    <h3 className="font-bold mb-2">What department do you want to work for? <span className="text-red-600 text-sm">{errors.workpart?.message}</span></h3>
   <p><input {...register("workpart",{
    required:"*required"
   })} type="radio" name="workpart" id="sales" /><label htmlFor="sales" > Sales</label></p>
    <p><input {...register("workpart",{
    required:"*required"
   })} type="radio" name="workpart" id="marketing"/><label htmlFor="marketing"> Marketing</label></p>
    <p><input {...register("workpart",{
    required:"*required"
   })} type="radio" name="workpart" id="account" /><label htmlFor="account"> Accounting</label></p>
    <p><input {...register("workpart",{
    required:"*required"
   })} type="radio" name="workpart" id="customer" /><label htmlFor="customer"> Customer Service</label></p>
    </div>
    
    <div>
    <h3 className="font-bold mb-2">Why do you want to join this company? <span className="text-red-600 text-sm">{errors.workreason?.message}</span></h3>
   <p><input {...register("workreason",{
    required:"*required"
   })} type="radio" name="workreason" id="money" /><label htmlFor="money" > I want money</label></p>
    <p><input {...register("workreason",{
    required:"*required"
   })} type="radio" name="workreason" id="love"/><label htmlFor="love"> I love this company </label></p>
    <p><input {...register("workreason",{
    required:"*required"
   })} type="radio" name="workreason" id="learn" /><label htmlFor="learn"> I want to learn </label></p>
    <p><input {...register("workreason",{
    required:"*required"
   })} type="radio" name="workreason" id="mood" /><label htmlFor="mood"> I liked the workplace environment </label></p>
    </div>

   <div>
    <h3 className="font-bold mb-2">Salary</h3>
    <select {...register("salary")} className="w-full rounded-md border-2 border-black">
    <option value="50">$50k</option>
    <option value="100">$100k</option>
    <option value="150">$150k</option>
    <option value="200">$200k</option>
  </select>
   </div>
   <div>
    <h3 className="font-bold mb-2">Introduce yourself</h3>
    <input 
    {...register("introduce",{
      required:"Please write down your introduction."
    })}
    className={`${Boolean(errors.introduce?.message) ? "w-full rounded-md border-2 border-red-600" :"w-full rounded-md border-2 border-black"}`}
    type="text" />
    <p className="text-red-600 font-bold">{errors.introduce?.message}</p>
   </div>
<div>
<h3 className="font-bold mb-2">Tell us what your dreams are</h3>
<textarea 
{...register("detail",
{required:"Please tell us what your dreams are.",
minLength:{
  message:"Please write more than 10 characters.",
  value:10,
}})} 
className={`${Boolean(errors.detail?.message) ? "w-full rounded-md border-2 border-red-600" :"w-full rounded-md border-2 border-black"}`} 
cols={65} rows={5}>

</textarea>
<p className="text-red-600 font-bold">{errors.detail?.message}</p>
</div>


<div>
  <h3>Email</h3>
      <input {...register("email",{
        required:"Please write down your email.",
        validate:{
          onlyNaver:(value) => value.includes("@naver.com") ? undefined: "Only @naver.com is allowed.",
        },
      })} 
      type="email" 
      className={`${Boolean(errors.email?.message) ? "w-full rounded-md border-2 border-red-600" :"w-full rounded-md border-2 border-black"}`}
      />
      <p className="text-red-600 font-bold">{errors.email?.message}</p>
</div>
    
    <input className="w-full border-2 py-2.5 rounded-lg bg-yellow-400 font-bold border-black border-b-4 border-r-4 cursor-pointer" type="submit" value="Apply"  />
    
    {data? (<p className="break-all">{data}</p>) : ""}
  </form>
  
  )
}


