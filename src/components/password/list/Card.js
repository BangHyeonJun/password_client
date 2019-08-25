import React from "react";
import { Link } from "react-router-dom";

/* 이미지 태그 */
import move from "../../../static/images/arrow.svg";

/* 스타일 컴포넌트 */
import classNames from "classnames/bind";
import styles from "./Card.module.scss";
const cx = classNames.bind(styles);

// 참고 : https://think360studio.com/how-card-based-design-is-changing-web-mobile-ui-design/
const Card = ({ _id, site, url, id, password, description }) => {
    const color = ["#9b59b6", "#e74c3c", "#f39c12", "#2ecc71", "#3498db"];

    return (
        <Link to={url} className={cx("link")}>
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
                            <div className={cx("content-box")}>
                                <h5>{site}</h5>
                            </div>
                        </div>
                        <div className={cx("item")}>
                            <div className={cx("title-box")}>
                                <h4>아이디</h4>
                            </div>
                            <div className={cx("content-box")}>
                                <h5>{id}</h5>
                            </div>
                        </div>
                        <div className={cx("item")}>
                            <div className={cx("title-box")}>
                                <h4>패스워드</h4>
                            </div>
                            <div className={cx("content-box")}>
                                <h5>{password}</h5>
                            </div>
                        </div>
                        <div className={cx("item")}>
                            <div className={cx("title-box")}>
                                <h4>메모</h4>
                            </div>
                            <div className={cx("content-box")}>
                                <h5>{description}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Card;
