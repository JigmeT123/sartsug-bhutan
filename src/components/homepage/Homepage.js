import styles from './homepage.module.css';
import Header from '../Header/Header';
import Logo1 from '../../assets/logofolder/1.svg';
import Logo2 from '../../assets/logofolder/2.svg';
import Logo3 from '../../assets/logofolder/3.svg';
import Logo4 from '../../assets/logofolder/4.svg';
import CardComponent from '../Card/Card';
import {GiStarSwirl} from 'react-icons/gi';
import Footer from '../footer/Footer';

const Homepage = () => {
    return (
        <div className={styles.homepage}>
            <Header />
            <div className={styles.homepageContent}>
                <div className={styles.homepageHeader}>
                    <h1>Sartsug Branches</h1>
                    <GiStarSwirl className={styles.masala}/> 
                </div>
                <div className={styles.homepageContentLogoContainer}>
                    <CardComponent images={Logo1} description="We connect volunteers, that are willing to help clean up the cities, send reports about areas with litter, or both" name="Sartsug Waste" linkToSite="/thankyou"/>
                    <CardComponent images={Logo2} description="Coming Soon! We are working on an application that will help solve mental health issues." name="Sartsug Care" linkToSite="/thankyou"/>
                    <CardComponent images={Logo3} description="Coming Soon! E-learning platform for Bhutan" name="Sartsug Learn" linkToSite="/thankyou"/>
                    <CardComponent images={Logo4} description="Coming soon!" name="Sartsug Kids" linkToSite="/thankyou"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage
