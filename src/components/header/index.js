import React, { useState } from "react";

// 리액트 라우터
import { Link } from "react-router-dom";

// 로고이미지
import LOGO from "../../static/images/logo.png";

// 사용자 컴포넌트
import Item from "./Item";
import Search from "./search";
import User from "./user";
import Menu from "./menu";

// 사용자 스타일 컴포넌트
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

const items = [
    {
        to: "/",
        name: "HOME"
    }
];

const Index = () => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <header className={cx("container")}>
            <div className={cx("logo-box")}>
                <Link to="/">
                    <img src={LOGO} />
                </Link>
            </div>
            <div className={cx("search-box")}>
                <Search value={searchValue} onChange={setSearchValue} />
            </div>
            <div className={cx("user-box")}>
                <User />
            </div>
            <div className={cx("menu-box")}>
                <Menu />
            </div>

            {/* {items.map(item => {
                return <Item to={item.to} name={item.name} />;
            })} */}
        </header>
    );
};

export default Index;
