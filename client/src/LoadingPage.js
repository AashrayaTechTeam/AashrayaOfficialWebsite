import React from 'react'
import'./styles/Loading.css'
function LoadingPage() {
  return (
    <div className='box-loader' style={{display:"flex",flexDirection:"column"}}>
    {/* <h1 className='message'>Stop Reloading..It Hurts</h1> */}
    <h1 className='message1'>Loading...</h1>
      <div className="loading-container">
        <span class="loader"></span>
        {/* <span class="loader1"></span>
        <span class="loader"></span> */}
    </div>
    </div>
  )
}

export default LoadingPage