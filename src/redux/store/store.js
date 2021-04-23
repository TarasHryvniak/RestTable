import { applyMiddleware, createStore } from "redux";
import tableReducer from "../reducers/TableReducer";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../middleware/saga/rootSaga";

const sagaMiddleware = createSagaMiddleware()

const store = createStore(tableReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store