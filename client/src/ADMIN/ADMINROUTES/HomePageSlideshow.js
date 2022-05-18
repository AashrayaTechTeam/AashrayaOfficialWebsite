import React, { useState, useEffect,useRef } from 'react'
import LoadingPage from '../../LoadingPage'
import JoditEditor from "jodit-react";

function HomePageSlideshow() {


  const handleSumbitSlide = (e)=>{
    e.preventDefault();
    document.getElementById("form-slide").style.display = 'flex';
  }


  const [heading,setHeading] =useState("");
  const [imageUrl,setImageUrl] =useState("");
  const [smallPara,setSmallPara] =useState("");
  const [post,setPost] =useState("");
  const [slides,setSlides] = useState("");
  const [loading,setLoading] = useState(true);

  const editor = useRef(null)
	const [content, setContent] = useState()
  
  //add new slides
  const submitHandle = async(e) =>{
    e.preventDefault();
    try{
      const res = await fetch('/slideshow' ,{
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


  //get the slideshow data
  useEffect( async()=>{
    const res = await fetch("/getSlideshow" , {
      method:"GET" ,
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      } , 
      credentials:"include"
    });
    const data = await res.json();
    setSlides(data);
    setLoading(false)
  },[])


  //DELETE SLIDE 
  const deleteSlide = async(id)=>{
try{
      const res = await fetch('/deleteSlide' ,{
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
    <h2 className='heading border-bottom border-dark w-50 m-auto p-3'>SlideShow Content</h2>
    <div className='banner-list'>
      { slides.slide.map(sld=>{
        return( <div>
        <img src={sld.imageUrl}/>
        <span>{sld.heading}</span>
        <button  onClick={()=>{deleteSlide(sld._id)}}  className='btn btn-danger m-1'>Delete</button>
      </div>)
      })
      }
    </div>
    <button onClick={handleSumbitSlide} className='btn btn-dark w-50 m-auto'>Add Slideshow Content</button>
    <div id="form-slide" style={{display:"none"}} className='box-container'>
    
    <form className='form-container'>
    <input value={heading} onChange={(e)=>{setHeading(e.target.value)}} 
    type="text" placeholder='Heading' />
    <input value={imageUrl} onChange={(e)=>{setImageUrl(e.target.value)}}
    type="text" placeholder='Cover image url' />
    <textarea value={smallPara} onChange={(e)=>{setSmallPara(e.target.value)}}
     type="text" placeholder='Write a small paragraph here...' />
    <span>Write post here..</span>
    <JoditEditor ref={editor}
                value={content}
                tabIndex={1}
		            onBlur={newContent => setContent(newContent)}
                onChange= {content=>{setPost(content)}} />
    <button onClick={submitHandle} className='btn btn-dark'>Submit</button>
    </form>

    </div>
  </div>
  )
}

export default HomePageSlideshow