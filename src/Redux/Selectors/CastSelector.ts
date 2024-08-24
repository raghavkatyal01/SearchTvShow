import { createSelector } from "reselect";
import { MainState } from "../Store";

const CastSelector=(state:MainState)=>{
    return state.Cast
}

 const castMapSelector=createSelector(CastSelector,(Cast)=>{
   return Cast.cast
})
export const castLoadingSelector=createSelector(CastSelector,(cast)=>{
    return cast.loading;
})
export const allCastSelector= createSelector(castMapSelector,(cast)=>{
    return Object.keys(cast).map((id)=>cast[+id])
})