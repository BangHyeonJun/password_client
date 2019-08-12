import React from "react";

const PostHashtag = ({ userHashtag, onChange }) => {
    const handleChange = e => {
        e.preventDefault();
        const value = e.target.value;
        onChange(value);
    };

    return (
        <div>
            <input type="input" value={userHashtag} onChange={handleChange} />
        </div>
    );
};

export default PostHashtag;
