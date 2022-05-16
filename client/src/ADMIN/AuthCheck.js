import React, { useState,useEffect } from 'react'

function AuthAdmin() {

const [auth ,setAuth] = useState("");

  useEffect(async()=>{

    try{
      const res = await fetch("/userLoggedIn" , {
      method:"GET" ,
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      } , 
      credentials:"include"
    });
  
    const data = await res.json();
    if(data.user[0].role ==="admin")
    {
      setAuth("admin")
    }
    if(data.user[0].role === "superAdmin")
    {
        setAuth("superAdmin")
    }
    
  }catch(err){
      console.log(err)
    }

  });
  return auth;
}


export  {AuthAdmin} 