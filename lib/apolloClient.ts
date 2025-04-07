import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { isBrowser } from "@utils/isBrowser";

const createApolloClient = () => {
  const link = new HttpLink({
    uri: isBrowser()
      ? "/api/graphql"
      : `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`,
    credentials: "same-origin",
  });

  return new ApolloClient({
    ssrMode: !isBrowser(),
    link,
    cache: new InMemoryCache(),
  });
};

export const apolloClient = createApolloClient();
