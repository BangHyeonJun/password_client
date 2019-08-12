import React from "react";

// SCSS 호출
import classNames from "classnames/bind";
import styles from "./search.module.scss";

// 사용자 컴포넌트
import Recommend from "./recommend";
const cx = classNames.bind(styles);

const search = () => {
    return (
        <div className={cx("searchContainer")}>
            <div className={cx("searchHeader")} />
            <input
                type="text"
                placeholder="검색어를 입력해 주세요"
                className={cx("searchBox")}
            />
            <button className={cx("searchButton")} />
            {/* <Recommend /> */}
            {/* TODO : 이 부분은 추후 구현 해줘야 함*/}
        </div>
    );
};

export default search;
