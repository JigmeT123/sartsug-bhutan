import {useState} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import styles from './map.module.css';
import {GoTrashcan} from 'react-icons/go';
import Form from '../Form/Form';

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

            <div></div>
        </div>

    );
}

export default Map;