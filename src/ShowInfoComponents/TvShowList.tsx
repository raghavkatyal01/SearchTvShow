import { ChangeEvent, FC, useEffect, useState } from 'react'
import Searchbar from '../Components/SearchBar'
import TvSowCard from '../Components/TvSowCard'
import { getShowList } from '../Api'
import { Show } from '../Models/Show'
import { showLoadedAction, showQueryAction } from '../Redux/Action/showLoadedAction'
import { connect } from 'react-redux'
import { MainState } from '../Redux/Store'
import { showsQuerySelector, showsSelector } from '../Redux/Selectors/ShowsSelector'

interface TvShowListProps {

  query:string,
  shows:Show[],
  queryLoaded:(q:string)=>void
}

const TvShowList: FC<TvShowListProps> = ({queryLoaded,shows,query}) => {
    // const [showList,setShowList]=useState<Show[]>([]);
    // const [query,setQuery]=useState<string>("");
    // useEffect(()=>{
    //     getShowList(query).then((res)=>{
    //         console.log(res)
    //         showLoaded(res)
    //     })
    // },[query])
    console.log(shows)
  return (
    <>
    <div className=' min-w-full min-h-full'>
    <Searchbar value={query} onChange={(e:ChangeEvent<HTMLInputElement>)=>queryLoaded(e.target.value)}/>
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
 return {query:showsQuerySelector(state), shows:showsSelector(state) }
}

export default connect(mapStateToProps,mapDispatchToProps) (TvShowList)


