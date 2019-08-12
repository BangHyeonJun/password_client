import React, { Component } from "react";
import { Link } from "react-router-dom";

class index extends Component {
    render() {
        return (
            <div className="flex pa1 justify-between nowrap orange">
                <div className="flex flex-fixed black">
                    <Link to="/" className="ml1 no-underline black">
                        포스트 리스트
                    </Link>
                    |
                    <Link to="/post" className="ml1 no-underline black">
                        포스트
                    </Link>
                    |
                    <Link to="/write" className="ml1 no-underline black">
                        글쓰기
                    </Link>
                    |
                    <Link to="/login" className="ml1 no-underline black">
                        로그인
                    </Link>
                    |
                    <Link to="/test" className="ml1 no-underline black">
                        테스트
                    </Link>
                </div>
            </div>
        );
    }
}

export default index;
