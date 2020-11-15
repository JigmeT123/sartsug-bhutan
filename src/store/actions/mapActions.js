export const createReport = (reportInfo) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
            //make an async call.
            
            dispatch({type: "CREATED_REPORT_INFO", reportInfo});
    }
}