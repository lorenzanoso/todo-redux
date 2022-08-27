export const addTodo = (newTodo) => {
    return (dispatch) => {
        dispatch({
            type: "ADD_TODO",
            payload: newTodo
        })
    }
}

export const removeTodo = (id) => {
    return (dispatch) => {
        dispatch({
            type: "REMOVE_TODO",
            payload: id
        })
    }
}