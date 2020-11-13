import {useState} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import styles from './map.module.css';
import {GoTrashcan} from 'react-icons/go';
import Form from '../Form/Form';
import {GiGlassCelebration} from 'react-icons/gi';

const Map = () => {
//     let southWest = latLng(26.7194029811, 88.8142484883);
//   let northEast = latLng(28.2964385035, 92.1037117859);
//   let bounds = latLngBounds(southWest, northEast);
    const [viewport, setViewport] = useState(
        {width: '70%', height: '80%', latitude: 27.508042999999997, longitude: 90.51571369999999, zoom: 8}
    );

    const [showPopUp, setShowPopUp] = useState(false);
    const [info, setInfo] = useState(null);
    const showAddMarkerPopUp = e => {
        const[longitude, latitude] = e.lngLat;
        setInfo({latitude, longitude})
    }
    return (
        <div className={styles.map}>
            <div className={styles.mapContentMain}>
            <ReactMapGL className={styles.map1} {...viewport} onDblClick={showAddMarkerPopUp}
                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} onViewportChange={nextViewport => setViewport(nextViewport)}>
                <Marker
                    //dont forget key
                    latitude={27.508042999999997} longitude={90.51571369999999} offsetLeft={-20} offsetTop={-10}>
                    <GoTrashcan onClick={() => setShowPopUp(true)} className={styles.markerPic}/>
                </Marker>

                {
                    showPopUp && <Popup
                            latitude={27.508042999999997}
                            longitude={90.51571369999999}
                            closeButton={true}
                            closeOnClick={false}
                            onClose={() => setShowPopUp(false)}
                            anchor="top"
                            dynamicPosition={true}>
                            <div className={styles.popUp}>Hello, World</div>
                        </Popup>
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
                                <Form />
                            </div>
                        </Popup>

                        <Marker 
                            latitude={info.latitude}
                            longitude={info.longitude}>
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
                        <li><span>Step 1: </span>Double click on the location where you want to report the waste.</li>
                        <li><span>Step 2: </span>Fill in the form - by providing a basic description of the place</li>
                        <li><span>Step 3: </span>select the level of severity</li>
                        <li><span>Step 4: </span>Take a picture and upload the image. (This will greatly help of wonderful volunteer)</li>
                        <li><span>Step 5: </span>Submit the form.</li>
                        
                    </ul>
                    <p className={styles.appreciation}>Thank you for keeping our society clean and being a part of the change. We need more people like you <GiGlassCelebration /></p>
                </div>
            </div>
            </div>
           
        </div>

    );
}

export default Map;