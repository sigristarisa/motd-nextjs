// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  sendDataResponse,
  sendMessageResponse,
} from "../../../helpers/responses";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { mayoId } = req.query;
  try {
    const foundMayonnaise = await Mayonnaise.findById(mayoId);

    if (!foundMayonnaise) {
      return sendDataResponse(res, 404, { id: "mayonnaise not found" });
    }

    return sendDataResponse(res, 200, foundMayonnaise);
  } catch (error: any) {
    console.error("What happened?: ", error.message);
    return sendMessageResponse(res, 500, "Unable to send mayonnaise");
  }

  // res.status(200).json({ name: "John Doe" });
}
