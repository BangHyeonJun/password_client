import React, { Component } from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

const GET_LOGIN_MEMBER = gql`
    {
        getLoginMember {
            _id
        }
    }
`;

const Check = () => {
    const { data, error, loading } = useQuery(GET_LOGIN_MEMBER);

    console.log("test : ", data);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    }

    return <div className="post-container" />;
};

export default Check;
