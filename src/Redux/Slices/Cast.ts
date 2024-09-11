import { normalize, schema } from "normalizr"
import { Cast } from "../../Models/Cast"
import { createEntityAdapter, createSlice,PayloadAction } from '@reduxjs/toolkit'
const showsAdapter = createEntityAdapter<Cast>()

const initialState=showsAdapter.getInitialState({
    cast:{},
    loading:false,
})
 type State=typeof initialState
const castSlice=createSlice(
    {
        name:"cast",
        initialState,
        reducers:{
            loadCastShowDetail,
            loadedCastShowDetail,

        }
    }
)
function loadCastShowDetail(State:State,action:PayloadAction<number>){
    State.loading=true
}
function loadedCastShowDetail(State:State,action:PayloadAction<Cast[]>){
    State.loading=false
  showsAdapter.addMany(State,action.payload)
    
}
const { actions,reducer:castReducer }=castSlice
export const {loadCastShowDetail:loadCastShowDetailAction,loadedCastShowDetail:loadedCastShowDetailAction}=actions
export default castReducer;
