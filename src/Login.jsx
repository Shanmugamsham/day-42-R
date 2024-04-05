import React from 'react';
import { useState,useEffect } from 'react'
import axios from 'axios';
const Login = () => {
    const [email,setemail]=useState("abdeshanmugam@gmail.com")
    const [password,setpassword]=useState("447564756sa")
    const [response,setresponse]=useState("")

    const add=async()=>{
       try {
        await axios.post("https://day-42-0q4q.onrender.com/login",{email:email,password:password}).then((d)=>{
      
        if(d.status==200){

         setresponse("LOGIN YOUR Email_ID")
        }})
       } catch (error) {
        setresponse("SIGNIN YOUR MAIL ID")
       }
      
    }

    console.log(response);
    return (

        <div className='container d-flex flex-row justify-content-center'>
      <div className='row'>
  <div className="col-12">
    
  <label htmlFor="exampleInputEmail1" className="form-label mt-5">Email address</label>
  <input type="email" className="form-control mt-2 mb-2" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e)=>{setemail(e.target.value)}}/>
  <div><span className='mt-5'>{response}</span></div>
  <label htmlFor="exampleInputPassword1" className="form-label mt-2">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setpassword(e.target.value)}}/>

  

  <button type="submit" className="btn btn-primary mt-3"onClick={add} >Submit</button>
</div>
        


      </div>
      
    

            
        </div>
    );
};

export default Login;