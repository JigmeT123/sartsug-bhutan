import {useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import styles from './map.module.css';
import {GoTrashcan} from 'react-icons/go';
import Form from '../Form/Form';
import {GiGlassCelebration} from 'react-icons/gi';
import Waste from '../wasteContent/Waste';
import {GiTreeBranch} from 'react-icons/gi';
import {connect} from 'react-redux';

const Map = (props) => {
    const [viewport, setViewport] = useState(
        {width: '70%', height: '80%', latitude: 27.508042999999997, longitude: 90.51571369999999, zoom: 8}
    );
    const [showPopUp, setShowPopUp] = useState({});
    const [locationInfo, setLocationInfo] = useState([]);
    const [info, setInfo] = useState(null);
    const showAddMarkerPopUp = e => {
        const [longitude, latitude] = e.lngLat;
        setInfo({latitude, longitude})
    }

    const { location } = props;
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
                                    latitude={locate.lat}
                                    longitude={locate.lng}
                                    offsetLeft={-20}
                                    offsetTop={-10}>
                                    <GoTrashcan onClick={() => setShowPopUp({
                                        // ...showPopUp,
                                        [locate.id]: true
                                    })} className={styles.markerPic} />

                             </Marker>

                                {
                                showPopUp[locate.id] ? (
                                    <Popup
                                        latitude={locate.lat}
                                        longitude={locate.lng}
                                        closeButton={true}
                                        closeOnClick={false}
                                        onClose={() => setShowPopUp({})}
                                        anchor="top"
                                        dynamicPosition={true}>
                                        <div className={styles.popUp}>Hello, World</div>
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
    return {location: state.map.report}
}
export default connect(mapStateToProps)(Map);