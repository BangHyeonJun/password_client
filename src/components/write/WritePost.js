import React, { useState } from "react";

// Apollo
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";

/* 사용자 컴포넌트 */
import PostTitle from "./PostTitle";
import PostBody from "./PostBody";
import PostHashtag from "./PostHashtag";
import PostMainImg from "./PostMainImg";

const UPLOAD_MAIN_IMG = gql`
    mutation($postID: String!, $file: Upload!) {
        UploadMainImg(postID: $postID, file: $file) {
            filename
        }
    }
`;

const INSERT_POST = gql`
    mutation(
        $userID: String!
        $hashtag: String!
        $title: String!
        $text: String!
        $html: String!
    ) {
        insertPost(
            userID: $userID
            hashtag: $hashtag
            title: $title
            text: $text
            html: $html
        ) {
            _id
        }
    }
`;

const WritePost = ({ userID }) => {
    // 리액트 HOOKS
    const writer = userID;
    const [title, setTitle] = useState("");
    const [mainImg, setMainImg] = useState({});
    const [text, setText] = useState("");
    const [html, setHtml] = useState("");
    const [hashtag, setHashtag] = useState("");

    // 서버 쿼리
    const uploadMainImgMutation = useMutation(UPLOAD_MAIN_IMG);
    const insertPostMutation = useMutation(INSERT_POST);

    // 제목 변경 시 타이틀 적용
    const handelTitle = val => {
        setTitle(val);
    };

    // 이미지 변경 시 메인이미지 적용
    const handleMainImg = val => {
        console.log(val);
        setMainImg(val);
    };

    // 해시태그 변경 시 해시태그 적용
    const handleHashtag = val => {
        setHashtag(val);
    };

    // 바디 변경 시 내용 적용
    const handleBody = (name, val) => {
        switch (name) {
            case "html":
                setHtml(val);
                break;
            case "text":
                setText(val);
                break;
        }
    };

    const test = async () => {
        console.log("title", title);
        console.log("mainImg", mainImg);
        console.log("text", text);
        console.log("html", html);
        console.log("hashtag", hashtag);

        // TODO : 메인 이미지 작업 진행해야함
        const postResult = await insertPostMutation({
            variables: {
                userID: writer,
                hashtag: hashtag,
                title: title,
                text: text,
                html: html
            }
        });

        console.log(postResult);

        await uploadMainImgMutation({
            variables: {
                postID: postResult.data.insertPost._id,
                file: mainImg
            }
        });
    };

    return (
        <div>
            <PostTitle userTitle={title} onChange={handelTitle} />
            <PostMainImg userMainImg={mainImg} onChange={handleMainImg} />
            <PostBody userText={text} userHtml={html} onChange={handleBody} />
            <PostHashtag userHashtag={hashtag} onChange={handleHashtag} />
            <button onClick={test}>완료</button>
        </div>
    );
};

export default WritePost;
