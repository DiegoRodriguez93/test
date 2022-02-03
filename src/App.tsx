import {
  ApolloClient,
  ApolloProvider,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

import "./App.css";
import { CraeteUser } from "./components/CraeteUser";
import { UsersList } from "./components/UsersList";

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      alert(
        `GraphQL error message:${message} , locations:${locations}, path:${path}`
      );
    });
  }

  if (networkError) {
    alert(`Network error ${networkError}`);
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <UsersList />
        <CraeteUser />
      </div>
    </ApolloProvider>
  );
}

export default App;
