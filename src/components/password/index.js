import React, { useState, useEffect } from "react";
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
import Search from "./search";

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
            password
            description
        }
    }
`;

const GET_PASSWORD_LIST_W_FILTER = gql`
    query($filter: String) {
        getPasswordWFilter(filter: $filter) {
            _id
            site
            url
            id
            password
            description
        }
    }
`;

const Index = ({ history }) => {
    const [flag, setflag] = useState(false);
    const [lodingFlag, setLoadingFlag] = useState(false);
    const [keyword, setKeword] = useState("");
    const [item, setItem] = useState([]);
    const { data, loading, error, refetch } = useQuery(GET_PASSWORD_LIST);

    useEffect(() => {
        if (data.getPasswordList) {
            setItem(data.getPasswordList);
        }
    }, [data.getPasswordList]);

    if (loading) {
        return <Loading></Loading>;
    }

    if (error) {
        return <Redirect to="/login" />;
    }

    const handleAddCard = e => {
        setflag(true);
    };

    const handleFilter = async e => {
        e.preventDefault();
        const val = e.target.value.toLowerCase();

        setItem(
            data.getPasswordList.filter(item => {
                let site = item.site.toLowerCase();
                let url = item.url.toLowerCase();
                let id = item.id.toLowerCase();
                let description = item.description.toLowerCase();

                if (
                    site.indexOf(val) > -1 ||
                    url.indexOf(val) > -1 ||
                    id.indexOf(val) > -1 ||
                    description.indexOf(val) > -1
                ) {
                    return item;
                }
            })
        );
    };

    return (
        <div className={cx("wrap")}>
            <AddCard
                flag={flag}
                setFlag={setflag}
                cacheQuery={refetch}
            ></AddCard>
            <div className={cx("container")}>
                <div className={cx("search-wrap")}>
                    <Search handleFilter={handleFilter}></Search>
                </div>
                <div className={cx("card-wrap")}>
                    {item.map(pData => {
                        return (
                            <Card
                                key={pData._id}
                                _id={pData._id}
                                site={pData.site}
                                url={pData.url}
                                id={pData.id}
                                password={pData.password}
                                description={pData.description}
                                cacheQuery={refetch}
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
