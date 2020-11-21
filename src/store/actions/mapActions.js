export const createReport = (reportInfo) => {
    return (dispatch, getState, {getFirestore}) => {
            //make an async call.
            const firestore = getFirestore();
            firestore.collection('reportedInfo').add({
                ...reportInfo,
                userId: 123,
                reporterName: "Jigme",
                createdAt: new Date()
            }).then(()=>{
                dispatch({type: "CREATED_REPORT_INFO", reportInfo});
            }).catch((err)=>{
                dispatch({type: "CREATE_REPORT_ERROR", err});
            })
            
    }
}