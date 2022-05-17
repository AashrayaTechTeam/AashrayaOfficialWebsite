import React,{useState,useEffect} from 'react'
import LoadingPage from '../../LoadingPage'
import "../../styles/Teamlist.css"
function ListTeam() {

    const [Team , setTeam] = useState({})
    const [AllTeam , setAllTeam] = useState({})
    const [loading,setLoading] = useState(true)
    const [Designation,setDesignation] = useState("")
    const [State,setState] = useState("")

    //get the state Leads
  useEffect( async()=>{
    const res = await fetch("/getStateRep" , {
      method:"GET" ,
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      } , 
      credentials:"include"
    });
    const data = await res.json();
    setTeam(data);

    const res2 = await fetch("/getStateRep" , {
        method:"GET" ,
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
        } , 
        credentials:"include"
      });
      const data2 = await res2.json();
      setAllTeam(data2);
    setLoading(false)
  },[])


  const searchHandle = async(Designation,State)=>{
    
    if(Designation) 
        {
            const res = AllTeam.filter(element =>element.Designation===Designation)
            setTeam(res)
            setState("")
        }
    if(State)
    {
        const res = AllTeam.filter(element =>element.State===State)
        setTeam(res)
        setDesignation("")
    }
  }


  if(loading)
    return<><LoadingPage/></>


  return (
<div style={{background:"linear-gradient(to right, #2C5364, #203A43, #0F2027)",width:"100%",top:"0%",height:"100vh",position:"absolute"}}>

        <div class="dropdown dropdown-btn">
        <select value={Designation} onChange={(e)=>{setDesignation(e.target.value)}}
            required style={{padding:"15px",margin:"10px",color:"white",fontWeight:"bold",letterSpacing:"3px",
            border:"none",width:"30%",borderRadius:"7px",background:"linear-gradient(to right, #12c2e9, #c471ed, #f64f59)"}}>
            <option class="dropdown-item" hidden >Core Member</option>
            <option class="dropdown-item" >State Representative</option>
            <option class="dropdown-item" >Tech Team Member</option>
            <option class="dropdown-item" >Media Team</option>
            <option class="dropdown-item" >PR Team</option>
            <option class="dropdown-item" >Management Team</option>
            <option class="dropdown-item" >Fundraise Team</option>
      </select>

      <select value={State} onChange={(e)=>{setState(e.target.value)}}
            required style={{padding:"10px",margin:"10px",color:"white",fontWeight:"bold",letterSpacing:"3px",
            border:"none",width:"30%",borderRadius:"7px",background:"linear-gradient(to right, #12c2e9, #c471ed, #f64f59)"}}>
            <option  class="dropdown-item" hidden >Volunteers</option>
            <option  class="dropdown-item" >Andhra Pradesh</option>
            <option  class="dropdown-item" >Assam</option>
            <option  class="dropdown-item" >Madhya Pradesh</option>
            <option  class="dropdown-item" >Karnataka</option>
      </select>
      <button className='btn btn-primary'   onClick={()=>{searchHandle(Designation,State)}}
      style={{padding:"10px",margin:"10px",color:"black",fontWeight:"bold",letterSpacing:"3px",
            border:"none",width:"150px",borderRadius:"7px",background:"linear-gradient(to right, #7474bf, #348ac7)"}}>Search</button>
        </div>
        


    <div className='team-list'>

        {
            Team.map(member=>{
                return(
                    <div className='container card-team'>
                        <div className='box-image'>
                         <img src={member.profilePic}/>
                        </div>
                    <div className='detail-of-member'>
                        <strong>Name : {member.Name}</strong>
                        <span>Designation : {member.Designation} </span>
                        <span>Location : {member.Location}</span>
                        <span>Address : {member.Address} </span>
                        <span>Contact : {member.email} </span>
                    </div>
                    </div>
                )
            })
        }        

    </div>
</div>
  )
}

export default ListTeam