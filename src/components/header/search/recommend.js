import React from "react";

// SCSS 호출
import classNames from "classnames/bind";
import styles from "./recommend.module.scss";
const cx = classNames.bind(styles);

const recommend = title => {
    return <div className={cx("recommendContainer")} />;
};

export default recommend;
