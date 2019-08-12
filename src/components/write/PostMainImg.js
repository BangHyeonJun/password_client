import React from "react";

const PostMainImg = ({ userMainImg, onChange }) => {
    const handleChange = e => {
        e.preventDefault();
        const value = e.target.files[0];
        console.log(value);
        onChange(value);
    };

    return (
        <div>
            <input type="file" onChange={handleChange} />
        </div>
    );
};

export default PostMainImg;
