import React from "react";

// 리액트 라우터
import { Link } from "react-router-dom";

// 사용자 스타일 컴포넌트
import classNames from "classnames/bind";
import styles from "./item.module.scss";
const cx = classNames.bind(styles);

const Item = ({ to, name }) => {
    return (
        <Link to={to} className={cx("")}>
            {name}
        </Link>
    );
};

export default Item;
