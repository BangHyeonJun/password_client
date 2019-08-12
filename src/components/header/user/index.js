import React from "react";
import no_profile from "../../../static/images/no-profile.jpg";

// 사용자 스타일 컴포넌트
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

const index = () => {
    return (
        <div className={cx("profile-box")}>
            <img src={no_profile} className={cx("profile")} />
        </div>
    );
};

export default index;
