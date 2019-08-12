import React, { Component } from "react";

const Title = ({ userTitle, onChange }) => {
    const handleChange = e => {
        e.preventDefault();
        const value = e.target.value;
        onChange(value);
    };

    return (
        <div>
            <input
                type="input"
                name="title"
                value={userTitle}
                onChange={handleChange}
            />
        </div>
    );
};

export default Title;

// export default class Title extends Component {
//     constructor(props) {
//         super(props);
//     }

//     handleChange = e => {
//         e.preventDefault();
//         const changedTitle = e.target.value;
//         this.props.onChange(changedTitle);
//     };

//     render() {
//         const { handleChange } = this;
//         return (
//             <div>
//                 <input
//                     type="input"
//                     value={this.props.userTitle}
//                     onChange={handleChange.bind(this)}
//                 />
//             </div>
//         );
//     }
// }
