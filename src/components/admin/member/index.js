import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

/* 사용자 컴포넌트 */
import List from "./List";

const GET_MEMBERS = gql`
    {
        getMembers {
            _id
            email
            nickname
            join_date
            role
        }
    }
`;

const Index = () => {
    const { data, error, loading } = useQuery(GET_MEMBERS);

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
                        <td>이메일</td>
                        <td>닉네임</td>
                        <td>가입일</td>
                        <td>권한</td>
                    </tr>
                </thead>
                <tbody>
                    {data.getMembers.map(user => {
                        return <List key={user._id} data={user} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Index;
