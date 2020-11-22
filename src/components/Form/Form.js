import styles from './form.module.css';
import {Grid, TextField, Button, Select} from '@material-ui/core'
import {useState, useEffect} from 'react';
import {createReport} from '../../store/actions/mapActions';
import {connect} from 'react-redux';
import {db} from '../../firebase';
const Form = (props,{locationInfo, auth}) => {
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState("");
    const [sarTsugPoints, setSarTsugPoints] = useState(null);
    const [list, setList] = useState([
        "1 day",
        "2 day",
        "3 day",
    ]);

    // const [image, setImage] = useState(null);
    // const [url, setUrl] = useState(null);

    const [name, setName] = useState("");
    const nameHandler = e => {
        setName(e.target.value);
    }


    const submitHandler = e => {
        e.preventDefault();
        const id = props.auth.uid;
        let points = sarTsugPoints + 1;
        setSarTsugPoints(points);
        db.collection('users').doc(id).set({
            sartsugPoints: points,
        })
        console.log("points: "+ points);
        console.log("id: "+ id);
        const reportInfo = {
            description,
            categories,
            name,
            locationInfo: props.locationInfo,
        }
        props.createReport(reportInfo);
    }
    const descriptionHandler = e => {
        setDescription(e.target.value);
    }

    const changeHandler = (e) => {
        const category = e.target.value;
        setCategories(category);
    };

    return (
        <form className={styles.formContainer}>
            <Grid className={styles.gridContainer} container>
            <TextField className={styles.textField} multiline={true} variant="outlined" label="Name" value={name}
                    onChange={nameHandler}
                />

                <TextField className={styles.textField} multiline={true} variant="outlined" label="Description/Comments" value={description}
                    onChange={descriptionHandler}
                />
                 
                <div className={styles.formStyle} >
                    <label htmlFor="exampleInputEmail1">Pick Up:</label>
                    <Select className="form-control form-control-lg" value={categories} onChange={changeHandler}>
                        {list.map((category,count) => (<option key={count} value={category}>{category}</option>))}
                    </Select>
                </div>
                <Button onClick={submitHandler} className={styles.submitbtn}>Submit</Button>
            </Grid>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}
const mapsDispatchToProps = (dispatch) => {
    return{
        createReport: (reportInfo) => dispatch(createReport(reportInfo)),
    }
}
export default connect(mapStateToProps, mapsDispatchToProps)(Form)
