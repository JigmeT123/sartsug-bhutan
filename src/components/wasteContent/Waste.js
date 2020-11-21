import styles from './waste.module.css';
import {GiShakingHands} from 'react-icons/gi';
import earth from '../../assets/earth.svg';
import {Card, CardContent} from '@material-ui/core'
import trash from '../../assets/trash.svg';
import victory from '../../assets/prize.svg';
import {WiStars} from 'react-icons/wi';
import Footer from '../footer/Footer';
const Waste = () => {
    return (
        <div className={styles.waste}>
            <div className={styles.wasteTitle}>
                <p>Hi! We are Sartsug Team, a non-governmental organization that focuses on
                    keeping our cities clean and eco-friendly.</p>
                <GiShakingHands className={styles.we}/>
            </div>
            <div className={styles.wasteContent}>
                <div className={styles.wasteContent1}>

                    <div className={styles.wasteContent1_child1}>
                        <h2>Our main goal
                        </h2>
                        <p>Is to make the Bhutan a better place to live. With your help, we can keep our
                            cities clean and environmentally friendly</p>
                        <br/>
                        <p>We connect volunteers, that are willing to help clean up the cities, send
                            reports about areas with litter, or both.</p>
                        <br/>
                        <p>
                            We all have the responsibility to keep our place clean and eco- friendly, but if
                            you decide to become a sartsug volunteer, you will be going the extra mile!
                        </p>
                    </div>

                    <div className={styles.wasteContent1_child2}>
                        <img className={styles.earthPic} src={earth} alt="Earth"/>
                    </div>
                </div>
                <div style={{
                        display: "flex"
                    }}>
                    <WiStars className={styles.brakeNeededIcon}/>
                    <WiStars className={styles.brakeNeededIcon}/>
                    <WiStars className={styles.brakeNeededIcon}/>
                    <WiStars className={styles.brakeNeededIcon}/>
                    <WiStars className={styles.brakeNeededIcon}/>
                </div>

                <div className={styles.wasteContent2}>
                    <div className={styles.wasteContent2_child2}>
                        <img className={styles.trashPic} src={trash} alt="trash"/>
                    </div>
                    <div className={styles.wasteContent2_child1}>
                        <h2>What is your role as a Sartsug Volunteer?
                        </h2>
                        <p>Your role as a Sartsug Volunteer is to help other volunteers to clean up the
                            areas where litter is reported on the maps.</p>
                        <br/>
                        <p>Cleaning Bhutan has never been easier! All you have to do is go to our map,
                            select one (or more!) of the areas where litter is reported, that you are
                            willing to help cleaning. Click on the "Volunteer" button and you will be
                            assigned to that area</p>
                        <br/>
                    </div>

                </div>

                <div style={{
                        display: "flex"
                    }}>
                    <WiStars className={styles.brakeNeededIcon}/>
                    <WiStars className={styles.brakeNeededIcon}/>
                    <WiStars className={styles.brakeNeededIcon}/>
                    <WiStars className={styles.brakeNeededIcon}/>
                    <WiStars className={styles.brakeNeededIcon}/>
                </div>

                <div className={styles.wasteContent3}>
                    <div className={styles.wasteContent3_child2}>
                        <img className={styles.victoryPic} src={victory} alt="trash"/>
                    </div>
                    <div className={styles.wasteContent3_child1}>
                        <h1>Sartsug Points.
                        </h1>
                        <p>Engage in our projects, help us keep our cities clean and earn
                            <b> Sartsug Points!</b>
                            <br/>
                            <br/>
                            Every 1000 Points collected together we plant 5 trees.
                        </p>
                    
                        <Card className={styles.sartsugPoints}>
                            <CardContent>

                                <h2>See how you can earn WeClean Points:</h2>
                               <p>
                                    <span>Reporting Litter:
                                    </span>
                                    will earn you 10 point</p>
                                <p>
                                    <span>Sartsug Volunteer:
                                    </span>
                                    will earn you 50 point</p>
                                    <p> <span>Donation:</span> 35 points</p>
                            </CardContent>
                        </Card>

                    </div>

                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Waste
