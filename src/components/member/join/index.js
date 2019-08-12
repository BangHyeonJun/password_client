import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";

const JOIN_IN = gql`
    mutation JOININ($email: String!) {
        signup(email: $email) {
            password
        }
    }
`;

const Index = () => {
    const JOIN_IN_QUERY = useMutation(JOIN_IN);
    let email = "";

    const handleChange = e => {
        switch (e.target.name) {
            case "email":
                email = e.target.value;
                break;
            default:
                alert("알수없는 타입이 변경되었습니다.");
                break;
        }
    };

    const handleClick = async () => {
        console.log(email);
        const { data } = await JOIN_IN_QUERY({
            variables: { email }
        });

        // TODO : 오류처리 해줘야 함
        console.log(data);
    };

    return (
        <div>
            <input
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="아이디"
            />
            <button onClick={handleClick}>회원가입</button>
        </div>
    );
};

export default Index;
