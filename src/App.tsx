
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import ConsumptionPage from "./pages/consumptionpage";
import './App.css';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Routes>

  <Route path="/" element={<ConsumptionPage/>} />


  </Routes>
  
  </BrowserRouter>
    </div>
  );
}

export default App;
