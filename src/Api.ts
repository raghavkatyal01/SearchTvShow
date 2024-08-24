import axios from "axios"
import { Cast } from "./Models/Cast"

export const getShowList=(keyword:string)=>{
    return axios.get("https://api.tvmaze.com/search/shows?q="+keyword).then((res)=>{
       return res.data.map((item:any)=>{
            return item.show
       })
    
    })
}
export const getSingleShow=(id:number)=>{
    return axios.get("https://api.tvmaze.com/shows/"+id).then((res)=>{
        console.log("res",res.data);
        
       return res.data
    
    })
}
export const  CastForShowDetail= async (id:number)=>{
   const  response= await axios.get("https://api.tvmaze.com/shows/"+id+"/cast")
   console.log("resCast",response)
   return response.data.map((item:any)=>item.person)||[]
       
    
  
}

