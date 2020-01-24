import React, { useEffect, useState } from "react";
import CommentSection from "./CommentSection.jsx";
import CommentDeleteButton from "./CommentDeleteButton.jsx";
import CommentActionList from "./CommentActionList.jsx";
import Reply from "./Reply.jsx";
import ReplyInputContainer from "../../containers/comment/ReplyInputContainer.js";

function Comment({
    cancelLikeToComment,
    content,
    deleteComment,
    id,
    likes, 
    likeCount = 0, 
    likeToComment, 
    replies = [],
}) {
    const [visibleCommentDeleteButton, setVisibleCommentDeleteButton] = useState(false);
    const [visibleReplyInput, setVisibleReplyInput] = useState(replies.length > 0 ? true : false);
    const [doesILike, setDoesILike] = useState(likes.includes("peter"));

    const onClickReplyButton = () => setVisibleReplyInput(true);
    const onMouseOverCommentSection = e => setVisibleCommentDeleteButton(true);
    const onMouseOutCommentSection = () => setVisibleCommentDeleteButton(false);

    useEffect(() => {
        setDoesILike(likes.includes("peter"));
    }, [likes])

    return (
        <li>
            <div onMouseOut={onMouseOutCommentSection} onMouseOver={onMouseOverCommentSection}>
                <CommentSection content={content} doesILike={doesILike} likeCount={likeCount} />
                <CommentDeleteButton deleteComment={deleteComment} id={id} visible={visibleCommentDeleteButton} />
            </div>
            <div className="ml-6">
                <CommentActionList
                    cancelLikeToComment={cancelLikeToComment}
                    doesILike={doesILike}
                    id={id}
                    likeToComment={likeToComment}
                    onClickReplyButton={onClickReplyButton} 
                />
            </div>
            <div>
                <ul className="mt-2 ml-8">
                    {replies && replies.map(({ id, content }) => (
                        <Reply content={content} id={id} key={id} />
                    ))}
                </ul>
                <ReplyInputContainer commentId={id} visible={visibleReplyInput} />
            </div>
        </li>
    );
}

export default Comment;
