import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";

const CHECK_LOGIN = gql`
    mutation LOGIN($email: String!, $password: String!) {
        login(email: $email, password: $password)
    }
`;

const Index = () => {
    let email = "";
    let password = "";

    const CHECKLOGINQUERY = useMutation(CHECK_LOGIN);
    const handleChange = e => {
        switch (e.target.name) {
            case "email":
                email = e.target.value;
                break;
            case "password":
                password = e.target.value;
                break;
            default:
                alert("알수없는 타입이 변경되었습니다.");
                break;
        }
    };

    const handleClick = async e => {
        const { data } = await CHECKLOGINQUERY({
            variables: { email, password }
        });

        // TODO : 오류처리 해줘야 함
        const token = data.login;
        console.log();
        localStorage.setItem(process.env.REACT_APP_TOKEN_PREFIX, token);
        alert("로그인 되었습니다.");
    };

    return (
        <div>
            <input
                type="text"
                name="email"
                onChange={handleChange}
                placeholder="아이디"
            />
            <input
                type="text"
                name="password"
                onChange={handleChange}
                placeholder="비밀번호"
            />
            <button onClick={handleClick}>tset</button>
        </div>
    );
};

export default Index;
