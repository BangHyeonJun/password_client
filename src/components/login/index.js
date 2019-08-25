import React, { useState, useEffect, useCallback } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";
import { Link, Redirect } from "react-router-dom";
import Common from "../common";

/* 사용자 컴포넌트 */
import UserData from "./UserData";
import Loading from "../loading";

/* 스타일 컴포넌트 */
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

const CHECK_SESSION = gql`
    query {
        checkSession
    }
`;

const SIGN_IN = gql`
    query SIGNIN($email: String!, $password: String!) {
        signin(email: $email, password: $password)
    }
`;

const Login = ({ history }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [SIGNINQUERY, { called, loading, data }] = useLazyQuery(SIGN_IN, {
        variables: { email, password },
        onCompleted(data) {
            const token = data.signin;
            localStorage.setItem(process.env.REACT_APP_TOKEN_PREFIX, token);
        }
    });

    // const handleLogin = async e => {
    //     e.preventDefault();
    //     const test = SIGNINQUERY();
    // };

    if (called && loading) return <p>Loading ...</p>;
    if (!called) {
        return (
            <div className={cx("login-wrap")}>
                <div className={cx("login-container")}>
                    <div className={cx("login-box")}>
                        <div>비밀번호</div>
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
                            <button
                                onClick={() => {
                                    SIGNINQUERY();
                                }}
                            >
                                로그인
                            </button>
                        </div>
                        <div>
                            <Link to={`/join`}>회원가입</Link>
                        </div>
                        <div>비밀번호 찾기</div>
                    </div>
                </div>
            </div>
        );
    }
    return data.signin && <Redirect to="/" />;
    // console.log(data);
    // return data.token && <Redirect to="/" />;

    // const { data, error, loading } = useQuery(CHECK_SESSION);
};

export default Login;
