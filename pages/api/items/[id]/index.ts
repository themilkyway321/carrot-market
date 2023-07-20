import { NextApiRequest, NextApiResponse } from "next";
import withHandler, { ResponseType } from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";


async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) {
  console.log(req.query);
  const { 
    query:{id},
    session:{user}, 
   }= req;
  const item = await client.item.findUnique({
    where: {
      id:Number(id),
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
  });
  const terms = item?.name.split(" ").map(word=>({
    name:{
      contains:word,
    }
  }));
  const relatedProducts = await client.item.findMany({
    where:{
      OR: terms,
      AND:{
        id:{
          not:item?.id,
        }
      }
    }
  });
  const isLiked = Boolean(
    await client.fav.findFirst({
      where:{
        itemId:item?.id,
        userId:user?.id
      },
      select:{
        id:true,
      },
    })
  );
  res.json({ ok: true, item, isLiked, relatedProducts });
}

export default withApiSession(
  withHandler({
    methods: ["GET"],
    handler,
  })
);