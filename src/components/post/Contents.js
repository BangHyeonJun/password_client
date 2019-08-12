import React from "react";
import "./Contents.scss";

// 사용자 컴포넌트
import Comment from "./Comment";
import ContentText from "./ContentText";

const Contents = () => {
    return (
        <div className="post-contents-container">
            <ContentText />
            <Comment />
        </div>
    );
};

export default Contents;
