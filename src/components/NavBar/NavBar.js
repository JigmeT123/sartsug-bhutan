import {useState, useEffect} from 'react'
import styles from './navbar.module.css';
import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import ToggleBtn from '../sideDrawer/DrawerToggle';
import SignedLinks from './SignedLinks';
import SignedOutLinks from './SignedOutLinks';

const Header = ({drawerClick}) => {
    const [handleShow, setHandleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', ()=> {
            if(window.scrollY > 350){
                setHandleShow(true)
            }else{
                setHandleShow(false)
            }
        })
        return () => {
            window.removeEventListener('scroll');
        };
    }, [])
    return (
        <div className={`${styles.header} ${handleShow && styles.header__scrolled}`}>
            <div className={styles.extra}>
            <ToggleBtn click={drawerClick}/>
            </div>

            <div className={styles.logoComtainer}>
            <Link to="/">
            <img className={styles.header__logo} src={logo} alt="CompanyLogo" />
            </Link>
            </div>
            
            
            <nav className={styles.header__navigation}>
                {/* <SignedLinks /> */}
                <SignedOutLinks />
            </nav>
        </div>
    )
}

export default Header