import {useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import styles from './map.module.css';
import {GoTrashcan} from 'react-icons/go';
import Form from '../Form/Form';
import {GiGlassCelebration} from 'react-icons/gi';
import Waste from '../wasteContent/Waste';
import {GiTreeBranch} from 'react-icons/gi';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Button} from '@material-ui/core';
const Map = (props) => {
    const [viewport, setViewport] = useState(
        {width: '70%', height: "80%", latitude: 27.508042999999997, longitude: 90.51571369999999, zoom: 8}
    );
    const [showPopUp, setShowPopUp] = useState({});
    const [locationInfo, setLocationInfo] = useState([]);
    const [info, setInfo] = useState({});
    const [flag, setFlag] = useState(false);
    const showAddMarkerPopUp = e => {
        const [longitude, latitude] = e.lngLat;
        setInfo({latitude, longitude})
    }

    const { location } = props;
    
    console.log(props)
    useEffect(()=>{
        setLocationInfo(location);
    }, [location]);

    return (
        <div className={styles.map}>
            <div className={styles.sartsugWaste}>
                <p>Sartsug Waste</p>
                <GiTreeBranch className={styles.cleanIcon}/>
            </div>
            <div className={styles.mapContentMain}>
                <ReactMapGL
                    className={styles.map1}
                    {...viewport}
                    onDblClick={showAddMarkerPopUp}
                    mapStyle="mapbox://styles/mapbox/streets-v11"
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    onViewportChange={nextViewport => setViewport(nextViewport)}>
                    {
                        locationInfo && locationInfo.map(locate => {
                            return(
                            <>
                            <Marker
                                    key={locate.id}
                                    latitude={locate.locationInfo.latitude}
                                    longitude={locate.locationInfo.longitude}
                                    offsetLeft={-20}
                                    offsetTop={-10}>
                                    <GoTrashcan onClick={() => setShowPopUp({
                                        // ...showPopUp,
                                        [locate.id]: true

                                    })} className={`${styles.markerPic} ${flag[locate.id] && styles.yellowMarker}`} />

                             </Marker>

                                {
                                showPopUp[locate.id] ? (
                                    <Popup
                                    key={locate.id}
                                        latitude={locate.locationInfo.latitude}
                                        longitude={locate.locationInfo.longitude}
                                        closeButton={true}
                                        closeOnClick={false}
                                        onClose={() => setShowPopUp({})}
                                        anchor="top"
                                        dynamicPosition={true}>
                                        <div className={styles.popUp}>
                                            <h5>Waste reported Info: </h5>
                                            <div className={styles.popUpInner}>
                                                <p><span>Reporter Name:</span>{locate.reporterName}</p>
                                                <p><span>Description of the map:</span>{locate.description}</p>
                                                <p><span>Severity of the area:</span>{locate.categories}</p>
                                                {/* <p><span>Reported Time:</span>{locate.createdAt}</p> */}
                                            </div>
                                            <div className={styles.popUpBtnHolder}>
                                                <Button className={styles.popUpBtn} onClick={()=> setFlag({[locate.id]: true})}>Volunteer</Button>
                                            </div>
                                        </div>
                                    </Popup>
                                ) : null
                            }
                            </>)

                        })

                    }

                    {
                        info
                            ? (
                                <> < Popup latitude = {
                                    info.latitude
                                }
                                longitude = {
                                    info.longitude
                                }
                                closeButton = {
                                    true
                                }
                                closeOnClick = {
                                    false
                                }
                                onClose = {
                                    () => setInfo(null)
                                }
                                anchor = "top" dynamicPosition = {
                                    true
                                } > <div className={styles.popUp}>
                                    <h4>Report waste:</h4>
                                    <Form locationInfo={info}/>
                                </div>
                            </Popup>

                            <Marker latitude={info.latitude} longitude={info.longitude}>
                                <GoTrashcan className={styles.markerPicAdd}/>
                            </Marker>

                        </>
                            )
                            : null
                    }
                </ReactMapGL>

                <div className={styles.instructionBox}>
                    <p>Help Us Clean,Our place.</p>

                    <div className={styles.instructions}>
                        <ul>
                            <li>
                                <span>Step 1:
                                </span>Double click on the location where you want to report the waste.</li>
                            <li>
                                <span>Step 2:
                                </span>Fill in the form - by providing a basic description of the place</li>
                            <li>
                                <span>Step 3:
                                </span>select the level of severity</li>
                            <li>
                                <span>Step 4:
                                </span>Take a picture and upload the image. (This will greatly help of wonderful
                                volunteer)</li>
                            <li>
                                <span>Step 5:
                                </span>Submit the form.</li>

                        </ul>
                        <p className={styles.appreciation}>Thank you for keeping our society clean and
                            being a part of the change. We need more people like you
                            <GiGlassCelebration/></p>
                    </div>
                </div>
            </div>
            <Waste/>
        </div>

    );
}
const mapStateToProps = (state) => {
    console.log(state)
    return {location: state.firestore.ordered.reportedInfo}
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: "reportedInfo"}
    ])
)(Map);