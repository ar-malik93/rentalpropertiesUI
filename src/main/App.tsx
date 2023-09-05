import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import HouseList from '../house/HouseList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HouseDetail from '../house/HouseDetail';
import AddHouse from '../house/AddHouse';
import EditHouse from '../house/EditHouse';

function App() {
  return (
    <BrowserRouter>    
    <div className='container'>
      <Header subTitle="Providing rental apartments in Vasteras" />      
      <Routes>
        <Route path="/" element={ <HouseList />}> </Route>
        <Route path="/house/:id" element={<HouseDetail />}> </Route>
        <Route path="/house/add" element={<AddHouse />} > </Route>
        <Route path="/house/update/:id" element={<EditHouse />} > </Route>
      </Routes>      
    </div>
    </BrowserRouter>
  );
}

export default App;
