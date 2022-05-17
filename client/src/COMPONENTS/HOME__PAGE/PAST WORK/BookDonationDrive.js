import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


function BookDonationDrive() {
    
    const markdown = `# Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.`;
  return (
    <div  className='post-container'>

        <div className='post-cover-img'>
            <img 
            src="https://images.unsplash.com/photo-1533669955142-6a73332af4db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80" placeholder="image" />
        </div>

        <div className='post-heading' >
            <h1>
            Book Donation Drive
            </h1>
        </div>

        <div className='post-content'>
        <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
        </div>
    </div>
  )
}

export default BookDonationDrive