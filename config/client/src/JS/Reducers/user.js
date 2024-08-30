
const {LOAD_USER , SUCC_USER, LOGOUT_USER} = require("../ActionTypes/user")
const initialState = {
    user: {} ,
    loadUser : false ,
    errors:  [] ,
    isAuth : false ,
}
const userReducer = (state = initialState , {type , payload}) => {
    switch (type) {
        case LOAD_USER: 
        return {...state , loadUser: true}
        case SUCC_USER:
            return {...state , loadUser: false , user: payload.user , isAuth: true}
        case LOGOUT_USER:
            return {user: {} , loadUser: false , error: [] , isAuth: false}
        default:
     return state
    }
}
export default userReducer