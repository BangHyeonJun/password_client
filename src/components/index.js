import React from "react";
import { Switch, Route } from "react-router-dom";

/* 패스워드 관련 */
import Password from "./password";
/* 로그인 관련 */
import Login from "./login";
import Join from "./join";

/* 스타일 컴포넌트 */
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

const Index = ({ history }) => {
    return (
        <div className={cx("container")}>
            <Switch>
                {/* 패스워드 관련 */}
                <Route exact path="/" component={Password} />

                {/* 로그인 관련 */}
                <Route path="/login" component={Login} />
                <Route path="/join" component={Join} />
            </Switch>
        </div>
    );
};

export default Index;
