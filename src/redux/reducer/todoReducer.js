const initialState = [];

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
            case 'ADD_TODO':
                return [action.payload, ...state]
            case 'REMOVE_TODO':
                return [...state].filter((todo) => todo.id !== action.payload);    
            case 'SAVE_UPDATE_TODO':
                return state = [...state].map((item) => item.id === action.payload.id ? action.payload : item)
            default:
                return state;
    }
}

export default todoReducer;