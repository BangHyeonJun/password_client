import React, { useState } from "react";

// SCSS 호출
import classNames from "classnames/bind";
import styles from "./index.module.scss";

// 사용자 컨테이너
import Search from "./search";
const cx = classNames.bind(styles);

const index = ({ value, onChange }) => {
    return (
        <div className={cx("search-box")}>
            <input
                type="text"
                value={value}
                placeholder="검색"
                className={cx("search")}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
};

export default index;
