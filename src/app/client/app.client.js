import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { WebSocketLink } from '@apollo/client/link/ws';
import Cookies from 'js-cookie';
import { split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
//https://qr-code-api-bzb5.vercel.app/graphql
//http://localhost:4000/graphql
const api_http_url ="http://localhost:4000/graphql" ;
const api_https_url= "https://ai-match-mentorat-api-ste3.vercel.app/graphql";
const api_wss_url = "wss://qr-code-api-bzb5.vercel.app/graphql" || "wss://abi-qr-api-dwgra9fkcadbakhf.canadacentral-01.azurewebsites.net/graphql";


const authLink = setContext((_, { headers }) => {
    const token = Cookies.get('token');
    return {
        headers: {
            ...headers,
            authorization: token ? `${token}` : '',
        },
    };
});

// Create a WebSocket link for subscriptions
// const wsLink = new WebSocketLink({
//   uri: api_wss_url, 
//   options: {
//     reconnect: true,
//     connectionParams: {
//       authToken: Cookies.get('token') || '',
//     },
//   },
// });


// Use split to route requests to the correct link


// Use split to send data to each link
// const link = split(
//     ({ query }) => {
//         const definition = getMainDefinition(query);
//         return (
//             definition.kind === 'OperationDefinition'
//              && definition.operation === 'subscription'
//         );
//     },
//     wsLink,  
//     authLink.concat(createUploadLink({
//         uri: api_https_url
//     })) // Use HTTP link for queries and mutations
// );
const link = authLink.concat(createUploadLink({
    uri: api_http_url
}));


export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
});

// Provider for the application


