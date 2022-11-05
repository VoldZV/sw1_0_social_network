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

type AuthActionsType = ReturnType<typeof setAuthUserData> | ReturnType<typeof setLogAva> | ReturnType<typeof logOut>