import { ActionCreat } from "."
import { Cast } from "../../Models/Cast"
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

export const SHOW_DETAIL_LOADED="SHOW_DETAIL_LOADED"
export const showDetailLoadedAction:ActionCreat<Show>=(show:Show)=>({
    type:SHOW_DETAIL_LOADED,
    payload:show,

})

export const LOAD_SHOW_ACTION="LOAD_SHOW_ACTION"
export const loadShowAction:ActionCreat<number>=(id:number)=>({
    type:LOAD_SHOW_ACTION,
    payload:id,

})






