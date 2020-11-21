import {NavLink} from 'react-router-dom';
import styles from './navbar.module.css';

const SignedLinks = () => {
    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <NavLink to="/leaderboard">LeaderBoard</NavLink>
            </li>
            <li >
                <NavLink to="/signIn">Sign In</NavLink>
            </li>
            <li >
                <NavLink className={styles.signUpButton} to="/signUp">Sign Up</NavLink>
            </li>
        </ul>
    )
}

export default SignedLinks
