import axios from "axios";
import {authAPI, profileAPI, usersAPI} from "../api/api";
import {log} from "util";
import {AppStateType, store} from "./store-redux";
import {Dispatch, MiddlewareAPI} from "redux";
import {ThunkAction, ThunkDispatch} from "redux-thunk/es/types";
import {stopSubmit} from "redux-form";

export type initialAuthStateType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
    avatar: null | string
    captcha: boolean
    captchaSrc: string
}

const initialAuthState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    avatar: null,
    captcha: false,
    captchaSrc: ''
}

type AuthActionsType = ReturnType<typeof setAuthUserData> | ReturnType<typeof setLogAva> | ReturnType<typeof logOutAC>
    | ReturnType<typeof changeCaptcha> | ReturnType<typeof setCaptchaMessage>

export const reducerAuth = (state: initialAuthStateType = initialAuthState, action: AuthActionsType): initialAuthStateType => {
    switch (action.type) {
        case 'SET-CAPTCHA-MESSAGE':
            return {
                ...state,
                captchaSrc: action.captchaSrc
            }
        case 'CHANGE-CAPTCHA':
            return {
                ...state,
                captcha: action.captcha
            }
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case 'LOG-OUT':
            return {
                userId: null,
                email: null,
                login: null,
                isAuth: false,
                avatar: null,
                captcha: false,
                captchaSrc: ''
            }
        case 'SET-LOG-AVA':
            return {
                ...state,
                avatar: action.avaString
            }
        default:
            return state
    }
};

export const setAuthUserData = (userId: string, email: string, login: string) => ({
    type: 'SET-USER-DATA',
    data: {
        userId,
        email,
        login
    }
} as const)

export const setLogAva = (avaString: string) => ({
    type: 'SET-LOG-AVA',
    avaString
} as const)

export const logOutAC = () => ({
    type: 'LOG-OUT',
} as const)

export const changeCaptcha = (captcha: boolean) => ({
    type: 'CHANGE-CAPTCHA',
    captcha
} as const)

export const setCaptchaMessage = (str: string) => ({
    type: 'SET-CAPTCHA-MESSAGE',
    captchaSrc: str
} as const)


// thunk creator

export const authUser = () => {
    return (dispatch: Dispatch<AuthActionsType>) => {
        authAPI.authUser()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login))
                    return id
                } else {
                    throw new Error('Need auth !!!!')
                }
            })
            .then(id => {
                return profileAPI.setUserProfile(id)
            })
            .then(response => {
                dispatch(setLogAva(response.photos.small))
            })
            .catch(err => console.log('In header', err))
    }
}

export const loginUser = (login: string, password: string, remember_me: boolean = false, captcha: string): ThunkAction<void, AppStateType, unknown, AuthActionsType> => {
    return (dispatch) => {
        authAPI.login(login, password, remember_me, captcha)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(authUser())
                    dispatch(changeCaptcha(false))
                    setCaptchaMessage('')
                }
                if (res.data.resultCode === 10) {
                    dispatch(changeCaptcha(true))
                    return authAPI.security()
                }
                if (res.data.resultCode === 1) {
                    debugger
                    const errorMessage = res.data.messages.length > 0 ? res.data.messages[0] : 'Some error'
                    dispatch(stopSubmit('login', {_error: errorMessage}))
                }
            })
            .then(res => {
                if(res?.data.url) {
                    dispatch(setCaptchaMessage(res.data.url))
                }
            })
            .catch(err => console.log(err))
    }
}

export const logOut = (): ThunkAction<void, AppStateType, unknown, AuthActionsType> => {
    return (dispatch) => {
        authAPI.logout()
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(logOutAC())
                }
            })
            .catch(err => console.log(err))
    }
}



