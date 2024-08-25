import { ActionCreat } from "."
import { Cast } from "../../Models/Cast"

export const LOAD_CAST_SHOWDETAIL="LOAD_CAST_SHOWDETAIL"
export const loadCastShowDetailAction:ActionCreat<number>=(id:number)=>({
    type:LOAD_CAST_SHOWDETAIL,
    payload:id,

})


export const CAST_LOADED_SHOWDETAIL="CAST_LOADED_SHOWDETAIL"
export const loadedCastShowDetailAction:ActionCreat<Cast>=(cast:Cast)=>({
    type:CAST_LOADED_SHOWDETAIL,
    payload:cast,

})
