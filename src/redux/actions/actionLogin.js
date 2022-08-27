export const loginUser = (activeUserDetails) =>{
    return (dispatch) => {
        dispatch({
            type: 'LOGIN_USER',
            payload: activeUserDetails
        })
    }
}

export const logoutUser = (activeUserDetails) =>{
    return (dispatch) => {
        dispatch({
            type: 'LOGOUT_USER',
        })
    }
}