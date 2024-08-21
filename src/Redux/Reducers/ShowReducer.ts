  import { Producer, produce } from "immer";
import { number } from "prop-types";
  import { AnyAction, createStore } from "redux";
import { Show } from "../../Models/Show";
import { Show_QUERY_CHANGE, SHOWS_LOADED } from "../Action/showLoadedAction";
import { normalize, schema } from "normalizr";
  export type State={
    show:{[id:number]:Show},
    query:string

  }
  const initialValue:State={
    show:{},
    query:"",

  }
  
  
  function showReducer(State=initialValue,action:AnyAction):State{
      switch(action.type){
        case SHOWS_LOADED:
         return produce(State,(draft)=>{
            const shows=action.payload.show as Show[]
           
            const showEntity=new schema.Entity("show")
            const normalizedData=normalize(shows,[showEntity])
            // draft.show={...draft.show,...normalizedData.entities.show}
            draft.show= normalizedData.entities.show||{}
            
        

          })
          case Show_QUERY_CHANGE:
            return produce(State,(draft)=>{
              const query=action.payload as string
              draft.query=query
            })
          default:
              return State;
      }
  }
  
  export default showReducer
  
  
  