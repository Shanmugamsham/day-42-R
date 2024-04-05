import './App.css'
import React from 'react';
import { useState,useEffect } from 'react'
import axios from 'axios';
const Url = () => {
    const [url,seturl]=useState("")
    const [response,setresponse]=useState([])
    const add=async()=>{
        try {
         await axios.post("https://day-42-0q4q.onrender.com/shorturl",{url:url}).then((d)=>{
            setresponse(...response,d.data.shorturl)
         })
        } catch (error) {
         setresponse("try again")
        }
       
     }
   console.log(response);
   
    return (
        <div>
   <div className='container d-flex flex-row justify-content-center'>
      <div className='row'>
           <div className="col-12"></div>          
                  <label htmlFor="exampleInputEmail1" className="form-label mt-5">Enter URL :</label>
                           <input type="text" className="form-control mt-2 mb-2" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e)=>{seturl(e.target.value)}}/>
                            <button type="submit" className="btn btn-primary mt-3"onClick={add} >Send</button>
                            {response.map((d,inx)=>(
                            <div key={inx} className='boxs'>
                                
                                <p className='list'><span className='fullink'>Full Link :</span>{d.full}  <span className='shortlink'>Short Link :</span> <a  href={d.full} target='_blank'>{d.short}</a></p>
                            
                            </div>))} 
             </div>
             </div>
             </div>
        
 
    
    );
};

export default Url;