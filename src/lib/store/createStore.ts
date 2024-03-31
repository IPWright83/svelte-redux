import { applyMiddleware, createStore as create } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import ReduxThunk from "redux-thunk";
import { svelteStoreEnhancer } from "./svelteStoreEnhancer.js";

const numSelectors = {
    count: (state) => state.count,
};

const numActions = {
    add: () => ({ type: "ADD" }),
    subtract: () => ({ type: "SUBTRACT" }),
}

const numReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "ADD": return {
            ...state,
            count: state.count + 1,
        }

        case "SUBTRACT": return {
            ...state,
            count: state.count - 1
        }

        default: return state;
    }
};

let store;

const createStore = () => {
    const composeEnhancers = composeWithDevTools({});
    store = create(numReducer, composeEnhancers(applyMiddleware(ReduxThunk), svelteStoreEnhancer));

    return store;
}

export { createStore, numActions, numSelectors, store };

