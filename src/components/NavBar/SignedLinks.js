import {NavLink} from 'react-router-dom';
import {Avatar} from '@material-ui/core';
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
                <NavLink to="/">Log Out</NavLink>
            </li>
            <li className={styles.avatar}>
                <NavLink to="/" ><Avatar  alt="jigme" src=""/></NavLink>
            </li>

        </ul>
    )
}

export default SignedLinks
