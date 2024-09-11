

import createSagaMiddleware from "redux-saga";

import { debounce, takeEvery} from "redux-saga/effects";

import { fetchShows, fetchShowsDetail } from "./Saga/Shows";
import { fetchCastDetail } from "./Saga/Cast";
import { configureStore } from "@reduxjs/toolkit";
import showReducer, { loadShowAction, showQueryAction } from "./Slices/Show";
import castReducer, { loadCastShowDetailAction } from "./Slices/Cast";




function* rootSaga(){
    yield debounce(200,showQueryAction,fetchShows)
    yield takeEvery(loadShowAction,fetchShowsDetail)
    yield takeEvery(loadCastShowDetailAction,fetchCastDetail)
}
//( window as any).__REDUX_DEVTOOLS_EXTENSION__  && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
const sagaMiddleware = createSagaMiddleware()
const Store=configureStore({
    reducer:{
        shows:showReducer,
    Cast:castReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export type MainState=ReturnType<typeof Store.getState>
export default Store


