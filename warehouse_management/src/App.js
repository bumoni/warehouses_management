import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WarehouseList from './Components/WarehouseList';
import WarehouseDetail from './Components/WarehouseDetail';
import "./App.css"
import Nav from './Components/Nav';
function App() {
  return (
    <div className='App'>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/"  element={<WarehouseList/>} />
        <Route path="/warehouse/:id" element={<WarehouseDetail/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;