import React, { useState } from "react";

function ReplyInput({ commentId, addReplyToComment, visible }) {
    const [value, setValue] = useState("");

    const onChange = e => setValue(e.target.value);
    const onKeyUp = (e, commentId, addReplyToComment) => {
        if (e.key === "Enter") {
            addReplyToComment(commentId, e.target.value);
            setValue("");
        }
    };

    return (
        <div className={"pl-8 pt-2 pr-4 mb-4 w-full " + (visible ? "" : "hidden")}>
            <input 
                className="border border-gray-400 bg-gray-200 p-2 rounded-full w-full" 
                onChange={onChange}
                onKeyUp={e => onKeyUp(e, commentId, addReplyToComment)}
                placeholder="답글을 입력하세요..."
                value={value}
            />
        </div>
    );
};

export default ReplyInput;
