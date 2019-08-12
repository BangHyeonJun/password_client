import React from "react";

const List = ({ data }) => {
    const _id = data._id;
    const email = data.email;
    const nickname = data.nickname;
    const join_date = data.join_date;
    const role = data.role;

    return (
        <tr>
            <td>{email}</td>
            <td>{nickname}</td>
            <td>{join_date}</td>
            <td>{role}</td>
        </tr>
    );
};

export default List;
