import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


function BookDonationDrive() {
    
    const markdown = `# Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.`;
  return (
    <div style={{position:"absolute",top:"0",width:"100%"}}>

        <div style={{position:"relative",backgroundColor:"black"}}>
            <img style={{opacity:"0.4",width:"100%",height:"400px"}}
            src="https://images.unsplash.com/photo-1533669955142-6a73332af4db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80" placeholder="image" />
        </div>

        <div style={{position:"absolute",top:"0",margin:"160px auto",width:"100%"}}>
            <h1 style={{textAlign:"center",color:"white",margin:"20px auto",letterSpacing:"2px",width:"80%"}}>
            Book Donation Drive
            </h1>
            <p style={{textAlign:"center",color:"white",margin:"auto",letterSpacing:"2px",width:"60%"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
        </div>

        <div style={{position:"relative",color:"black",margin:"40px auto",width:"80%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
        </div>
    </div>
  )
}

export default BookDonationDrive