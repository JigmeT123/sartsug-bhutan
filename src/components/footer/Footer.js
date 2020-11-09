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

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book. It has survived not only five centuries, but also the leap</p>
                    <div className={styles.footerOneMediaContainer}>
                        <a href="/" target="_blank" className={styles.footerInsta}><AiOutlineInstagram/>
                        </a>
                        <a href="/" target="_blank" className={styles.footerFacebook}><AiFillFacebook/>
                        </a>
                        <a href="/" target="_blank" className={styles.footerTwitter}><AiOutlineTwitter/>
                        </a>
                        <a href="/" target="_blank" className={styles.footerLinkedin}><AiFillLinkedin/>
                        </a>
                    </div>
                </div>

                <div className={styles.footerTwo}>
                    <h4>Quick Links</h4>
                    <Link to="/">Home</Link>
                    <Link to="/courses">Courses page</Link>
                    <Link to="/">Testimonils</Link>
                    <Link to="/">Company</Link>
                    <Link to="/search">Search Jobs</Link>
                    <Link to="/contactUs">Contact Us</Link>
                </div>
                <div className={styles.footerFour}>
                    <h4>About Us</h4>
                    <Link to="/aboutUs">Team</Link>
                    <Link to="/">Jobs</Link>
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
                        &copy;Sartsug Bhutan 2020-
                        <span>Build for change.</span>
                    </p>
                </div>
                <div className={styles.footerTwoStats}>
                    <p>
                        <span>1000</span>
                        Courses</p>
                    <p>
                        <span>530</span>
                        New Jobs</p>
                    <p>
                        <span>2000</span>
                        Students</p>
                </div>
            </div>
        </div>
    )
}

export default Footer