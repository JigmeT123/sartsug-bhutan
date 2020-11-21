const initState = {
    authError: null,
}
const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR': 
        console.log("LOGIN ERROR");
        return {
            ...state,
            authError: 'Login Failed',
        };

        case 'LOGIN_SUCCESS':
            console.log("LOGIN SUCCESS");
            return {
                ...state,
                authError: null
            };
        
        default:
            return state;
    }
}


export default authReducer;