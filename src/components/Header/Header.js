import styles from './header.module.css';
import {Button} from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.title}>
                    <h1>When we are together, <br /> We Clean</h1>
                    <p>We connect volunteers, that are willing to help clean up the cities, send reports about areas with litter, or both</p>
                    <Link to="/signUp"><Button className={styles.volunteerBtn}>Be a part !</Button></Link>
                </div>
            </div>
            <div className={styles.waveAnimate}>
              <div className={styles.wave}></div>
              <div className={styles.wave1}></div>
            </div>
        </div>
    )
}

export default Header
