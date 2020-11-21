import styles from './form.module.css';
import {Grid, TextField, Button, Select} from '@material-ui/core'
import {useState} from 'react';
import {createReport} from '../../store/actions/mapActions';
import {connect} from 'react-redux';


const Form = (props,{locationInfo}) => {
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState("");
    const [list, setList] = useState([
        "Low",
        "Middle",
        "High",
    ]);
    // const [image, setImage] = useState(null);
    // const [url, setUrl] = useState(null);

    const submitHandler = e => {
        e.preventDefault();
       
        const reportInfo = {
            description,
            categories,
            locationInfo: props.locationInfo,
        }
        console.log(reportInfo);
        props.createReport(reportInfo)
    }
    const descriptionHandler = e => {
        setDescription(e.target.value);
    }

    const changeHandler = (e) => {
        const category = e.target.value;
        setCategories(category);
    };

    // const imgUploadHandler = e => {
    //     if(e.target.files[0]){
    //         setImage(image)
    //     }
        
    // }

    return (
        <form className={styles.formContainer}>
            <Grid className={styles.gridContainer} container>
                <TextField className={styles.textField} multiline={true} variant="outlined" label="Description/Comments" value={description}
                    onChange={descriptionHandler}
                />
    
                {/* <p className={styles.fileUploadTitle}>Upload an image</p>
                <input type="file" className={styles.fileUpload}
                    onChange={imgUploadHandler}
                /> */}
                <div className={styles.formStyle} >
                    <label htmlFor="exampleInputEmail1">Severity:</label>
                    <Select className="form-control form-control-lg" value={categories} onChange={changeHandler}>
                        {list.map((category,count) => (<option key={count} value={category}>{category}</option>))}
                    </Select>
                </div>
                <Button onClick={submitHandler} className={styles.submitbtn}>Submit</Button>
            </Grid>
        </form>
    )
}

const mapsDispatchToProps = (dispatch) => {
    return{
        createReport: (reportInfo) => dispatch(createReport(reportInfo))
    }
}
export default connect(null, mapsDispatchToProps)(Form)
