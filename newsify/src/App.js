
import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import Categories from './Pages/Categories';

const App = () => {
  return (
    <div>
        <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/general" element={<Categories cat="general" />}></Route>
          <Route path="/business" element={<Categories cat="business" />}></Route>
          <Route path="/entertainment" element={<Categories cat="entertainment" />}></Route>
          <Route path="/science" element={<Categories cat="science" />}></Route>
          <Route path="/sports" element={<Categories cat="sports" />}></Route>
          <Route path="/technology" element={<Categories cat="technology" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

