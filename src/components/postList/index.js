import React from "react";
import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import Masonry from "react-masonry-component";

// 사용자 컴포넌트
import Card from "./Card";
import Header from "../header";
// import Search from "../header/search";

// 사용자 스타일 컴포넌트
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);

const GET_POSTS = gql`
    query {
        getPosts {
            _id
            title
            text
            publish_date
            mainImg
            writer
        }
    }
`;

const PostList = () => {
    const {
        data: { getPosts: pList },
        error,
        loading
    } = useQuery(GET_POSTS);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error! {error.message}</div>;
    }

    for (let i = 0; i < 10; i++) {
        pList.push(pList[0]);
    }

    return (
        <Masonry className={cx("container")}>
            {pList.map(post => (
                <div
                    style={{
                        width: "360px",
                        height: 360 + Math.floor(Math.random() * 3) * 30 + "px"
                    }}
                >
                    test
                </div>
                // <Card
                //     key={post._id}
                //     id={post._id}
                //     img={post.mainImg}
                //     title={post.title}
                //     writer={post.writer}
                //     publish_date={post.publish_date}
                // />
            ))}
        </Masonry>

        // <div className={cx("container")}>
        //     <div className={cx("search-container")}>{/* <Search /> */}</div>
        //     <div className={cx("postlist-container")}>
        //         <div className={cx("postlist-box")}>
        //             {/* {data.post.map(post => (
        //                 <Card
        //                     key={post._id}
        //                     id={post._id}
        //                     img={post.mainImg}
        //                     title={post.title}
        //                     category={post.category}
        //                     publish_date={post.publish_date}
        //                     commentCount={post.comments.lenght}
        //                 />
        //             ))} */}
        //         </div>
        //     </div>
        // </div>
    );
};

export default PostList;
