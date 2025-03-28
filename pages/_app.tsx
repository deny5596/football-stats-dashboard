import "@styles/global.css";

import type { AppProps } from "next/app";
import { RelayEnvironmentProvider } from "react-relay";
import { relayEnvironment } from "@lib/relayEnvironment";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "@lib/apolloClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </RelayEnvironmentProvider>
  );
}

export default MyApp;
