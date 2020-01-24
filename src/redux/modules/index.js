import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import commentsReducer from "./comments";

const rootPersistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    comments: commentsReducer,
});

export default persistReducer(rootPersistConfig, rootReducer);
