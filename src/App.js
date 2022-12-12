
import './App.css';
import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './FatChef/Home';
import Loginx from './FatChef/Loginx';
import Menu from './FatChef/Menu';
function App() {
  return (
  <div className="App">
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/Loginx' element={<Loginx/>}/>
  <Route path='/Menu' element={<Menu/>}/>
  </Routes>
  </BrowserRouter>
  </div>
  );
}
export default App;