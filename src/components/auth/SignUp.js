import {useState} from 'react';
import styles from './auth.module.css';
import {Grid, TextField, Button} from '@material-ui/core'
const SignUp = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

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
    const nameHandler = e => {
        setName(e.target.value);
    }
    const confirmPasswordHandler = e => {
        setConfirmPassword(e.target.value);
    }
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

                <Grid className={styles.gridContainer} container>
                    <TextField
                        className={styles.textField}
                        variant="outlined"
                        label="Confirm Password"
                        type="password"
                        onChange={confirmPasswordHandler}
                        value={confirmpassword}/>
                </Grid>

                <Button onClick={handleSubmit} className={styles.signInBtn}>Sign Up</Button>
            </form>

        </div>
    )
}

export default SignUp
