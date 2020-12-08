import {useState} from 'react';
import {Redirect} from 'react-router-dom';
import styles from './profile.module.css';
import {Avatar, Card} from '@material-ui/core';
import {connect} from 'react-redux';
// import {db} from '../../firebase';

const Profile = (props) => {
    const [seed, setSeed] = useState('');
    // const [sarTsugPoints, setSartsugPoints] = useState(null);
    // useEffect(() => {
    //     let id2 = props.auth.uid;
    //     setSeed(Math.floor(Math.random() * 5000));
    //     db.collection('users').doc(id2).onSnapshot(snap=>{
    //         setSartsugPoints(snap.data().sartsugPoints);

    //     })
    // }, []);

    if(!props.auth.uid) return <Redirect to='/signIn'/>

    return (
        <div className={styles.profile}>
            <div className={styles.profilePic}>
                <Avatar
                    className={styles.profileavatar}
                    src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <h4>{props.auth.email}</h4>
            </div>

            <Card className={styles.cardInfo}>
                <p>Thank You for signing up and showing interest in us: We will update you on our project via you're mail</p>
            </Card>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {auth: state.firebase.auth, profile: state.firebase.profile}
}
export default connect(mapStateToProps)(Profile)
