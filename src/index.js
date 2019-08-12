import React from "react";
import ReactDOM from "react-dom";
import MyRootComponent from "./components";
import client from "./apolloClient";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import "./index.scss";

const App = () => (
    <BrowserRouter>
        <ApolloHooksProvider client={client}>
            <MyRootComponent />
        </ApolloHooksProvider>
    </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
