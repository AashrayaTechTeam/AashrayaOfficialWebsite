import React from 'react'

function Bdd() {
  return (
    <div className='container-box'>
    <h2 className='heading border-bottom border-dark w-50 m-auto p-3'>Add paragraph about BDD</h2>
    <div id="form-slide" className='box-container'>
    <form className='form-container'>
    <textarea style={{padding:"10px",margin:"10px",border:"none",borderRadius:"7px",height:"500px"}} type="text" placeholder='Writer here about the event' />
    <input type="Submit" className='btn btn-dark' />
    </form>
    </div>
  </div>
  )
}

export default Bdd