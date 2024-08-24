import { ChangeEvent, FC, useEffect, useState } from 'react'
import Searchbar from '../Components/SearchBar'
import TvSowCard from '../Components/TvSowCard'

import { showLoadedAction, showQueryAction } from '../Redux/Action/showLoadedAction'
import { connect, ConnectedProps, ConnectProps } from 'react-redux'
import { MainState } from '../Redux/Store'
import { showsLoadingSelector, showsQuerySelector, showsSelector } from '../Redux/Selectors/ShowsSelector'
import Loading from '../Components/Loading'

type TvShowListProps =Connected


const TvShowList: FC<TvShowListProps> = ({queryLoaded,shows,query,loading}) => {
    // const [showList,setShowList]=useState<Show[]>([]);
    // const [query,setQuery]=useState<string>("");
    // useEffect(()=>{
    //     getShowList(query).then((res)=>{
    //         console.log(res)
    //         showLoaded(res)
    //     })
    // },[query])
    
  return (
    <>
    <div className=' min-w-full min-h-full'>

    <div className='flex flex-row gap-2'><Searchbar value={query} onChange={(e:ChangeEvent<HTMLInputElement>)=>queryLoaded(e.target.value)}/>
      {loading&&<Loading className="text-md"/>}
    </div>
    <div className='bg-gray-300 flex flex-wrap mx-4 justify-center '>
    {shows.length!=0? <>{shows.map((item:any)=>{
           return <TvSowCard key={item.id} show={item}/>
        })
        }</>:<div className='text-xl h-full'>No Product Found</div>}

   
    </div>
    </div>
  </>)
}
const mapDispatchToProps={
  
  queryLoaded:showQueryAction
}
const mapStateToProps=(state:MainState)=> {
 return {query:showsQuerySelector(state), shows:showsSelector(state),
  loading:showsLoadingSelector(state)
  }
}
const connector=connect(mapStateToProps,mapDispatchToProps)
type Connected=ConnectedProps<typeof connector>
export default  connector(TvShowList)


