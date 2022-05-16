import React,{useState} from 'react'
function HomePageBanner() {

  const [heading,setHeading] =useState("");
  const [imageUrl,setImageUrl] =useState("");
  const [smallPara,setSmallPara] =useState("");
  const [post,setPost] =useState("");


  //add poster
  const submitHandle = async(e) =>{
    e.preventDefault();
    try{
      const res = await fetch('/addPoster' ,{
      method:"POST" ,
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        heading, imageUrl , smallPara , post
      })
    });
    const data = await res.json();
    if(data.status === 422 || !data)
      window.alert("Invalid field type")
    if(data.error)
        window.alert("Invalid field type")
    else
      {window.alert("Successfully added") 
    window.location.reload();
    }
  }
  catch(err){
      console.log(err);
  }
  }




  return (
    <div className='container-box'>
    <h2 className='heading border-bottom border-dark w-50 m-auto p-3'>Add Event Poster</h2>
    <div id="form-slide" className='box-container'>

    <form className='form-container'>
    <input value={heading} onChange={(e)=>{setHeading(e.target.value)}} 
    type="text" placeholder='Heading' />
    <input value={imageUrl} onChange={(e)=>{setImageUrl(e.target.value)}}
    type="text" placeholder='Image url' />
    <textarea value={smallPara} onChange={(e)=>{setSmallPara(e.target.value)}}
    style={{padding:"10px",margin:"10px",border:"none",borderRadius:"7px"}} type="text" placeholder='Write a small paragraph here' />
    <textarea value={post} onChange={(e)=>{setPost(e.target.value)}}
    style={{padding:"10px",margin:"10px",border:"none",borderRadius:"7px",height:"500px"}} type="text" placeholder='Write post here about the event' />
    <button onClick={submitHandle} className='btn btn-dark'>Submit</button>
    </form>

    </div>
  </div>
  )
}

export default HomePageBanner