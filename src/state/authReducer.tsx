import {store} from "./store-redux";
import axios from "axios";
import {authAPI, usersAPI} from "../api/api";

export type initialAuthStateType = {
    userId: null | string
    email: null | string
    login: null | string
    isAuth: boolean
    avatar: null | string
}

const initialAuthState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    avatar: null
}

type AuthActionsType = ReturnType<typeof setAuthUserData> | ReturnType<typeof setLogAva> | ReturnType<typeof logOut>

export const reducerAuth = (state: initialAuthStateType = initialAuthState, action: AuthActionsType): initialAuthStateType => {
    switch (action.type) {
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
                avatar: null
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

export const logOut = () => ({
    type: 'LOG-OUT',
} as const)


// thunk creator

export const authUser = () => {
    return (dispatch: typeof store.dispatch) => {
        authAPI.authUser()
        .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data
                    dispatch(setAuthUserData(id, email, login))
                    return id
                }
            })
            .then(id => {
                axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + id)
                    .then(response => {
                        dispatch(setLogAva(response.data.photos.small))
                    })
                    .catch(err => console.log('Header, set ava of auth account', err))
            })
            .catch(err => console.log('In header', err))

    }
}



