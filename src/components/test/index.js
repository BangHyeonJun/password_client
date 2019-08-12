import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "react-apollo-hooks";

const SINGLEUPLOAD = gql`
    mutation($file: Upload!) {
        singleUpload(file: $file) {
            filename
        }
    }
`;

const AddTest = () => {
    const singleUploadMutation = useMutation(SINGLEUPLOAD);

    const onChange = async e => {
        const file = e.target.files[0];

        await singleUploadMutation({
            variables: {
                file: file
            }
        });
    };

    return (
        <div
            style={{
                height: "-webkit-fill-available",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <div>
                <label>Single Upload</label>
                <br />
                <input type="file" onChange={onChange} />
            </div>
        </div>
    );
};

export default AddTest;
