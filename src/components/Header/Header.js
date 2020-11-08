import styles from './header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.waveAnimate}>
              <div className={styles.wave}></div>
              <div className={styles.wave1}></div>
            </div>
        </div>
    )
}

export default Header
