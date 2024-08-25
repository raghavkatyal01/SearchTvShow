  import {  produce } from "immer";

  import { AnyAction} from "redux";
import { Show } from "../../Models/Show";
import { LOAD_SHOW_ACTION, SHOW_DETAIL_LOADED,  Show_QUERY_CHANGE, SHOWS_LOADED, TOGGLE_DROPDOWN } from "../Action/showLoadedAction";
import { normalize, schema } from "normalizr";
import { Cast } from "../../Models/Cast";
  export type State={
    show:{[id:number]:Show},
    query:string,
    query_shows:{[q:string]:number[]},
    loading:boolean,
    castShow: { [key: number]: Cast[] };
    showDropdown: boolean;
  }
  const initialValue:State={
    show:{},
    query:"",
    query_shows:{},
    loading:false,
    castShow:{},
    showDropdown:false,
  }
  
  
  function showReducer(State=initialValue,action:AnyAction):State{
      switch(action.type){
        case SHOWS_LOADED:

         return produce(State,(draft)=>{
            const shows=action.payload.show as Show[]
            
            const cast=action.payload.cast as {}
            draft.castShow=cast
            console.log("cst",cast)
            const showEntity=new schema.Entity("show")
            const normalizedData=normalize(shows,[showEntity])
            draft.query_shows[draft.query]=normalizedData.result
            draft.show={...draft.show,...normalizedData.entities.show}
            draft.loading=false
            // draft.show= normalizedData.entities.show||{}
          })
          case Show_QUERY_CHANGE:
            return produce(State,(draft)=>{
              const query=action.payload as string
              draft.query=query
             
            })
          case LOAD_SHOW_ACTION:
            return produce(State,(draft)=>{
                      draft.loading=true
             }) 
          case SHOW_DETAIL_LOADED:
              return produce(State,(draft)=>{
                const data=action.payload as Show
              
                draft.show[data.id] = data
                draft.loading=false
                
              })
              case TOGGLE_DROPDOWN:
                return {
                  ...State,
                  showDropdown: !State.showDropdown,
                };
          default:
              return State;
      }
  }
  
  export default showReducer
  
  
  