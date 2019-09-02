import React from "react";

/* 스타일 컴포넌트 */
import classNames from "classnames/bind";
import styles from "./UserData.module.scss";
const cx = classNames.bind(styles);

function UserData({ type, name, value, placeholder, onChange }) {
    return (
        <div className={cx("input-conatiner")}>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={e => onChange(e.target.value)}
            />
            <span>{}</span>
        </div>
    );
}

export default UserData;
