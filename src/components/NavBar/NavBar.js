import {useState, useEffect} from 'react'
import styles from './navbar.module.css';
import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';
import ToggleBtn from '../sideDrawer/DrawerToggle';
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
            <Link to="/">
            <img className={styles.header__logo} src={logo} alt="CompanyLogo" />
            </Link>
            
            <nav className={styles.header__navigation}>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/signUp"><li className={styles.signUpButton}>Sign Up </li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Header