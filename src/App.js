import {useState} from 'react';
import './index.css';
import Header from './components/Header/Header';
import Backdrop from './components/Backdrop/Backdrop';
import NavBar from './components/NavBar/NavBar';
import SideDrawer from './components/sideDrawer/SideDrawer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

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
            <div className="container">
                <div className="HeaderContainer">
                    <NavBar drawerClick={drawerToggleHandler}/>
                    <SideDrawer show={toggle}/> 
                    {backdrop}
                    <Switch>
                        <Route exact path="/" component={Header} />
                        <Route exact path="/signIn" component={SignIn} />
                    </Switch>

                </div>
            </div>
        </Router>

    );
}

export default App;
