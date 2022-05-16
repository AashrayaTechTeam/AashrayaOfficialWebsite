import React,{useState,useEffect} from 'react'

function Join_us() {

    const [ State, setState] = useState("");
    const [ Name, setName] = useState("");
    const [ Email, setEmail] = useState("");
    const [ mobileNumber, setMobileNumber] =useState("");
    const [ Address, setAddress] = useState("");
    const [ City, setCity] = useState("");
    const [ District, setDistrict] = useState("");
    const [ Pin, setPin] =useState("");
    const [acceptTnC,setAcceptTnC] = useState(true);


    console.log(State,Name,Email,mobileNumber,Address,City,District,Pin,acceptTnC)

    const submitHandle = async(e) =>{
        e.preventDefault();
        try{
          const res = await fetch('/joinUs' ,{
          method:"POST" ,
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            State,Name,Email,mobileNumber,Address,City,District,Pin,acceptTnC
          })
        });
        const data = await res.json();
        if(data.status === 422 || !data)
          window.alert("Invalid field type")
        if(data.error)
            window.alert("Invalid field type")
        else
          {window.alert("Thank you for your response. We will get back to you soon..") 
        window.location.reload();
        }
      }
      catch(err){
          console.log(err);
      }
      }

    return (
        <div style={{backgroundColor:"blue !Important"}}>
            <div style={{backgroundColor:"black",display:"flex",justifyContent:"center",position:"absolute",top:"0%",color:"white",margin:"auto",width:"100%"}}>
            <form style={{padding:"100px 0px",display:"flex" , flexDirection:"column"}}>
            <div style={{textAlign:"center"}}>
                <h1>Join Us</h1>
            </div>
            <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">State</label>
                <select value={State} onChange={(e)=>{setState(e.target.value)}} class="form-select" required aria-label="Default select example">
                    <option selected disabled>State</option>
                    <option value="Andra Pradesh">Andra Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Karnataka">Karnataka</option>
                </select>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input value={Name} onChange={(e)=>{setName(e.target.value)}} 
                    type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input value={Email} onChange={(e)=>{setEmail(e.target.value)}}
                    type="email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="We'll never share your email with anyone else"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
                    <input value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}}
                    type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="We'll never share your mobile number with anyone else"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Address</label>
                    <input value={Address} onChange={(e)=>{setAddress(e.target.value)}}
                    type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">City</label>
                    <input value={City} onChange={(e)=>{setCity(e.target.value)}}
                    type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">District</label>
                    <input value={District} onChange={(e)=>{setDistrict(e.target.value)}}
                    type="text" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Pincode</label>
                    <input value={Pin} onChange={(e)=>{setPin(e.target.value)}}
                    type="number" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                    <label class="form-check-label" for="exampleCheck1">Aru you ready to Volunteer for the welfare of humanity? </label>
                <div style={{display:"flex"}}>
                <div class="form-check">
                    <input class="form-check-input" required type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                    <label class="form-check-label" for="flexRadioDefault1">
                        Yes
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" required type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label class="form-check-label" for="flexRadioDefault2">
                        No
                    </label>
                    </div>
                </div>
                <div class="mb-3 form-check">
                    <input value={acceptTnC} onChange={(e)=>{setAcceptTnC(e.target.value)}} type="checkbox" required class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">I accepted the terms and conditions </label>
                </div>
                <button onClick={submitHandle} class="btn btn-primary">Submit</button>
            </form>
        </div>
        </div>
    )
}

export default Join_us
