
import { Route, Routes } from 'react-router-dom'
import TvShowList from './ShowInfoComponents/TvShowList'
import ShowDetail from './ShowInfoComponents/ShowDetail'

function App() {


  return (
    <>
      <Routes>
        <Route index element={<TvShowList/>}></Route>
        <Route path="/ShowDetail/:showId" element={<ShowDetail/>}></Route>
      </Routes>
    </>
  )
}

export default App
