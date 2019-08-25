import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Redirect } from "react-router-dom";

/* 사용자 컴포넌트 */
import UserData from "./UserData";
import Loading from "../loading";
import Login from "../login";
import { from } from "zen-observable";

//
const SIGN_UP = gql`
    mutation SIGNUP($email: String!, $password: String!) {
        signup(email: $email, password: $password)
    }
`;

function Join({ history }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const [
        SIGNUPQUERY,
        { loading: mutationLoading, error: mutationError }
    ] = useMutation(SIGN_UP);

    const handleJoin = async e => {
        e.preventDefault();
        const { data } = await SIGNUPQUERY({ variables: { email, password } });
        const result = data.signup;

        if (result) {
            history.push("/login");
        }
    };

    return (
        <div>
            <div>
                <UserData
                    type={"email"}
                    name={"id"}
                    value={email}
                    onChange={setEmail}
                />
            </div>
            <div>
                <UserData
                    type={"password"}
                    name={"password"}
                    value={password}
                    onChange={setPassword}
                />
            </div>
            <div>
                <UserData
                    type={"password"}
                    name={"password"}
                    value={confirm}
                    onChange={setConfirm}
                />
            </div>
            <div>
                <button onClick={handleJoin}>회원가입</button>
            </div>
            {mutationLoading && <Loading />}
            {mutationError && <p>Error :( Please try again</p>}
        </div>
    );
}

export default Join;
