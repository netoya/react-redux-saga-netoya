import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../roots/rootReducer";
import rootSaga from "../roots/rootSaga";

// create history
export const history = createBrowserHistory();

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(
    routerMiddleware(history), //
    sagaMiddleware
);

export const store = createStore(rootReducer(history), middleware);

// then run the saga
sagaMiddleware.run(rootSaga);
