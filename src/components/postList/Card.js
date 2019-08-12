import React from "react";
import noImg from "../../static/images/no_image.png";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Card.module.scss";
import classNames from "classnames/bind";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

const cx = classNames.bind(styles);

const GET_MEMBER = gql`
    query($id: String!) {
        getMember(id: $id) {
            avatar
        }
    }
`;
const Card = ({ id, img, title, publish_date, writer }) => {
    const {
        data: { getMember: member },
        error,
        loading
    } = useQuery(GET_MEMBER, {
        variables: { id: writer }
    });

    console.log(member);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    }

    let pub_date = (() => {
        let d = new Date(publish_date * 1);
        let year = d.getFullYear() + "";
        let month =
            d.getMonth() + 1 < 10
                ? "0" + (d.getMonth() + 1)
                : d.getMonth() + 1 + "";
        let day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate() + "";

        return year + "." + month + "." + day;
    })();

    let mainImg = `http://localhost:4000/blog/img/post/${img}`;
    let arvatarImg = `http://localhost:4000/blog/img/avatar/${member.avatar}`;
    const card_height = "card" + (Math.floor(Math.random() * 5) + 1);

    return (
        <Link to={`post/${id}/`} className={cx("a-Lnik", `${card_height}`)}>
            <article className={cx("card-wrap")}>
                <div className={cx("mainImg-container")}>
                    <div className={cx("mainImg-Box")}>
                        <img src={mainImg} />
                    </div>
                    <div className={cx("avatar-box")}>
                        <img src={arvatarImg} />
                    </div>
                </div>
                <div className={cx("description-container")}>
                    <div className={cx("pubdate_box")}>
                        <span>{pub_date}</span>
                    </div>
                    <div>
                        <span>{title}</span>
                    </div>
                    <div />
                </div>
            </article>
        </Link>
        // <Link to={`post/${id}/`} className={cx("a-Lnik")}>
        //     <div className={cx("post-list-card-container")}>
        //         <div className={cx("post-list-card")}>
        //             <div className={cx("post-list-front")}>
        //                 <div className={cx("post-list-img-container")}>
        //                     {img ? (
        //                         <img src={`http://localhost:4000${img}`} />
        //                     ) : (
        //                         <img src={noImg} />
        //                     )}
        //                 </div>
        //                 <div className={cx("post-list-main-container")}>
        //                     <div
        //                         className={cx(
        //                             "post-list-publish-date-container"
        //                         )}
        //                     >
        //                         <h5>{pub_date}</h5>
        //                     </div>
        //                     <div className={cx("post-list-title-container")}>
        //                         <h3>{title}</h3>
        //                     </div>
        //                     <div
        //                         className={cx(
        //                             "post-list-detail-info-container"
        //                         )}
        //                     >
        //                         <h5>자세히 보기</h5>
        //                         <FontAwesomeIcon icon={faArrowRight} />
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className={cx("post-list-back")}>
        //                 <div>{category}</div>
        //                 <div className={cx("post-list-detail-info-container")}>
        //                     <h5>자세히 보기</h5>
        //                     <FontAwesomeIcon icon={faArrowRight} />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </Link>
    );
};

export default Card;
