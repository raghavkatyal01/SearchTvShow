import { produce, Producer } from "immer";
import { AnyAction, createStore } from "redux";
import { Cast } from "../../Models/Cast";

import { normalize, schema } from "normalizr";
import { CAST_LOADED_SHOWDETAIL, LOAD_CAST_SHOWDETAIL } from "../Action/CastAction";
export type State={
    cast:{[id:number]:Cast}
    loading:boolean
}
const initialValue:State={
    cast:{},
    loading:false,
}


function CastReducer(State=initialValue,action:AnyAction):State{
    switch(action.type){
        case CAST_LOADED_SHOWDETAIL: 
            return produce(State,(draft)=>{
                const data=action.payload as Cast[]
                // data.map((item)=>{
                //     draft.cast[item.id]=item
                // })
                const castEntity=new schema.Entity("castEntity")
                const normalizedData=normalize(data,[castEntity])
                draft.cast=normalizedData.entities.castEntity||{}
                draft.loading=false
            }) 
            case LOAD_CAST_SHOWDETAIL:
                        return produce(State,(draft)=>{
                            draft.loading=true
                        }) 
        default:
            return State;
    }
}

export default CastReducer


