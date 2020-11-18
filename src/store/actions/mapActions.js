export const createReport = (reportInfo) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
            //make an async call.
            const firestore = getFirestore();
            
            firestore.collections('reportedInfo').add({
                ...reportInfo
            })
            dispatch({type: "CREATED_REPORT_INFO", reportInfo});
    }
}