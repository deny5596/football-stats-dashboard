import { NextApiRequest, NextApiResponse } from "next";
import { getAuthCookie, verifyToken } from "@lib/auth";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = getAuthCookie(req);
  if (!token) return res.status(401).json({ message: "No token" });

  const user = verifyToken(token);
  if (!user) return res.status(401).json({ message: "Invalid token" });

  return res.status(200).json({ user });
}
