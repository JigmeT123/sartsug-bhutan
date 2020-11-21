import {useState} from 'react';
import styles from './auth.module.css';
import {Grid, TextField, Button} from '@material-ui/core';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authActions';
import { red } from '@material-ui/core/colors';

const SignIn = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(props)
        const credentials = {
            email,
            password,
        }
        props.signIn(credentials);
    }

    const emailHandler = e => {
        setEmail(e.target.value);
    }
    const passwordHandler = e => {
        setPassword(e.target.value);
    }
    const {authError} = props
  
    return (
        <div className={styles.signInContainer}>

            <form className={styles.signIn}>
                <div className={styles.formTitle}>
                    <h1>Sign In</h1>
                </div>
                <Grid className={styles.gridContainer} container="container">
                    <TextField
                        className={styles.textField}
                        variant="outlined"
                        label="Email"
                        value={email}
                        helperText="We Never share your personal data"
                        onChange={emailHandler}/>
                </Grid>

                <Grid className={styles.gridContainer} container="container">
                    <TextField
                        className={styles.textField}
                        variant="outlined"
                        label="Password"
                        type="password"
                        onChange={passwordHandler}
                        helperText="We Never share your personal data"
                        value={password}/>
                </Grid>

                <Button onClick={handleSubmit} className={styles.signInBtn}>Sign In</Button>

                   
                <div className={styles.errorBox}>
                {
                        authError ? <p>{authError}</p> : null
                    }
        
                </div>
            </form>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
