import { call, put } from "redux-saga/effects";
import { Action } from "../Action";
import { CastForShowDetail } from "../../Api";
import { loadedCastShowDetailAction } from "../Action/CastAction";


export  function* fetchCastDetail(action:Action):Generator<any,any,any>{
   const cast= yield call(CastForShowDetail,action.payload)
    yield put(loadedCastShowDetailAction(cast))

}