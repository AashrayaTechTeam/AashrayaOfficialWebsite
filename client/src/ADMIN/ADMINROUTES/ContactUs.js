import React,{useState,useEffect} from 'react'
import LoadingPage from '../../LoadingPage';

function ContactUs() {

  const [message , setMessage] = useState("");
  const [loading,setLoading] = useState(true);

  useEffect( async()=>{

    try {
        const res = await fetch("/getContact" , {
          method:"GET" ,
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
          } , 
          credentials:"include"
        })
        const data = await res.json();
        setMessage(data);
        setLoading(false)
    }
    catch(err){
      console.log(err)
    }
  },[])

  //delete message
  const deleteHandle = async(id)=>{
    try{
          const res = await fetch('/deleteMessage' ,{
          method:"POST" ,
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({ id })
        });
        await res.json();
        window.alert("Successfully deleted") 
        window.location.reload();
      }
      catch(err){
          console.log(err);
      }
      }


  if(loading)
    return <><LoadingPage/></>;
  return (
    <div className='container-box'>
    <h2 className='heading border-bottom border-dark w-50 m-auto p-3'>Contact us Messages</h2>
    <div className='banner-list'>
    { message.contact.map(msg=>{
        return( 
        <div style={{display:"flex",flexDirection:"column"}}>
            <span><strong>{msg.Name}</strong> | <strong>{msg.Email}</strong></span>
            <span style={{width:"60%"}}>{msg.Message}</span>
            <button onClick={()=>{deleteHandle(msg._id)}} className='btn btn-danger m-1'>Delete</button>
        </div>
        )
    })
      }
      
    </div>
  </div>
  )
}

export default ContactUs;