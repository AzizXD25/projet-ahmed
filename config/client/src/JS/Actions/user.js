import { FAIL_USER , LOAD_USER , LOGOUT_USER, SUCC_USER } from "../ActionTypes/user";
import axios from "axios"

export const register = (newUser) => async (dispatch) => {
    dispatch ({type: LOAD_USER})
    try {
        let result = await axios.post("/api/user/register" , newUser)
        dispatch({type: SUCC_USER , payload: result.data})
    } catch (error){
        dispatch({type: FAIL_USER , payload: error.response.data.error})
    }
}

export const login = (user) => async (dispatch) => {
    dispatch ({type: LOAD_USER})
try {
    let result = await axios.post("/api/user/login" , user)
    dispatch ({type: SUCC_USER , payload: result.data})
} catch (error){
    dispatch({type: FAIL_USER , payload: error.response.data.error})
}
}

export const logout = () => async (dispatch) => {
    dispatch({type: LOGOUT_USER})
}

