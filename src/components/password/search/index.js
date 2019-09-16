import React, { useState } from "react";

/* 스타일 컴포넌트 */
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

function Index({handleFilter}) {
    return <input className={cx("search")} type="text" onChange={handleFilter}></input>;
}

export default Index;
