import React, { useState } from "react";
import { Link } from "react-router-dom";
import gql from "graphql-tag";
import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";

/* 이미지 태그 */
import move from "../../../static/images/arrow.svg";
import edit from "../../../static/images/edit.svg";
import trash from "../../../static/images/trash.svg";

/* 스타일 컴포넌트 */
import classNames from "classnames/bind";
import styles from "./Card.module.scss";
const cx = classNames.bind(styles);

// 참고 : https://think360studio.com/how-card-based-design-is-changing-web-mobile-ui-design/
const Card = ({ _id, site, url, id, password, description }) => {
    const color = ["#9b59b6", "#e74c3c", "#f39c12", "#2ecc71", "#3498db"];
    const [ID, setID] = useState("*****************");
    const [pwd, setPwd] = useState("*****************");

    const handleOver = type => {
        console.log(type);
        switch (type) {
            case "id":
                setID(id);
                break;
            case "password":
                setPwd(password);
                break;
        }
    };

    const handleOut = type => {
        switch (type) {
            case "id":
                setID("*****************");
                break;
            case "password":
                setPwd("*****************");
                break;
        }
    };

    return (
        <a href={url} className={cx("link")} target="_blank">
            <div className={cx("wrap")}>
                <div className={cx("container")}>
                    <div
                        className={cx("index")}
                        style={{
                            backgroundColor: `${
                                color[Math.floor(Math.random() * 5)]
                            }`
                        }}
                    >
                        <div className={cx("index-text")}>
                            <img
                                src={move}
                                alt="사이트 이동"
                                width="40"
                                height="40"
                            ></img>
                        </div>
                    </div>
                    <div className={cx("item-box")}>
                        <div className={cx("item")}>
                            <div className={cx("title-box")}>
                                <h4>사이트</h4>
                            </div>
                            <div className={cx("contents-box")}>
                                <h5>{site}</h5>
                            </div>
                        </div>
                        <div className={cx("item")}>
                            <div className={cx("title-box")}>
                                <h4>아이디</h4>
                            </div>
                            <div
                                onMouseOver={e => {
                                    handleOver("id");
                                }}
                                onMouseOut={e => {
                                    handleOut("id");
                                }}
                                className={cx("contents-box")}
                            >
                                <h5>{ID}</h5>
                            </div>
                        </div>
                        <div className={cx("item")}>
                            <div className={cx("title-box")}>
                                <h4>패스워드</h4>
                            </div>
                            <div
                                onMouseOver={e => {
                                    handleOver("password");
                                }}
                                onMouseOut={e => {
                                    handleOut("password");
                                }}
                                className={cx("contents-box")}
                            >
                                <h5>{pwd}</h5>
                            </div>
                        </div>
                        <div className={cx("item")}>
                            <div className={cx("title-box")}>
                                <h4>메모</h4>
                            </div>
                            <div className={cx("contents-box")}>
                                <h5>{description}</h5>
                            </div>
                        </div>
                        <div className={cx("button-container")}>
                            <button className={cx("edit")}>
                                <img src={edit}></img>
                            </button>
                            <button className={cx("remove")}>
                                <img src={trash}></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default Card;
