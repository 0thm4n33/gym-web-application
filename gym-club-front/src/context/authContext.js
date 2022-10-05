import {createContext} from "react"

const authContext = createContext({
    isAuth: '',
    setAuth: (auth) =>{}
});

export default authContext;