import React from "react";
import Comment from "./Comment.jsx";

const CommentList = ({ cancelLikeToComment, comments = {}, deleteComment, likeToComment }) => {
    let convertedComments = [];
    if (Object.entries(comments).length !== 0 || comments.constructor !== Object) {
        for (const key in comments) {
            if (key === "_persist") {
                continue;
            }
            convertedComments.push({
                ...comments[key],
                id: key,
                likeCount: comments[key].likes.length,
                replies: comments[key].replies && comments[key].replies.map(({ id, content }) => ({ 
                    id,
                    content,
                })),
            });
        }
    }
    
    return (
        <ul>
            {convertedComments && convertedComments.map(comment => (
                <Comment
                    cancelLikeToComment={cancelLikeToComment}
                    deleteComment={deleteComment}
                    key={comment.id}
                    likeToComment={likeToComment}
                    {...comment}
                />
            ))}
        </ul>
    );
};

export default CommentList;
