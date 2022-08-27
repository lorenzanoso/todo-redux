export const setUpdateTodo = (todo) => {
    return (dispatch) => {
        dispatch({
            type: "SETUP_UPDATE_TODO",
            payload: todo
        })
    }
}

export const saveUpdateTodo = (updateTodo) => {
    return (dispatch) => {
        dispatch({
            type: "SAVE_UPDATE_TODO",
            payload: updateTodo
        })
    }
}
