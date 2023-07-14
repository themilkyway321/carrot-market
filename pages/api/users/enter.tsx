import { NextApiRequest, NextApiResponse } from "next";
import withHandler,{ResponseType} from "@libs/server/withHandler";
import client from "@libs/server/client";
import twilio from "twilio";
import smtpTransport from "@libs/server/email";

const twiliClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
async function handler(
  req:NextApiRequest, 
  res:NextApiResponse<ResponseType>
){
const {phone, email}=req.body;
const user = phone ? { phone } : email ? { email } : null;
if(!user) return res.status(400).json({ok:false});
const payload = Math.floor(100000 + Math.random() * 900000) + "";
const token = await client.token.create({
  data:{
    payload,
    user:{
      connectOrCreate:{
        where:{
          ...user
        },
        create:{
          name:"anyone",
          ...user,
        },
      }
    },
  },
});
if(phone){
  /* const message = await twiliClient.messages.create({
    messagingServiceSid:process.env.TWILIO_MESSAGING_SERVICE,
    to:process.env.MY_PHONE!,
    from: "+16815506768",
    body:`Your login token is ${payload}`
  });
  console.log(message); */
}
if (email) {
  // const mailOptions = {
  // from: process.env.MAIL_ID,
  // to: process.env.MAIL_ID,
  // subject: "Nomad Carrot Authentication Email",
  // text: `Authentication Code : ${payload}`,
  // };
  // const result = await smtpTransport.sendMail(
  // mailOptions,
  // (error, responses) => {
  // if (error) {
  // console.log(error);
  // return null;
  // } else {
  // console.log(responses);
  // return null;
  // }
  // }
  // );
  // smtpTransport.close();
  // console.log(result);
  }
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
return res.json({
  ok:true,
})
}

export default withHandler({methods:["POST"], handler, isPrivate:false});