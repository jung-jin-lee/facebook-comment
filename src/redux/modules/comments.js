import uuidv4 from "uuid/v4";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// Action Types
export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_REPLY_TO_COMMENT = "ADD_REPLY_TO_COMMENT";
export const CANCEL_LIKE_TO_COMMENT = "CANCEL_LIKE_TO_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const LIKE_TO_COMMENT = "LIKE_TO_COMMENT";

// Actions
export const addComment = content => ({
    type: ADD_COMMENT,
    payload: {
        id: uuidv4(),
        content,
    },
});

export const likeToComment = (id, userId) => ({
    type: LIKE_TO_COMMENT,
    payload: {
        id,
        userId,
    },
});

export const cancelLikeToComment = (id, userId) => ({
    type: CANCEL_LIKE_TO_COMMENT,
    payload: {
        id,
        userId,
    }
})

export const deleteComment = id => ({
    type: DELETE_COMMENT,
    payload: {
        id,
    }
});

export const addReplyToComment = (commentId, content) => ({
    type: ADD_REPLY_TO_COMMENT,
    payload: {
        commentId,
        replyId: uuidv4(),
        content,
    },
});

// Reducer
const INITIAL_STATE = {};

const commentsReducer = (state = INITIAL_STATE, action) => {
    const { id, userId, commentId, replyId, content } = action.payload || {};
    switch (action.type) {
        case ADD_COMMENT:
            return {
                ...state,
                [id]: { 
                    content: content, 
                    likes: [], 
                    replies: [],
                },
            };
        case ADD_REPLY_TO_COMMENT:
            return {
                ...state,
                [commentId]: { 
                    ...state[commentId], 
                    replies: [
                        ...state[commentId].replies, 
                        { 
                            id: replyId, 
                            content: content, 
                            likes: [],
                        },
                    ], 
                },
            };
        case CANCEL_LIKE_TO_COMMENT:
            const newLikes = [...state[id].likes].filter(id => id !== userId);
            return {
                ...state,
                [id]: { 
                    ...state[id],
                    likes: [...newLikes],
                },
            };
        case DELETE_COMMENT:
            let newComments = {};
            for (let k in state) {
                if (k !== action.payload.id) {
                    newComments[k] = state[k];
                }
            }
            return {
                ...newComments,
            };
        case LIKE_TO_COMMENT:
            return {
                ...state,
                [id]: { 
                    ...state[id],
                    likes: [
                        ...state[id].likes, 
                        userId
                    ],
                },
            };
        default:
            return state;
    }
};

const persistConfig = {
    key: "comments",
    storage,
};

export default persistReducer(persistConfig, commentsReducer);
