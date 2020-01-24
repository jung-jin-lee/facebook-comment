import React from "react";

function CommentDeleteButton({ deleteComment, id, visible }) {
    const onClickDeleteButton = id => {
        if (window.confirm("이 댓글을 삭제하시겠어요?")) {
            deleteComment(id);
        }
    };
    
    return (
        <div className={"ml-2 cursor-pointer inline-block leading-none " + (visible ? "" : "hidden")}>
            <div className="inline-block border border-gray-400 p-1 rounded-full shadow-md">
                <ul>
                    <li onClick={() => onClickDeleteButton(id)}>
                        <i className="material-icons text-base text-gray-600">
                            delete
                        </i>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default CommentDeleteButton;
