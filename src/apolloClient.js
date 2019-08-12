import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";
import { HttpLink } from "apollo-link-http"; // TODO : 안쓰면 지울것
import { onError } from "apollo-link-error"; // TODO : 안쓰면 지울것
import { ApolloLink } from "apollo-link"; // TODO : 안쓰면 지울것
import { createUploadLink } from "apollo-upload-client";

// const client = new ApolloClient({
//     link: ApolloLink.from([
//         onError(({ graphQLErrors, networkError }) => {
//             if (graphQLErrors)
//                 graphQLErrors.map(({ message, locations, path }) =>
//                     console.log(
//                         `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
//                     )
//                 );
//             if (networkError) console.log(`[Network error]: ${networkError}`);
//         }),
//         new HttpLink({
//             uri: "http://localhost:4000/",
//             credentials: "same-origin"
//         }),
//         createUploadLink({
//             uri: "http://localhost:4000/"
//         })
//     ]),
//     cache: new InMemoryCache()
// });

const httpLink = createUploadLink({
    uri: "http://localhost:4000/blog",
    credentials: "same-origin"
});

const authLink = setContext((_, { headers }) => {
    const key = process.env.REACT_APP_TOKEN_PREFIX;

    // 만약 인증 토큰이 로컬 스토리지에 존재한다면 token을 가져옵니다.
    const token = localStorage.getItem(key);
    // httpLink가 헤더를 읽을 수 있도록 헤더를 컨텍스트로 리턴하십시오.
    return {
        headers: {
            ...headers,
            "X-JWT": token ? `Bearer ${token}` : ""
        }
    };
});

// 아오 시바 이거떄문에 이틀을 고생했네.... react-boost가 upload를 지원안하네...
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink)
});

export default client;
