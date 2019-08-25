import React from "react";

function UserData({ type, name, value, onChange }) {
    return (
        <div>
            <input
                type={type}
                name={name}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
}

export default UserData;
