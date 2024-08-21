import { ActionCreat } from "."
import { Show } from "../../Models/Show"

export const SHOWS_LOADED="SHOWS_LOADED"
export const showLoadedAction:ActionCreat<{show:Show[],query:string}>=(show:Show[],query:string)=>({
    type:SHOWS_LOADED,
    payload:{show,query}

})

export const Show_QUERY_CHANGE="Show_QUERY_CHANGE"
export const showQueryAction:ActionCreat<string>=(query)=>({
    type:Show_QUERY_CHANGE,
    payload:query,

})

