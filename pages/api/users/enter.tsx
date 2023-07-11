import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";

async function handler(
  req:NextApiRequest, 
  res:NextApiResponse
){
const {phone, email}=req.body;
const payload = phone? {phone:+phone} :{email}
const user = await client.user.upsert({
  where:{
    ...payload
  },
  create:{
    name:"anyone",
    ...payload,
  },
  update:{},
});
const token = await client.token.create({
  data:{
    payload:"12345",
    user:{
      connect:{
        id:user.id,
      }
    },
  },
});
console.log(token);
console.log(user);
/* if(email){
  user = await client.user.findUnique({
    where:{
      email,
    },
  });
  if(user )console.log("found it");
  if(!user){
    console.log("did not find. will create.");
    user = await client.user.create({
      data:{
        name:"anonymous",
        email,
      }
    });
  }
  console.log(user);
}
if(phone){
  user = await client.user.findUnique({
    where:{
      phone:+phone,
    },
  });
  if(user )console.log("found it");
  if(!user){
    console.log("did not find. will create.");
    user = await client.user.create({
      data:{
        name:"anonymous",
        phone:+phone,
      }
    });
  }
  console.log(user);
} */
return res.status(200).end();
}

export default withHandler("POST", handler);