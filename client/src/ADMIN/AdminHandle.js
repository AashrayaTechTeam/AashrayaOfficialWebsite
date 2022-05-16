import React, {useEffect} from 'react'
import {Link, Route, Switch ,useHistory} from 'react-router-dom'
import ViewUser from './ADMINROUTES/ViewUser'
import HomePageSlideshow from './ADMINROUTES/HomePageSlideshow'
import HomePageBanner from './ADMINROUTES/HomePageBanner'
import Bdd from './ADMINROUTES/Bdd'
import ContactUs from './ADMINROUTES/ContactUs'
import Subscription from './ADMINROUTES/Subscription'
import JoinUs from './ADMINROUTES/JoinUsRequest'
import Career from './ADMINROUTES/Career'
import AddMember from './ADMINROUTES/AddMember'
import AddAdmin from './ADMINROUTES/AddAdmin'
import { AuthAdmin } from './AuthCheck'
import Cookies from 'universal-cookie';
function AdminHandle() {

  const cookies = new Cookies();
  const history = useHistory();

  //logout handle
  const removeToken = ()=>{
    cookies.remove("token")
    history.push("/");
    window.location.reload();

  }

  // getting type of admin
  const role = AuthAdmin();


  // if no admin is there, not alllow to enter 
  if(!role)
    return <>Loading...</>


  // if auth is there allow the admin
  return (
    <div style={{backgroundColor:"black",width:"100%",height:"auto",position:"absolute",top:"0%"}}>
        <div className='box-admin'>
        <div className='routes-for-admin'>
          <h1>Hello, Himangshu</h1>
          <ul>
            <Link className="Link-tag" to="/admin/admin_handle/slideshow"><li>😊 Home Slideshow</li></Link>
            <Link className="Link-tag" to="/admin/admin_handle/banner"><li>😍 Home Banner</li></Link>
            <Link className="Link-tag" to="/admin/admin_handle/bdd"><li>🥰 BDD</li></Link>
            <Link className="Link-tag" to="/admin/admin_handle/contactUs"><li>😇 Contact Us</li></Link>
            <Link className="Link-tag" to="/admin/admin_handle/subscribed"><li>🤩 Subscribed</li></Link>
            <Link className="Link-tag" to="/admin/admin_handle/joinRequest"><li>😮 Join Request</li></Link>
            <Link className="Link-tag" to="/admin/admin_handle/career"><li>🤑 Career</li></Link>
            {role=='superAdmin' ? <><Link className="Link-tag" to="/admin/admin_handle/viewUser"><li>😃 View User</li></Link>
            <Link className="Link-tag" to="/admin/admin_handle/addMember"><li>😃 Add Member</li></Link>
            <Link className="Link-tag" to="/admin/admin_handle/addAdmin"><li>😃 Assign Admin</li></Link></>:<></>}
            <Link className="Link-tag">
              <button onClick={removeToken} style={{backgroundColor:"lightblue",padding:"1px",fontWeight:"bolder",marginTop:"20px",width:"60%",borderRadius:"5px"}} >
                Log Out</button>
            </Link>
          </ul>
        </div>
        <div className='card-to-add'>
            <div className='card1'>
            <Switch>
            <Route path="/admin/admin_handle/slideshow">
              <HomePageSlideshow/>
            </Route>
            <Route path="/admin/admin_handle/banner">
              <HomePageBanner/>
            </Route>
            <Route path="/admin/admin_handle/bdd">
              <Bdd/>
            </Route>
            <Route path="/admin/admin_handle/contactUs">
              <ContactUs/>
            </Route>
            <Route path="/admin/admin_handle/subscribed">
              <Subscription/>
            </Route>
            <Route path="/admin/admin_handle/joinRequest">
              <JoinUs/>
            </Route>
            <Route path="/admin/admin_handle/career">
              <Career/>
            </Route>
            <Route path="/admin/admin_handle/viewUser">
                <ViewUser/>
            </Route>
            <Route path="/admin/admin_handle/addMember">
              <AddMember/>
            </Route>
            <Route path="/admin/admin_handle/addAdmin">
              <AddAdmin/>
            </Route>
            </Switch>
            </div>
            <div className='card2'>
              <h1>GOOGLE ANALYTICS</h1>
            </div>
        </div>
        </div>
    </div>
  )
}

export default AdminHandle