import './App.css'
import { useState,useEffect } from 'react'
import axios from 'axios';
import React from 'react';
import {BrowserRouter,Form,Route,Routes} from "react-router-dom"
import Page from './Page';
import Login from './Login';
import Signin from './Signin';
import Home from './Home';
import Url from './Url';
const App = () => {
  

  return (
    <div>
     <BrowserRouter>
     <Page/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signin" element={<Signin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/url" element={<Url/>}/>
      </Routes>

       </BrowserRouter>
         
    </div>
  );
};

export default App;