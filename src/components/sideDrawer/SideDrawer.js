import './side.css';
// import {Link} from 'react-router-dom';
import SignedLinks from '../NavBar/SignedLinks';
import SignedOutLinks from '../NavBar/SignedOutLinks';
import {connect} from 'react-redux';

const SideDrawer = ({show, auth}) => {
    let drawClasses = 'sideDrawer';
    if(show){
        drawClasses = 'sideDrawer open'
    }
    const links = auth.uid ? <SignedLinks /> : <SignedOutLinks />;
    return (
        <nav className={drawClasses}>
            {links}
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}
export default connect(mapStateToProps)(SideDrawer)