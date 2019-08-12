import React, { Component, Fragment, useEffect } from "react";

// quill
import ReactQuill, { Quill, Mixin, Toolbar } from "react-quill";
import "react-quill/dist/quill.snow.css";

// fonts

// Quill 참고
//https://www.npmjs.com/package/react-quill#theme

const Content = ({ userText, userHtml, onChange }) => {
    let placeholder = "내용을 입력해주세요";
    let reactQuillRef = null;
    let quillRef = null;

    useEffect(() => {
        attachQuillRefs();
    });

    useEffect(() => {
        if (userText.text === "") {
            quillRef.setText("");
        }
    }, [quillRef, userText]);

    const attachQuillRefs = () => {
        // Ensure React-Quill reference is available:
        if (typeof reactQuillRef.getEditor !== "function") return;
        // Skip if Quill reference is defined:
        if (quillRef != null) return;

        const tempQuillRef = reactQuillRef.getEditor();
        if (tempQuillRef != null) quillRef = tempQuillRef;
    };

    const handleChange = e => {
        const content = quillRef.getContents();
        const text = quillRef.getText();
        const html = e;

        // console.log("content", content);
        // console.log("text", text);
        // console.log("html", html);

        onChange("html", html);
        onChange("text", text);
    };

    return (
        <Fragment>
            <ReactQuill
                ref={el => {
                    reactQuillRef = el;
                }}
                theme={"snow"}
                onChange={handleChange}
                modules={Editor.modules}
                formats={Editor.formats}
                defaultValue={userText}
                placeholder={placeholder}
            />
        </Fragment>
    );
};

export default Content;

// export default class toolbar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { editorHtml: "", mountedEditor: false };
//         this.quillRef = null;
//         this.reactQuillRef = null;
//         this.handleChange = this.handleChange.bind(this);
//         this.handleClick = this.handleClick.bind(this);
//         this.attachQuillRefs = this.attachQuillRefs.bind(this);
//     }

//     componentDidMount() {
//         this.attachQuillRefs();
//     }

//     componentDidUpdate() {
//         this.attachQuillRefs();
//     }

//     attachQuillRefs() {
//         // Ensure React-Quill reference is available:
//         if (typeof this.reactQuillRef.getEditor !== "function") return;
//         // Skip if Quill reference is defined:
//         if (this.quillRef != null) return;

//         const quillRef = this.reactQuillRef.getEditor();
//         if (quillRef != null) this.quillRef = quillRef;
//     }

//     handleClick() {
//         var range = this.quillRef.getSelection();
//         let position = range ? range.index : 0;
//         this.quillRef.insertText(position, "Hello, World! ");
//         console.log(this.quillRef.getContents());
//     }

//     handleChange(html) {
//         console.log(html);
//         this.setState({ editorHtml: html });
//     }

//     render() {
//         return (
//             <div>
//                 <ReactQuill
//                     ref={el => {
//                         this.reactQuillRef = el;
//                     }}
//                     theme={"snow"}
//                     onChange={this.handleChange}
//                     modules={Editor.modules}
//                     formats={Editor.formats}
//                     defaultValue={this.state.editorHtml}
//                     placeholder={this.props.placeholder}
//                 />
//                 <button onClick={this.handleClick}>Insert Text</button>
//             </div>
//         );
//     }
// }

let Editor = {
    modules: {
        toolbar: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block", "image", "video"], // blocks
            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }], // lists
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }], // text direction
            [{ size: ["small", false, "large", "huge"] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }], // header dropdown
            [{ color: [] }, { background: [] }], // dropdown with defaults
            [{ font: [] }], // font family
            [{ align: [] }], // text align
            ["clean"] // remove formatting
        ]
    },

    formats: [
        "header",
        "font",
        "background",
        "color",
        "code",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "script",
        "align",
        "direction",
        "link",
        "image",
        "code-block",
        "formula",
        "video"
    ]
};

// modules = {
//     toolbar: [
//         [{ font: [] }],
//         [{ header: [1, 2, false] }],

//         ["bold", "italic", "underline", "strike", "code-block"],
//         [{ color: [] }], // dropdown with defaults from theme
//         [
//             { list: "ordered" },
//             { list: "bullet" },
//             { indent: "-1" },
//             { indent: "+1" }
//         ],
//         [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
//         ["link", "image", "video"],
//         [{ align: [] }],
//         [{ size: ["small", false, "large", "huge"] }]
//     ]
// };
