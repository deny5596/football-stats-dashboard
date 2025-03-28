import { NextApiRequest, NextApiResponse } from "next";
import { saveUser, getUsers } from "@server/utils/userStore";
import { generateToken, setAuthCookie } from "@lib/auth";
import { v4 as uuidv4 } from "uuid";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end("Method not allowed");

  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const existing = getUsers().find((user) => user.username === username);
  if (existing) {
    return res.status(409).json({ message: "Username already exists" });
  }

  const newUser = {
    id: uuidv4(),
    name: String(username).charAt(0).toUpperCase() + String(username).slice(1),
    username,
    password,
    role,
  };

  saveUser(newUser);

  const token = generateToken({
    id: newUser.id,
    name: newUser.name,
    username,
    role,
  });
  setAuthCookie(res, token);

  res
    .status(201)
    .json({ message: "Account created", user: { username, role } });
}
