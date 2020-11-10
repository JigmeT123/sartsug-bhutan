import styles from './form.module.css';
import {Grid, TextField, Button, Select} from '@material-ui/core'
import {useState} from 'react';

const Form = () => {
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState("Severity");
    const [list, setList] = useState([
        "Low",
        "Middle",
        "High",
    ])
    const descriptionHandler = e => {
        setDescription(e.target.value);
    }

    const changeHandler = (e) => {
        const category = e.target.value;
        setCategories(category);
    };

    return (
        <form className={styles.formContainer}>
            <Grid className={styles.gridContainer} container="container">
                <TextField className={styles.textField} multiline={true} variant="outlined" label="Description/Comments" value={description}
                    onChange={descriptionHandler}
                />
                <TextField className={styles.textField} variant="outlined" label="Email"
                    //value={}
                    helperText="We Never share your personal data"
                    //onChange={}
                />
                <p className={styles.fileUploadTitle}>Upload an image</p>
                <input type="file" className={styles.fileUpload}
                    //value={}
                    //onChange={}
                />
                <div className={styles.formStyle} >
                    <label for="exampleInputEmail1">Severity:</label>
                    <Select className="form-control form-control-lg" value={categories} onChange={changeHandler}>
                        {list.map((category) => (<option value={category}>{category}</option>))}
                    </Select>
                </div>
                <Button className={styles.submitbtn}>Submit</Button>
            </Grid>
        </form>
    )
}

export default Form;
