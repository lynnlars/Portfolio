import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import {Context, ContextProvider} from "./ContextProvider"
import Home from './Home'
import About from './About'
import Navbar from './Navbar'
import Starter from './Starter'
import MyPoke from './MyPoke'
import PokeList from './PokeList'


export default function App(){
//router info to transition between pages 
//each route gets a path and element (route renders components)
//link is what takes you to the path (can take you to empty route)
//useNavigate can be in place of link. used in a function call. save it a variable and call in function 
//useparams grabs data can grab ids to take you outside 

return(
  <div>
    <ContextProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/mypoke/:cardId' element={<MyPoke/>}/>
      <Route path='/pokelist' element={<PokeList/>}/>
      <Route path='/starter' element={<Starter/>}/>
    </Routes>
    </ContextProvider>
  </div>
)
}

//routes can have many route(s) 