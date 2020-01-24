import React from "react";

function Reply({ id, content }) {
    return (
        <li className="mt-2" key={id}>
            <div className="bg-gray-200 rounded-full break-words relative inline-block max-w-full w-3/4 leading-snug px-6 py-2">
                <div className="inline-block text-sm text-blue-800 font-semibold">홍길동</div>
                <span className="ml-1 text-sm">{content}</span>
            </div> 
        </li>
    );
}

export default Reply;
