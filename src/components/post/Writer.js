import React from "react";
import noImg from "../../static/images/no_image.png";
import "./Writer.scss";

const Writer = () => {
    return (
        <div className="post-writer-container">
            <div className="post-card">
                <div className="arvartar-container">
                    <img src={noImg} />
                </div>
                <div className="info-container">
                    <div className="user-container">
                        <h3>사용자 이름</h3>
                        <h4>(@test)</h4>
                    </div>
                    <div className="email-container">이메일</div>
                    <div className="introduce-container">
                        <span>테스트입니다.테스트입니다.</span>
                    </div>
                    <div className="sns-container">SNS</div>
                </div>
            </div>
        </div>
    );
};

export default Writer;
