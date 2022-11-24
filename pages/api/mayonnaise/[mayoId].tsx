import Mayo from "../../../helpers/mayonnaiseModel";
import { Data } from "../../../helpers/types";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  sendDataResponse,
  sendMessageResponse,
} from "../../../helpers/responses";

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { mayoId } = req.query;
  try {
    const foundMayonnaise = await Mayo.findById(+mayoId!);

    if (!foundMayonnaise) {
      return sendDataResponse(res, 404, { id: "mayonnaise not found" });
    }

    return sendDataResponse(res, 200, foundMayonnaise);
  } catch (error: any) {
    console.error("What happened?: ", error.message);
    return sendMessageResponse(res, 500, "Unable to send mayonnaise");
  }
};

export default handler;
