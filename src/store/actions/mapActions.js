export const createReport = (reportInfo) => {
    return (dispatch, getState) => {
            //make an async call.
            dispatch({type: "CREATED_REPORT_INFO", reportInfo});
    }
}