import styles from './footer.module.css';
import {AiOutlineInstagram, AiFillFacebook, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'
import {Link} from 'react-router-dom';
import Logo1 from '../../assets/logo.svg';
const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerChildOneContainer}>
                <div className={styles.footerOne}>
                    <div className={styles.titleHolder}>
                        <img className={styles.imgLogo} src={Logo1} alt="CompanyLogo"/>
                        <h4>Sartsug Bhutan</h4>
                    </div>

                    <p>Here at StarTsug Bhutan, we plan on implementing the newest technology for the benefit for all. We strive to build a safer, cleaner and a society with values and respect for one another. “Build for change” is the reason why we started StarTsug. The only way to see changes is by actually taking a step to make the change and we, at StarTsug hope to create and implement technologies which will benefit the society, people and every being for the good. Take a journey together with us to “Build for Change”.</p>
                    <div className={styles.footerOneMediaContainer}>
                        <a href="https://instagram.com/sartsugbhutan" rel="noopener noreferrer" target="_blank" className={styles.footerInsta}><AiOutlineInstagram/>
                        </a>
                        <a href="/" rel="noopener noreferrer" target="_blank" className={styles.footerFacebook}><AiFillFacebook/>
                        </a>
                        <a href="/" rel="noopener noreferrer" target="_blank" className={styles.footerTwitter}><AiOutlineTwitter/>
                        </a>
                        <a href="/" rel="noopener noreferrer" target="_blank" className={styles.footerLinkedin}><AiFillLinkedin/>
                        </a>
                    </div>
                </div>

                <div className={styles.footerTwo}>
                    <h4>Quick Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/courses">Courses page</Link>
                    <Link to="/">Testimonils</Link>
                    <Link to="/contactUs">Contact Us</Link>
                </div>
                <div className={styles.footerFour}>
                    <h4>About Us</h4>
                    <Link to="/about">Team</Link>
                </div>
                <div className={styles.footerThree}>
                    <h4>Legal</h4>
                    <Link to="/">Terms and condition
                    </Link>
                    <Link to="/">Privacy and Policy</Link>
                </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.footerChildTwoContainer}>
                <div className={styles.footerTwoContainer}>
                    <p>
                        &copy;All Rights Reserved; Sartsug Bhutan 2020
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer