import { createEntityAdapter, createSlice,PayloadAction } from '@reduxjs/toolkit'
import { Show } from '../../Models/Show';
import { Cast } from '../../Models/Cast';
import { normalize, schema } from 'normalizr';
const showsAdapter = createEntityAdapter<Show>()
// type State={
//     show:{[id:number]:Show},
//     query:string,
//     query_shows:{[q:string]:number[]},
//     loading:boolean,
//     castShow: { [key: number]: Cast[] };
//     showDropdown: boolean;
//   }
  const initialState=showsAdapter.getInitialState({
   
    query:"",
    query_shows:{},
    loading:false,
    castShow:{},
    showDropdown:false,
  })
  export type State=typeof initialState
  const showSlice=createSlice(
    {
        name:"shows",
        initialState,
        reducers:{
            showsLoaded,
            showDetailLoaded,
            loadShow,
            showQuery
        }
    }
  )
function showsLoaded(State:State, action: PayloadAction<{show:Show[],cast:{[id:number]:Cast[]}}>){
    const shows=action.payload.show as Show[]
            
    const cast=action.payload.cast as {}
    State.castShow=cast
   
    
    State.query_shows[State.query]=shows.map((s)=>s.id)
  showsAdapter.addMany(State,action.payload.show)
    State.loading=false
}
function showDetailLoaded(State:State, action: PayloadAction<Show>){
   
    showsAdapter.addOne(State,action.payload)
    
    State.loading=false
}
function loadShow(State:State,action: PayloadAction<number>){
    State.loading=true
}
function showQuery(State:State, action: PayloadAction<string>){
    const query=action.payload as string
        State.query=query
        State.loading=true;
}


const {actions,reducer:showReducer}=showSlice

export const {showsLoaded:showLoadedAction,showDetailLoaded:showDetailLoadedAction,loadShow:loadShowAction,showQuery:showQueryAction}=actions
export default showReducer