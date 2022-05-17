import React,{useEffect,useState} from 'react'
import LoadingPage from '../../LoadingPage'
function Subscription() {

  const [sub,setSub] = useState("");
  const [loading,setLoading] = useState(true);

  useEffect( async()=>{
    const res = await fetch("/getSubscriber" , {
      method:"GET" ,
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      } , 
      credentials:"include"
    });
    const data = await res.json();
    setSub(data);
    setLoading(false)
  },[])

  console.log(sub);

  if(loading)
    return <><LoadingPage/></>;

  return (
    <div className='container-box'>
    <h2 className='heading border-bottom border-dark w-50 m-auto p-3'>Subscriptions</h2><br/>
    <button className='btn btn-danger m-2 w-50 m-auto '>Delete All</button>
      <ul style={{display:"flex",flexDirection:"column",margin:"auto",height:"400px"}}>
        {
          sub.sub.map((subs)=>{
            return(
              <li>{subs.Email}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Subscription