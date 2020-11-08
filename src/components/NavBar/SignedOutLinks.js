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
            <li >
                <NavLink className={styles.signUpButton} to="/SignUp">Sign Up</NavLink>
            </li>

        </ul>
    )
}

export default SignedLinks
