import React, { useState } from "react";

function CommentInput({ addComment })  {
    const [value, setValue] = useState("");

    const onChange = e => setValue(e.target.value);
    const onKeyUp = (e, addComment) => {
        if (e.key === "Enter") {
            addComment(e.target.value);
            setValue("");
        }
    };

    return (
        <div className="pl-1 pr-4 w-full">
            <input 
                className="border border-gray-400 bg-gray-200 p-2 rounded-full w-full" 
                onChange={onChange}
                onKeyUp={e => onKeyUp(e, addComment)}
                placeholder="댓글을 입력하세요..."
                value={value}
            />
        </div>
    );
};

export default CommentInput;
