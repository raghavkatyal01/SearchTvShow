import { applyMiddleware, combineReducers, createStore } from "redux";
import showReducer from "./Reducers/ShowReducer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import { takeEvery, takeLatest } from "redux-saga/effects";
import { Show_QUERY_CHANGE } from "./Action/showLoadedAction";
import { fetchShows } from "./Saga/Shows";

const reducer=combineReducers(
    {shows:showReducer,

        
    }

)

function* rootSaga(){
    yield takeLatest(Show_QUERY_CHANGE,fetchShows)
}
//( window as any).__REDUX_DEVTOOLS_EXTENSION__  && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
const sagaMiddleware = createSagaMiddleware()
const Store=createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

export type MainState=ReturnType<typeof reducer>
export default Store
