import {useState} from 'react';
import './index.css';
import Backdrop from './components/Backdrop/Backdrop';
import NavBar from './components/NavBar/NavBar';
import SideDrawer from './components/sideDrawer/SideDrawer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Homepage from './components/homepage/Homepage';

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
                        <Route exact path="/signIn" component={SignIn} />
                        <Route exact path="/signUp" component={SignUp} />
                    </Switch>

                </div>
        </Router>

    );
}

export default App;
