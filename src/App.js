
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Main,
  Routes,
  Route,

} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'



const App = ()=> {
 
  const [progress , setProgress] = useState(0);

/* const setProgress = (progress)=> {
    setprogress(progress);
    
  }
*/




    return (
      <Main >
        <div>

          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}

          />
         
          <Routes>
            <Route exact path='/' element={<News setProgress= {setProgress} pageSize={6} country={'in'} category={'general'} />} />
            <Route exact path='/business' element={<News setProgress= {setProgress} pageSize={6} country={'in'} category={'business'} />} />
            <Route exact path='/entertainment' element={<News setProgress= {setProgress} pageSize={6} country={'in'} category={'entertainment'} />} />
            <Route exact path='/health' element={<News setProgress= {setProgress} pageSize={6} country={'in'} category={'health'} />} />
            <Route exact path='/science' element={<News setProgress= {setProgress} pageSize={6} country={'in'} category={'science'} />} />
            <Route exact path='/sports' element={<News setProgress= {setProgress} pageSize={6} country={'in'} category={'sports'} />} />
            <Route exact path='/technology' element={<News setProgress= {setProgress} pageSize={6} country={'in'} category={'technology'} />} />
          </Routes>
        </div>
      </Main>
    )
  
}

export default App