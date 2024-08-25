import { createSelector } from "reselect";
import { MainState } from "../Store";


export const showStateSelector=(state:MainState)=>(
    state.shows)


export const showsQuerySelector=createSelector(
    showStateSelector,(showState)=>showState.query

)
export const showsMapSelector=createSelector(
    
    showStateSelector,(showState)=>{
        console.log("select data finalll",showState.show)
        return showState.show}

)

export const showsMapQuerytoIdSelector=createSelector(
    showStateSelector,(showState)=>showState.query_shows

)

export const showsLoadingSelector=createSelector(
    showStateSelector,(showState)=>showState.loading

)
export const showMapCast=createSelector(showStateSelector,(showState)=>showState.castShow)
export const castDropdown=createSelector(showStateSelector,(showState)=>showState.showDropdown)



export const showsSelector=createSelector(showsMapSelector,showsQuerySelector,showsMapQuerytoIdSelector,(showMap,showQuery,showsMapQuerytoId)=>{
   return showsMapQuerytoId[showQuery]? showsMapQuerytoId[showQuery].map((item)=>showMap[+item]):[]
})
