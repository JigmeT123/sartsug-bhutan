import styles from './backdrop.module.css';

const Backdrop = ({back}) => {
    return (
        <div className={styles.backDrop} onClick={back}>   
        </div>
    )
}

export default Backdrop