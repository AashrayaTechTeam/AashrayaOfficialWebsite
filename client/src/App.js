import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./COMPONENTS/HEADER/Navbar";
import Home from "./COMPONENTS/HOME__PAGE/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/styles/Responsive2.css"
// import Footer from './COMPONENTS/FOOTER/Footer';
import Admin from "./ADMIN/Admin";
import Join_us from "./COMPONENTS/JOIN US/Join_us";
import SaktiWeek from "./Temp Component/Sakti Week/SaktiWeek";
import ListTeam from "./COMPONENTS/TEAM/ListTeam";
import About from "./COMPONENTS/ABOUT/About";
import AdminHandle from "./ADMIN/AdminHandle";
import SlideShow_detail from "./COMPONENTS/SLIDESHOW_DETAIL_PAGE/SlideShow_detail";
import Poster from "./COMPONENTS/HOME__PAGE/POSTER/Poster";
import BookDonationDrive from "./COMPONENTS/HOME__PAGE/PAST WORK/BookDonationDrive";
import Career from "./COMPONENTS/CAREER/Career";
import PageNotFound from "./PageNotFound";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/team" >
        <ListTeam/>
        </Route>
        <Route path="/admin/admin_handle" >
        <AdminHandle/>
        </Route>
        <Route path="/about" >
        <About/>
        </Route>
        <Route path="/join_us">
          <Join_us />
        </Route>
        <Route path="/saktiweek" component={SaktiWeek} />
        <Route path="/admin">
          <Admin/>
        </Route>
        <Route path ="/career" component ={Career}/>
        <Route path="/BookDonationDrive" component={BookDonationDrive} />
        <Route path="/poster"  component={Poster} />
        <Route path="/:id" component={SlideShow_detail} />
        <Route path="/" component={Home} exact={true} />
        <Route path="*" exact={true} >
              <PageNotFound/>
            </Route>
      </Switch>
    </Router>
  );
}

export default App;
