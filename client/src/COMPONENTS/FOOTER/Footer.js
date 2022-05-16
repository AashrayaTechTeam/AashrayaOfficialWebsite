
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Footer.css'
import img from '../../ASSETS/logo.jpg'
function Footer() {

    const [Email,setEmail] = useState("");

    const submitHandle = async(e) =>{
        e.preventDefault();
        try{
            const res = await fetch('/subscribe' ,{
            method:"POST" ,
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({
              Email
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
        console.log(err)
    }
}


    return (
        <div style={{width:"100%" , height:"auto" ,padding:"20px 0px",position:"relative", background:"#144C6B" , color:"white" , textAlign:"center"}}>
            <footer className='footer-box' style={{textDecoration:"none"}}>
                <section>
                    <img style={{width:"200px",borderRadius:"30px"}} src={img}/>
                </section>
                <section className='quick-link'>
                    <span>Donate</span>
                    <span>Blogs</span>
                    <span>Project</span>
                    <span>Team</span>
                    <span>Library</span>
                </section>
                <section className='Others'>
                    <span>Disclaimer</span>
                    <span>Privacy Policy</span>
                    <span>Terms and Condition</span>
                </section>
                <section className='Career'>
                    <Link to="/career" style={{textDecoration:"none",color:"white", margin:"5px",letterSpacing:"2px"}}><span>Career</span></Link>
                    <Link to="/join_us" style={{textDecoration:"none",color:"white",margin:"5px",letterSpacing:"2px"}}><span>Join as Volunteers</span></Link>
                </section>
                <section className='contact-form'>
                    <form>
                        <h3>Subscribe Now</h3>
                        <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder='Email'/>
                        <button onClick={submitHandle}>Send</button>
                    </form>
                </section>
            </footer>
            <div className='footer-bottom'>
               <p>Thanks for your contribution for the wellbeing of the human race.</p>
               <p> Copyright © 2022, All Rights Reserved | Build with ❤️ from Team Aashraya</p>
               <Link to="/admin"><button className='btn p-4 ' style={{position:"absolute",background:"white",left:"0",bottom:"0",opacity:"0"}}>Admin</button></Link>
            </div>
        </div>
    )
}

export default Footer
