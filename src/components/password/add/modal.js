import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation, useLazyQuery } from "@apollo/react-hooks";

/* 스타일 컴포넌트 */
import classNames from "classnames/bind";
import styles from "./modal.module.scss";

/*사용자 컴포넌트 */
import Loading from "../../loading";
const cx = classNames.bind(styles);

const INPUT_PASSWORD = gql`
    mutation INPUTPASSWORD(
        $site: String
        $url: String
        $id: String!
        $password: String!
        $description: String
    ) {
        inputPassword(
            site: $site
            url: $url
            id: $id
            password: $password
            description: $description
        ) {
            _id
            site
            url
            id
            password
            description
        }
    }
`;

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

const Index = ({ flag, setFlag, cacheQuery }) => {
    const [Site, setSite] = useState("");
    const [URL, setURL] = useState("");
    const [ID, setID] = useState("");
    const [Password, setPassword] = useState("");
    const [Memo, setMemo] = useState("");

    const [
        INPUTPASSWORDQUERY,
        { loading: mutationLoading, error: mutationError }
    ] = useMutation(INPUT_PASSWORD, {
        onCompleted(data) {
            setFlag(false);
            cacheQuery();
        }
        // update(cache, { data: inputPassword }) {
        //     const { getPasswordList } = cache.readQuery({
        //         query: GET_PASSWORD_LIST
        //     });
        //     console.log(getPasswordList.concat([inputPassword]));
        //     // cache.writeQuery({
        //     //     query: GET_PASSWORD_LIST,
        //     //     data: {
        //     //         getPasswordList: getPasswordList.concat([inputPassword])
        //     //     }
        //     // });
        // }
    });

    if (mutationLoading) return <Loading></Loading>;

    const handleChange = e => {
        switch (e.target.name) {
            case "Site":
                setSite(e.target.value);
                break;
            case "URL":
                setURL(e.target.value);
                break;
            case "ID":
                setID(e.target.value);
                break;
            case "Password":
                setPassword(e.target.value);
                break;
            case "Memo":
                setMemo(e.target.value);
                break;
        }
    };

    const handleCancelModal = () => {
        setFlag(false);
    };

    const handleAddModal = async () => {
        INPUTPASSWORDQUERY({
            variables: {
                site: Site,
                url: URL,
                id: ID,
                password: Password,
                description: Memo
            }
        });
    };

    return (
        <div className={cx("bg")} style={{ display: flag ? "flex" : "none" }}>
            <div className={cx("modal-wrap")}>
                <div className={cx("title")}>
                    <h2>카드 추가</h2>
                </div>
                <div className={cx("item")}>
                    <div className={cx("input")}>
                        <input
                            type="text"
                            name="Site"
                            value={Site}
                            onChange={handleChange}
                            required
                        ></input>
                        <span className={cx("highlight")}></span>
                        <label>사이트</label>
                    </div>
                </div>
                <div className={cx("item")}>
                    <div className={cx("input")}>
                        <input
                            type="text"
                            name="URL"
                            value={URL}
                            onChange={handleChange}
                            required
                        ></input>
                        <span className={cx("highlight")}></span>
                        <label>URL</label>
                    </div>
                </div>
                <div className={cx("item")}>
                    <div className={cx("input")}>
                        <input
                            type="text"
                            name="ID"
                            value={ID}
                            onChange={handleChange}
                            required
                        ></input>
                        <span className={cx("highlight")}></span>
                        <label>아이디</label>
                    </div>
                </div>
                <div className={cx("item")}>
                    <div className={cx("input")}>
                        <input
                            type="text"
                            name="Password"
                            value={Password}
                            onChange={handleChange}
                            required
                        ></input>
                        <span className={cx("highlight")}></span>
                        <label>패스워드</label>
                    </div>
                </div>
                <div className={cx("item")}>
                    <div className={cx("input")}>
                        <input
                            type="text"
                            name="Memo"
                            value={Memo}
                            onChange={handleChange}
                            required
                        ></input>
                        <span className={cx("highlight")}></span>
                        <label>메모</label>
                    </div>
                </div>
                <div className={cx("button-box")}>
                    <button
                        className={cx("cancel")}
                        onClick={handleCancelModal}
                    >
                        취소
                    </button>
                    <button className={cx("save")} onClick={handleAddModal}>
                        완료
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Index;
