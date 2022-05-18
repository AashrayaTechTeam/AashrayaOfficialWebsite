import JoditEditor from 'jodit-react';
import React,{useRef, useState} from 'react'

function HomePageBanner() {

  const [heading,setHeading] =useState("");
  const [imageUrl,setImageUrl] =useState("");
  const [smallPara,setSmallPara] =useState("");
  const [post,setPost] =useState("");
  const editor = useRef(null)
	const [content, setContent] = useState()

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
    <h4 className='heading border-bottom border-dark w-50 m-auto p-3'>Add Event Poster</h4>
    <div id="form-slide" className='box-container'>

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

export default HomePageBanner