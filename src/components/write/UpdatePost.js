import React from "react";

// Apollo
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

const GET_POST = gql`
    query GETPOST($postID: String!) {
        getPost(id: $postID) {
            _id
            mainImg
            category
            title
            publish_date
            content
        }
    }
`;

const UpdatePost = ({ postID, userID }) => {
    const { data, error, loading } = useQuery(GET_POST, {
        variables: { postID }
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    }

    console.log(data.getPost);
    if (data.getPost.writer == userID) {
        console.log(data.getPost);
    }

    return <div>테스트</div>;
};
export default UpdatePost;
