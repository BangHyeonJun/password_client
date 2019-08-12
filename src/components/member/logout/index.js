import React from "react";

export default function index() {
    localStorage.removeItem(process.env.REACT_APP_TOKEN_PREFIX);
    return <div>로그아웃이 완료되었습니다.</div>;
}
