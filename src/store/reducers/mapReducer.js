const initState = {
   
}

const mapReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATED_REPORT_INFO': 
            return state;

        case 'CREATE_REPORT_ERROR':
           
            return state;
        
        default:
            return state;
    }
    
}


export default mapReducer;