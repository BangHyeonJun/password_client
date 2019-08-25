import React from "react";
import ReactDOM from "react-dom";
import MyRootComponent from "./components";
import client from "./apolloClient";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import "./index.scss";

const App = () => (
    <Router>
        <ApolloHooksProvider client={client}>
            <MyRootComponent />
        </ApolloHooksProvider>
    </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
