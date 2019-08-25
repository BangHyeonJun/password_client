import React from "react";
import LodingImage from "../../static/gif/loading.gif";

/* 스타일 컴포넌트 */
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

function Loading() {
    return (
        <div className={cx("container")}>
            <img src={LodingImage} alt="loading..." />
            <h3 className={cx("loading-text")}>Loading...</h3>
        </div>
    );
}

export default Loading;
