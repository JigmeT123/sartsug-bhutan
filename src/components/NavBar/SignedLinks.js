import {NavLink} from 'react-router-dom';
import {Avatar} from '@material-ui/core';
import styles from './navbar.module.css';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions';

const SignedLinks = (props) => {
    return (
        <ul>
            <li>

                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <a onClick={props.signOut}>Log Out</a>
            </li>
            <li className={styles.avatar}>
                <NavLink to="/profile"><Avatar  alt="jigme" src=""/></NavLink>
            </li>

        </ul>
    )
}

const dispatchStateToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, dispatchStateToProps)(SignedLinks)
