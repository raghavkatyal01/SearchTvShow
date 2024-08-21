import { call, put } from "redux-saga/effects";
import { getShowList } from "../../Api";

import { Action } from "../Action";
import { showLoadedAction } from "../Action/showLoadedAction";

export function* fetchShows(action:Action):Generator<any,any,any>{
    const shows=yield call(getShowList,action.payload)
    yield put(showLoadedAction(shows))
}