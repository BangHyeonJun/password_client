import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";
import { Link, Redirect } from "react-router-dom";
import Common from "../common";

/* 이미지 컴포넌트 */
import plus from "../../static/images/plus.svg";

/* 사용자 컴포넌트 */
import Loading from "../loading";
import Card from "./list/Card";
import AddCard from "./add/modal";

/* 스타일 컴포넌트 */
import classNames from "classnames/bind";
import styles from "./index.module.scss";
const cx = classNames.bind(styles);

const GET_PASSWORD_LIST = gql`
    query {
        getPasswordList {
            _id
            site
            url
            id
            description
        }
    }
`;

const Index = ({ history }) => {
    const [flag, setflag] = useState(false);
    const { data, loading, error } = useQuery(GET_PASSWORD_LIST);
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <Redirect to="/login" />;
    }

    const handleAddCard = e => {
        setflag(true);
    };

    return (
        <div className={cx("wrap")}>
            <AddCard flag={flag} setFlag={setflag}></AddCard>
            <div className={cx("container")}>
                <div>
                    <input type="text" />
                </div>
                <div className={cx("card-wrap")}>
                    {data.getPasswordList.map(pData => {
                        return (
                            <Card
                                key={pData._id}
                                _id={pData._id}
                                site={pData.site}
                                url={pData.url}
                                id={pData.id}
                                password={pData.password}
                                description={pData.description}
                            />
                        );
                    })}
                </div>
                <div className={cx("add-button-container")}>
                    <button onClick={handleAddCard}>
                        <img src={plus}></img>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Index;
