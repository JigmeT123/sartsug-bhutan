import styles from './header.module.css';
import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>
                        <h1>
                            Build For
                            <span> Change</span>
                        </h1>
                        <p>Here at SarTsug Bhutan, we plan on implementing the newest technology for the
                            benefit for all. We strive to build a safer, cleaner and a society with values
                            and respect for one another. “Build for change” is the reason why we started
                            StarTsug. The only way to see changes is by actually taking a step to make the
                            change and we, at StarTsug hope to create and implement technologies which will
                            benefit the society, people and every being for the good. Take a journey
                            together with us to “Build for Change”.</p>
                            <div className={styles.mashayMarayDiv}>
                            <Link className={styles.volunteerBtnHolder} to="/signUp">
                            <Button className={styles.volunteerBtn}>Be a part!!</Button>
                        </Link>
                            </div>
                        
                    </div>

                    <div className={styles.mapContainer}></div>

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
