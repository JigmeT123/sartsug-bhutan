import {useState, useEffect} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import styles from './map.module.css';
import {GoTrashcan} from 'react-icons/go';

const Map = () => {
    const [viewport, setViewport] = useState(
        {width: '100%', height: '100%', latitude: 27.508042999999997, longitude: 90.51571369999999, zoom: 8}
    );

    const [showPopUp, setShowPopUp] = useState(false);
    const [info, setInfo] = useState(null);
    const showAddMarkerPopUp = e => {
        const[longitude, latitude] = e.lngLat;
        setInfo({latitude, longitude})
    }
    return (
        <div className={styles.map}>
            <ReactMapGL className={styles.map} {...viewport} onDblClick={showAddMarkerPopUp}
                // mapStyle="mapbox://styles/mapbox/streets-v11"
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
                            closeOnClick={true}
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
                                true
                            }
                            onClose = {
                                () => setInfo(null)
                            }
                            anchor = "top" dynamicPosition = {
                                true
                            } > <div className={styles.popUp}>Add New</div>
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
        </div>

    );
}

export default Map;