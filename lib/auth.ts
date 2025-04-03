import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import { User, TokenUser } from "@interfaces/index";

const SECRET = process.env.JWT_SECRET ?? "supersecretkey";
const COOKIE_NAME = process.env.COOKIE_NAME ?? "secret-token";
const MAX_AGE = 60 * 60 * 2;

export function generateToken(user: TokenUser): string {
  return jwt.sign(user, SECRET, { expiresIn: MAX_AGE });
}

export function verifyToken(token: string | null): User | null {
  try {
    return jwt.verify(token ?? "", SECRET) as User;
  } catch {
    return null;
  }
}

export function setAuthCookie(res: NextApiResponse, token: string): void {
  res.setHeader(
    "Set-Cookie",
    `${COOKIE_NAME}=${token}; HttpOnly; Path=/; Max-Age=${MAX_AGE}; SameSite=Lax`
  );
}

export function clearAuthCookie(res: NextApiResponse): void {
  res.setHeader(
    "Set-Cookie",
    `${COOKIE_NAME}=; HttpOnly; Path=/; Max-Age=0; SameSite=Lax`
  );
}

export function getAuthCookie(req: NextApiRequest): string | null {
  const cookie = req.headers.cookie;
  if (!cookie) return null;

  const token = cookie
    .split(";")
    .find((c) => c.trim().startsWith(`${COOKIE_NAME}=`))
    ?.split("=")[1];

  return token ?? null;
}
