import axios from "axios"
import { Cast } from "./Models/Cast"

// export const getShowList=(keyword:string)=>{
//     return axios.get("https://api.tvmaze.com/search/shows?q="+keyword).then((res)=>{
//        return res.data.map((item:any)=>{
//             return item.show
//        })
    
//     })
// }
export const getShowList=async (keyword:string)=>{
    const showResponse=await axios.get("https://api.tvmaze.com/search/shows?q="+keyword)
    const showList=showResponse.data.map((item:any)=>  item.show)
    const AllCast:{ [key: number]: Cast[] }={}
    for(let i:number=0;i<showList.length;i++){
       const cast= await axios.get("https://api.tvmaze.com/shows/"+showList[i].id+"/cast")
        const castDetail=cast.data.map((item:any)=>item.person)
        AllCast[showList[i].id]=castDetail
    }
   
    return {show:showList,cast:AllCast}
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

