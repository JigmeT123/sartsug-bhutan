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
                    <CardComponent images={Logo1} description="loremnksfnkasnf asjf saf sa fas f as fsa fsa" name="Sartsug Waste" linkToSite="/map"/>
                    <CardComponent images={Logo2} description="loremnksfnkasnf asjf saf sa fas f as fsa fsa" name="Sartsug Care"/>
                    <CardComponent images={Logo3} description="loremnksfnkasnf asjf saf sa fas f as fsa fsa" name="Sartsug Learn"/>
                    <CardComponent images={Logo4} description="loremnksfnkasnf asjf saf sa fas f as fsa fsa" name="Sartsug Kids"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Homepage
