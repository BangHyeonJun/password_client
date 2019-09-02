import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { Redirect } from "react-router-dom";

/* 사용자 컴포넌트 */
import UserData from "./UserData";
import Loading from "../loading";
import Login from "../login";
import { from } from "zen-observable";

/* 스타일 컴포넌트 */
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

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
        if (confirm !== password) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        const { data } = await SIGNUPQUERY({ variables: { email, password } });
        const result = data.signup;

        if (result) {
            history.push("/login");
        }
    };

    return (
        <div className={cx("login-wrap")}>
            <div className={cx("login-container")}>
                <div className={cx("login-title")}>
                    <h3>JOIN US</h3>
                </div>
                <div className={cx("login-box")}>
                    <div className={cx("item-wrap")}>
                        <UserData
                            type={"email"}
                            name={"id"}
                            value={email}
                            placeholder={"이메일"}
                            onChange={setEmail}
                        />
                    </div>
                    <div className={cx("item-wrap")}>
                        <UserData
                            type={"password"}
                            name={"password"}
                            value={password}
                            placeholder={"비밀번호"}
                            onChange={setPassword}
                        />
                    </div>
                    <div className={cx("item-wrap")}>
                        <UserData
                            type={"password"}
                            name={"password"}
                            value={confirm}
                            placeholder={"비밀번호 확인"}
                            onChange={setConfirm}
                        />
                    </div>
                    <div className={cx("item-wrap")}>
                        <button
                            className={cx("login-button")}
                            onClick={handleJoin}
                        >
                            회원가입
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Join;
