import { NextApiRequest, NextApiResponse } from "next";
import { generateToken, setAuthCookie } from "@lib/auth";

import users from "@server/__data__/users.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { username, password } = req.body;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken({
    id: user.id,
    name: user.name,
    username: user.username,
    role: user.role as "admin" | "viewer",
  });
  setAuthCookie(res, token);

  return res.status(200).json({
    message: "Login successful",
    user: { username: user.username, role: user.role },
  });
}
