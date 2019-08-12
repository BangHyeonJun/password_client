import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

// 사용자 CSS
import "./index.scss";

// 사용자 컴포넌트
import Writer from "./Writer";
import Contents from "./Contents";
import Another from "./Another";
import Title from "./Title";

const GET_POST = gql`
    query($id: String!) {
        getPost(id: $id) {
            title
            content
            comments {
                publish_date
            }
        }
    }
`;

const Post = ({
    match: {
        params: { id }
    }
}) => {
    const { data, error, loading } = useQuery(GET_POST, {
        variables: { id: id }
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    }

    return (
        <div className="post-container">
            <div className="post-box">
                <div className="post-title-container">
                    <Title />
                </div>
                <div className="post-main-container">
                    <Writer />
                    <Contents />
                    <Another />
                </div>
                {/* <div>{title}</div>
            <div>{content}</div>
            <div>댓글</div> */}
            </div>
        </div>
    );
};

export default Post;
