import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

/* 사용자 컴포넌트 */
import List from "./List";

const GET_POSTS = gql`
    {
        getPosts {
            _id
            mainImg {
                path
            }
            category
            title
            publish_date
            content
            comments {
                publish_date
                name
                content
            }
        }
    }
`;

// TODO : 여기 작업하다가 말았음, 먼저 게시물 쓰기를 만드는게 더 좋을거 같음
const Index = () => {
    const { data, error, loading } = useQuery(GET_POSTS);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>등록일</td>
                        <td />
                        <td>가입일</td>
                        <td>권한</td>
                    </tr>
                </thead>
                <tbody>
                    {data.getPosts.map(post => {
                        return <List key={post._id} data={post} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
