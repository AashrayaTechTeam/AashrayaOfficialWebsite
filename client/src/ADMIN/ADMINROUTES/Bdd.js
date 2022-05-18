import React, { useRef, useState } from 'react'
import JoditEditor from "jodit-react";


function Bdd() {
  const editor = useRef(null)
	const [content, setContent] = useState()
  const [post,setPost] = useState();
  return (
    <div className='container-box'>
    <h4 className='heading border-bottom border-dark w-50 m-auto p-3'>Add paragraph about BDD</h4>
    <div id="form-slide" className='box-container'>
    <form className='form-container'>
      <JoditEditor ref={editor}
                value={content}
                tabIndex={1}
		            onBlur={newContent => setContent(newContent)}
                onChange= {content=>{setPost(content)}} />
    <input type="Submit" className='btn btn-dark' />
    </form>
    <div style={{width:"90%",position:"relative"}}>
      <p style={{lineHeight:"23px",overflowX:"hidden"}} dangerouslySetInnerHTML={{ __html:post }}></p>
    </div>
    </div>
  </div>
  )
}

export default Bdd