import { use, useState } from "react"
import { FieldErrors, useForm } from "react-hook-form"

interface LoginForm {
  username:string;
  password:string;
  email:string;
}

export default function Forms(){
  const {register, handleSubmit, formState:{errors}} = useForm<LoginForm>({
    mode:"onChange",
  });
  const onValid = (data:LoginForm)=>{
    console.log("valid");
  }
  const onInvalid = (errors: FieldErrors)=>{
    console.log(errors)
  };
  return (
  <form onSubmit={handleSubmit(onValid, onInvalid)} >

    <h2 className="font-bold text-center">Job Application Form</h2> 
    <div>
    <h3 className="font-bold">What department do you want to work for?</h3>
   <p><input type="radio" name="workpart" id="sales" /><label htmlFor="sales" > Sales</label></p>
    <p><input type="radio" name="workpart" id="marketing"/><label htmlFor="marketing"> Marketing</label></p>
    <p><input type="radio" name="workpart" id="account" /><label htmlFor="account"> Accounting</label></p>
    <p><input type="radio" name="workpart" id="customer" /><label htmlFor="customer"> Customer Service</label></p>
    </div>
    
    <input {...register("email",{
      required:"Email is required!",
      validate:{
        notGmail:(value) => !value.includes("@gmail.com") ? "": "Gmail is not allowed",
      },
    })} 
    type="email" 
    placeholder="Email"
    className={`${Boolean(errors.email?.message) ? "border-red-500" :""}`} 
    />
    {errors.email?.message}
    <input {...register("password",{
      required:"Password is required!",
    })} 
    type="password" 
    placeholder="Password" 
    />
    <input type="submit" value="Create Account" />
  </form>
  )
}