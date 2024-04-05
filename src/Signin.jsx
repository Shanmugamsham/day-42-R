import React from 'react';
import { useState,useEffect } from 'react'
import axios from 'axios';
const Signin = () => {
    const [email,setemail]=useState("abdeshanmugam@gmail.com")
    const [firstname,setfirstname]=useState("shanmugam")
    const [lastname,setlastname]=useState("sham")
    const [password,setpassword]=useState("447564756sa")
    const [response,setresponse]=useState("")
    const add=async()=>{
       try {
        await axios.post("https://day-42-0q4q.onrender.com/signin",
        {email:email,
        password:password,
        firstname:firstname,
        lastname:lastname
    }).then((d)=>{
      
        if(d.status==200){

         setresponse("Email has Registered ")
        }
      
    })
       } catch (error) {
        
        setresponse("Mail ID already registered")
       }
      
    }

    console.log(response);
    return (

        <div className='container d-flex flex-row justify-content-center'>
      <div className='row'>
  <div className="col-12">
    
  <label htmlFor="exampleInputEmail1" className="form-label mt-5">Email address</label>
  <input type="email" className="form-control mt-2 mb-2" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e)=>{setemail(e.target.value)}}/>
 
  <label htmlFor="exampleInputfirstname" className="form-label mt-2">Firtname</label>
    <input type="password" className="form-control" id="exampleInpufirstname" onChange={(e)=>{setfirstname(e.target.value)}}/>


    <label htmlFor="exampleInputlastname" className="form-label mt-2">Lastname</label>
    <input type="password" className="form-control" id="exampleInputlastname" onChange={(e)=>{setlastname(e.target.value)}}/>


  <label htmlFor="exampleInputPassword1" className="form-label mt-2">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=>{setpassword(e.target.value)}}/>
    <div><span className='mt-5'>{response}</span></div>
  

  <button type="submit" className="btn btn-primary mt-3"onClick={add} >Submit</button>
</div>
        


      </div>
      
    

            
        </div>
    );
};

export default Signin;