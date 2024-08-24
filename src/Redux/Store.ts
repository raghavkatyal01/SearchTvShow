import { applyMiddleware, combineReducers, createStore } from "redux";
import showReducer from "./Reducers/ShowReducer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "@redux-devtools/extension";
import { debounce, takeEvery} from "redux-saga/effects";
import {  LOAD_SHOW_ACTION, Show_QUERY_CHANGE } from "./Action/showLoadedAction";
import { fetchShows, fetchShowsDetail } from "./Saga/Shows";
import { fetchCastDetail } from "./Saga/Cast";
import CastReducer from "./Reducers/CastReducer";
import { LOAD_CAST_SHOWDETAIL } from "./Action/CastAction";

const reducer=combineReducers(
    {shows:showReducer,
    Cast:CastReducer
        
    }

)

function* rootSaga(){
    yield debounce(200,Show_QUERY_CHANGE,fetchShows)
    yield takeEvery(LOAD_SHOW_ACTION,fetchShowsDetail)
    yield takeEvery(LOAD_CAST_SHOWDETAIL,fetchCastDetail)
}
//( window as any).__REDUX_DEVTOOLS_EXTENSION__  && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
const sagaMiddleware = createSagaMiddleware()
const Store=createStore(reducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

export type MainState=ReturnType<typeof reducer>
export default Store
