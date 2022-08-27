export const registerUser = (newUserDetails) => {
    return (dispatch) => {
        dispatch({
            type:'REGISTER_USER',
            payload: newUserDetails
        })
    }
}