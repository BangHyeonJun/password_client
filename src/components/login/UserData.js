import React from "react";

/* 스타일 컴포넌트 */
import classNames from "classnames/bind";
import styles from "./UserData.module.scss";
const cx = classNames.bind(styles);

function UserData({ type, name, value, holder, onChange }) {
    return (
        <div className={cx("input-conatiner")}>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={holder}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
}

export default UserData;
