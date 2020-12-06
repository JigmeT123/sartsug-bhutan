import {useState} from 'react';
import styles from './auth.module.css';
import {Grid, TextField, Button} from '@material-ui/core'
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from '../../store/actions/authActions';

const SignUp = (props) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const {auth, signUp, authError} = props
    const handleSubmit = e => {
        e.preventDefault();
        let newUser = {
            email,
            name,
            password,
        }
        signUp(newUser)
    }
    const emailHandler = e => {
        setEmail(e.target.value);
    }
    const passwordHandler = e => {
        setPassword(e.target.value);
    }
    const nameHandler = e => {
        setName(e.target.value);
    }


    if(auth.uid) return <Redirect to='/thankyou'/>
    return (
        <div className={styles.signInContainer}>

            <form className={styles.signIn}>
                <div className={styles.formTitle}>
                    <h1>Sign Up</h1>
                </div>
                <Grid className={styles.gridContainer} container>
                    <TextField
                        className={styles.textField}
                        variant="outlined"
                        label="Name"
                        value={name}
                        helperText="Submit your valid name"
                        onChange={nameHandler}/>
                </Grid>
                <Grid className={styles.gridContainer} container>
                    <TextField
                        className={styles.textField}
                        variant="outlined"
                        label="Email"
                        value={email}
                        helperText="We Never share your personal data"
                        onChange={emailHandler}/>
                </Grid>

                <Grid className={styles.gridContainer} container>
                    <TextField
                        className={styles.textField}
                        variant="outlined"
                        label="Password"
                        type="password"
                        onChange={passwordHandler}
                        helperText="We Never share your personal data"
                        value={password}/>
                </Grid>
                  

                <Button onClick={handleSubmit} className={styles.signInBtn}>Sign Up</Button>
                {authError ? <small className={styles.error}>{authError}</small>:null}
            </form>

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
