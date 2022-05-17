import React,{useState,useEffect} from 'react'
import LoadingPage from '../../LoadingPage';

function ViewUser() {

  const [admins,setAdmins] = useState("");
  const [loading,setLoading] = useState(true);

  useEffect( async()=>{
    const res = await fetch("/allAdmin" , {
      method:"GET" ,
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      } , 
      credentials:"include"
    });
    const data = await res.json();
    setAdmins(data);
    setLoading(false)
  },[])

  console.log(admins)

  if(loading)
  return <><LoadingPage/></>
  return (
    <div>
      <div className='container-box'>
          <h2 className='heading border-bottom border-dark w-50 m-auto p-3'>All Admins</h2>
          <div className='banner-list' >
            { admins.user.map(admin=>{
              return( 
              <div style={{display:"flex",flexDirection:"column",lineHeight:"5px"}} >
              <img  src={admin.imageUrl}/>
              <span>{admin.Name}</span>
              <span>Role : {admin.role}</span>
              <span>{admin.mobileNumber}</span>
              <span>{admin.email}</span>
              <button  className='btn btn-danger m-1'>Delete</button>
            </div>)
            })
            }
      </div>
    </div>
    </div>
  )
}

export default ViewUser