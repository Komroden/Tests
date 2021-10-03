import {userApi} from "../../api/request/auth";


export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


export const createLoginUser = (user:string) => ({
    type: LOGIN_USER,
    payload: user,
})
export const createLogoutUser = () => ({
    type: LOGOUT_USER
})




export const initAuthAction = (dispatch:any) => {
    userApi.logout()
    userApi.initAuth((user:string) => {
        if (user) {
            dispatch(createLoginUser(user))
        }
        else {
            dispatch(createLogoutUser())
        }
    })
}