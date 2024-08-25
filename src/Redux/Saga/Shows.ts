import { call, put } from "redux-saga/effects";
import { getShowList, getSingleShow } from "../../Api";

import { Action } from "../Action";
import { showDetailLoadedAction, showLoadedAction } from "../Action/showLoadedAction";

export function* fetchShows(action:Action):Generator<any,any,any>{
    const shows=yield call(getShowList,action.payload)
    
    yield put(showLoadedAction(shows.show,shows.cast))
}
export function* fetchShowsDetail(action:Action):Generator<any,any,any>{
    const show=yield call(getSingleShow,action.payload)
    yield put(showDetailLoadedAction(show))
}