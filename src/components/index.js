import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./header";

/* 포스트 관련 */
import Post from "./post";
import PostList from "./postList";
import Write from "./write";

/* 유저 관련 */
import Join from "./member/join";
import Login from "./member/login";
import Logout from "./member/logout";
import Check from "./member/check";

/* 관리자 관련 */
import Admin from "./admin";
import Member_Management from "./admin/member";
import Post_Management from "./admin/post";

/* 테스트 */
import Test from "./test"; // TODO : 이 부분은 테스트 부분이므로 배포시 삭제해야합니다.

import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

export default class index extends Component {
    render() {
        return (
            <div className={cx("container")}>
                <Header />
                <div className={cx("router-box")}>
                    <Switch>
                        {/* 포스트 관련 */}
                        <Route exact path="/" component={PostList} />
                        <Route path="/post/:id" component={Post} />
                        <Route exact path="/write" component={Write} />
                        <Route path="/write/:id" component={Write} />

                        {/* 유저 관련 */}
                        <Route path="/member/login" component={Login} />
                        <Route path="/member/logout" component={Logout} />
                        <Route path="/member/join" component={Join} />
                        <Route path="/member/check" component={Check} />

                        {/* 관리자 관련 */}
                        <Route exact path="/admin" component={Admin} />
                        <Route
                            path="/admin/member"
                            component={Member_Management}
                        />
                        <Route path="/admin/post" component={Post_Management} />

                        {/* 테스트 */}
                        <Route path="/test" component={Test} />
                    </Switch>
                </div>
            </div>
        );
    }
}
