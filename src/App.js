import {useState} from 'react';
import './index.css';
import Backdrop from './components/Backdrop/Backdrop';
import NavBar from './components/NavBar/NavBar';
import SideDrawer from './components/sideDrawer/SideDrawer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Homepage from './components/homepage/Homepage';
import Map from './components/Map/Map';
import LeaderBoard from './components/leaderboard/LeaderBoard';
import Profile from './components/profile/Profile';
import About from './components/AboutUs/About';
import Thankyou from './components/Thankyou/Thankyou';

function App() {
    const [toggle, setToggle] = useState(false)
    const drawerToggleHandler = () => {
        setToggle(true)
    }
    const backDropHandler = () => {
        setToggle(false)
    }
    let backdrop;

    if (toggle) {
        backdrop = <Backdrop back={backDropHandler}/>
    }
    return (
        <Router>
                <div className="app">
                    <NavBar drawerClick={drawerToggleHandler}/>
                    <SideDrawer show={toggle}/> 
                    {backdrop}
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/signIn" component={SignIn} />
                        <Route path="/signUp" component={SignUp} />
                        <Route path="/map" component={Map} />
                        <Route path="/leaderboard" component={LeaderBoard}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/about" component={About}/>
                        <Route path="/thankyou" component={Thankyou}/>
                    </Switch>

                </div>
        </Router>

    );
}

export default App;
