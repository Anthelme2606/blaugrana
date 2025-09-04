import { ApolloProvider } from "@apollo/client";

import { client } from "@app/client/app.client";
import UserContext from "@app/context/app.context";


const AppProvider = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <UserContext>
       {children}
      </UserContext>
    </ApolloProvider>
  );
};

export default AppProvider;
