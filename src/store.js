import { createStore } from "redux";
// import rootReducer from "./reducer/indexCombineReducers.jsx";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { combineReducers } from "redux";
import Reducers from "./reducer/Reducers";

const rootReducer = combineReducers({
    Reducers
});

const persistConfig = {
    key: "fieldSelectionsFormRoot",
    version: 1,
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const persistedStore = persistStore(store);

export  {store, persistedStore};