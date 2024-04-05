import React from 'react';
import {Link} from "react-router-dom"
import './App.css'
const Page = () => {
    return (
        <div>
        
            <ul className='btnz'>
            <li className='btnz1'><Link to={"/"}>Home</Link></li>
            <li className='btnz1'><Link to={"/signin"}>Signin</Link></li>
            <li className='btnz1'><Link to={"/login"}>Login</Link></li>
            <li className='btnz1'><Link to={"/url"}>Url Shorting</Link></li>
            </ul>
        
      </div>
           
    );
};

export default Page;