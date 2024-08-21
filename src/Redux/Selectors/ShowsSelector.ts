import { createSelector } from "reselect";
import { MainState } from "../Store";


export const showStateSelector=(state:MainState)=>(
    state.shows)


export const showsQuerySelector=createSelector(
    showStateSelector,(showState)=>showState.query

)
export const showsMapSelector=createSelector(
    showStateSelector,(showState)=>showState.show

)
export const showsSelector=createSelector(showsMapSelector,(show)=>{
   return Object.keys(show).map((id:string)=>show[+id] )
})
