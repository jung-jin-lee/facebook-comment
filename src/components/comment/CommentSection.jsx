import React from "react";

function CommentSection({ content, doesILike, likeCount }) {
    return (
        <div className="bg-gray-200 rounded-full break-words relative inline-block max-w-full w-3/4 px-6 py-2">
            <div>
                <div className="inline-block text-sm text-blue-800 font-semibold">홍길동</div>
                <span className="ml-1 text-sm">{content}</span>
            </div>
            <div
                className={"bg-white border border-gray-400 shadow-md rounded-full px-1 absolute z-10 " + (doesILike ? "" : "hidden")}
                style={{right: "2px", bottom: "-8px"}}
            >
                <span className="bg-blue-500 px-1 rounded-full">
                    <i className="material-icons text-xs text-white">
                        thumb_up
                    </i>
                </span>
                <span className="ml-1 text-sm">{likeCount}</span>
            </div>
        </div>
    );
}

export default CommentSection;
