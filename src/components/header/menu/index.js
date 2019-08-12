import React from "react";

// 사용자 스타일 컴포넌트
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

const index = () => {
    return <div className={cx("menu")} />;
};

export default index;
