import { FC, useEffect } from 'react'
import { HiArrowSmLeft } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { withRouter, WithRouterProps } from '../Hoc/withRouter'
import { MainState } from '../Redux/Store'
import { connect, ConnectedProps } from 'react-redux'

import {  loadShowAction, showDetailLoadedAction } from '../Redux/Action/showLoadedAction'

import {  showsLoadingSelector, showsMapSelector } from '../Redux/Selectors/ShowsSelector'
import Loading from '../Components/Loading'

import ImageNotFound from '../Components/ImageNotFound'
import { allCastSelector, castLoadingSelector } from '../Redux/Selectors/CastSelector'
import ShowCard from '../Components/CardDetail'
import { loadCastShowDetailAction } from '../Redux/Action/CastAction'



type ownProps=WithRouterProps
type ShowDetailProps =reduxProps &  ownProps

const ShowDetail: FC<ShowDetailProps> = ({params,showDetail,loadShowAction,loadCastShowDetailAction,showCast,castloading,showloading}) => {
  const id=+params.showId

  useEffect(()=>{
   loadShowAction(id)
   loadCastShowDetailAction(id)
  },[id])

  console.log("l",castloading);
  
if(!showDetail){
  return (<Loading/>)
}

  return (
      showDetail&&<>
<div className=' mx-16 flex flex-col min-h-full m-2 gap-4'>
<Link to="/"><HiArrowSmLeft className='text-3xl'/></Link>
<div className='flex flex-row '>
<h1 className="text-4xl font-bold">{showDetail?.name }</h1>
{showloading && <Loading/>}
</div>
<div className='flex flex-row items-start space-x-4 bg-gray-300 p-2'>
  {
    showDetail.genres?.map((item)=>{
        return <p className='text-md font-bold'>{item}</p>
    })
  }
</div>
<div className=" flex flex-row  gap-8">
     
{showDetail.image?.medium ?<img
          className="w-92"
          src={ showDetail.image?.medium}
          alt=""
        />:<ImageNotFound/>
}
        <div className="flex flex-col items-start gap-4">
         
         
          <p className=" text-gray-700" dangerouslySetInnerHTML={{ __html: showDetail?.summary||"" }}></p>
          <p className="border-black rounded-md border-2 p-2 min-w-16 text-xl"><span className='font-bold text-md'>Rating:</span> {showDetail?.rating.average||<span>NA</span>}/10</p>
          <div className="flex gap-x-4">
            
          </div>
        </div>
      </div>
     
      <h1 className="text-4xl font-bold">Cast</h1>
      
     
     
      {castloading?<Loading/>:<div className='flex flex-row flex-wrap gap-2'>
        {
          showCast&& showCast.map((item)=>{
            return <ShowCard cardDetail={item}/>
          })
        }
      
      </div>
}
    </div>
   

</>
  )
}
const mapStateToProps=(state:MainState,ownProps:WithRouterProps)=>{
  const id=+ownProps.params.showId

  return {showDetail: showsMapSelector(state)[id]&&showsMapSelector(state)[id],
    showCast:allCastSelector(state),
    castloading:castLoadingSelector(state),
    showloading: showsLoadingSelector(state)

  }
}
const mapDispatchToProps={
  ShowDetailAction:showDetailLoadedAction,
  loadShowAction:loadShowAction,
  loadCastShowDetailAction:loadCastShowDetailAction,
}
const connector=connect(mapStateToProps,mapDispatchToProps)
type reduxProps=ConnectedProps<typeof connector>
export default withRouter(connector(ShowDetail))




