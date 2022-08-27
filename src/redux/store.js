import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './reducer/todoReducer';
import updateReducer from './reducer/updateReducer'
import registerReducer from "./reducer/registerReducer";
import loginReducer from "./reducer/loginReducer";


export const store = configureStore({
    reducer: {
        userList: registerReducer,
        activeUser: loginReducer,
        todos: todoReducer,
        update: updateReducer

    },
});