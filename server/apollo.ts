import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { typeDefs } from "@server/schema/typedefs";
import { resolvers } from "@server/schema/resolvers";
import { getAuthCookie, verifyToken } from "@lib/auth";
import { NextApiRequest, NextApiResponse } from "next";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
});

export const handler = startServerAndCreateNextHandler<NextApiRequest>(server, {
  context: async (req) => {
    try {
      const token: string = getAuthCookie(req)! ?? null;
      const user = verifyToken(token);
      console.log("User in context:", user);
      return { user };
    } catch (err) {
      console.error("Context error:", err);
      return { user: null };
    }
  },
});

export default async function handlerAPI(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.end();
    return;
  }

  await handler(req, res);
}
