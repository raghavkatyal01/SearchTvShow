import axios from "axios"

export const getShowList=(keyword:string)=>{
    return axios.get("https://api.tvmaze.com/search/shows?q="+keyword).then((res)=>{
       return res.data.map((item:any)=>{
            return item.show
       })
    
    })
}

