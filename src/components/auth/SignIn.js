import {useState} from 'react';
import styles from './auth.module.css';
import {Grid, TextField, Button} from '@material-ui/core'
import Footer from '../footer/Footer';
const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email, password);
    }

    const emailHandler = e => {
        setEmail(e.target.value);
    }
    const passwordHandler = e => {
        setPassword(e.target.value);
    }
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
            </form>

        </div>
    )
}

export default SignIn
