import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";

/* 스타일 컴포넌트 */
import classNames from "classnames/bind";
import styles from "./modal.module.scss";
const cx = classNames.bind(styles);

const Index = ({ flag, setFlag }) => {
    const handleAddModal = () => {
        setFlag(false);
    };

    return (
        <div className={cx("bg")} style={{ display: flag ? "flex" : "none" }}>
            <div className={cx("modal-wrap")}>
                <div className={cx("title")}>
                    <h2>카드 추가</h2>
                </div>
                <div className={cx("item")}>
                    <div className={cx("input")}>
                        <input type="text" required></input>
                        <span className={cx("highlight")}></span>
                        <label>사이트</label>
                    </div>
                </div>
                <div className={cx("item")}>
                    <div className={cx("input")}>
                        <input type="text" required></input>
                        <span className={cx("highlight")}></span>
                        <label>URL</label>
                    </div>
                </div>
                <div className={cx("item")}>
                    <div className={cx("input")}>
                        <input type="text" required></input>
                        <span className={cx("highlight")}></span>
                        <label>아이디</label>
                    </div>
                </div>
                <div className={cx("item")}>
                    <div className={cx("input")}>
                        <input type="text" required></input>
                        <span className={cx("highlight")}></span>
                        <label>패스워드</label>
                    </div>
                </div>
                <div className={cx("item")}>
                    <div className={cx("input")}>
                        <input type="text" required></input>
                        <span className={cx("highlight")}></span>
                        <label>메모</label>
                    </div>
                </div>
                <div className={cx("button-box")}>
                    <button className={cx("cancel")} onClick={handleAddModal}>
                        취소
                    </button>
                    <button className={cx("save")}>완료</button>
                </div>
            </div>
        </div>
    );
};

export default Index;
