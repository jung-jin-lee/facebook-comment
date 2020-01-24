import React from "react";

function CommentActionList({ cancelLikeToComment, doesILike = false, id, likeToComment, onClickReplyButton }) {
    const onClickLikeButton = (id, userId, likeOrCancelLikeAction) => {
        likeOrCancelLikeAction(id, userId);
    };
    
    return (
        <ul className="inline-block text-xs">
            <li
                className={"inline-block cursor-pointer text-blue-800 " + (doesILike ? "font-semibold" : "")} 
                onClick={() => onClickLikeButton(id, "peter", doesILike ? cancelLikeToComment : likeToComment)}
            >
                <span>좋아요</span>
            </li>
            <li className="inline-block text-blue-800">
                <span>·</span>
            </li>
            <li className="inline-block cursor-pointer text-blue-800" onClick={onClickReplyButton}>
                <span>답글 달기</span>
            </li>
        </ul>
    );
}

export default CommentActionList;
