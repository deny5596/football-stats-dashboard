import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from "relay-runtime";

const fetchGraphQL: FetchFunction = async (params, variables) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: params.text, variables }),
    }
  );

  return await response.json();
};

export const createRelayEnvironment = () => {
  const network = Network.create(fetchGraphQL);
  const store = new Store(new RecordSource());

  return new Environment({
    network,
    store,
  });
};

export const relayEnvironment = createRelayEnvironment();
