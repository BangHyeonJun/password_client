import React from "react";
import gql from "graphql-tag";
import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";
import { Link, Redirect } from "react-router-dom";

const CHECK_SESSION = gql`
    query {
        checkSession
    }
`;

const Common = ({ history }) => {
    console.log(history);
    const { data, error, loading } = useQuery(CHECK_SESSION, {
        pollInterval: 500
    });

    console.log("test");
    if (!data.checkSession) {
        return <Redirect to="/login" />;
    }
};

export default Common;
