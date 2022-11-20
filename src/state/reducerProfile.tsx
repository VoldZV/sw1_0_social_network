import React from 'react';
import {ActionType, PostType, store} from "./store-redux";
import axios from "axios";
import {profileAPI, usersAPI} from "../api/api";

export type ProfilePageType = {
    postsData: Array<PostType>
    textAriaPostValue: string
    profile: ProfileType | null
    status: string
}

export type ProfileType = {
    "aboutMe": string
    "contacts": ProfileContactType
    "lookingForAJob": boolean
    "lookingForAJobDescription": string,
    "fullName": string,
    "userId": number,
    "photos": {
        "small": string,
        "large": string
    }
}

type ProfileContactType = {
    "facebook": string,
    "website": string | null,
    "vk": string,
    "twitter": string,
    "instagram": string,
    "youtube": string | null,
    "github": string,
    "mainLink": string | null
}


const initialProfileState: ProfilePageType = {
    postsData: [
        {id: '1', message: "Hello, I\'m here", likesCount: 103},
        {id: '2', message: 'Oh, very glad to see you', likesCount: 2},
        {id: '3', message: 'Hi, my name is Frank', likesCount: 11},
    ],
    textAriaPostValue: '',
    profile: null,
    status: ''
}


export const reducerProfile = (state:ProfilePageType = initialProfileState, action: ActionType) : ProfilePageType => {
    switch (action.type) {
        case 'CHANGE-POST-TEXT':
            return {...state, textAriaPostValue: action.postText }
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile }
        case 'SET-STATUS':
            return {...state, status: action.status }
        case 'CHANGE-STATUS':
            return {...state, status: action.status }
        case  'ADD-POST-TEXT':
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: '4',
                    message: state.textAriaPostValue,
                    likesCount: 0
                }],
                textAriaPostValue: ''
            }
        default:
            return state
    }
};

export type addPostTextActionType = {
    type: 'ADD-POST-TEXT',
    postText: string
}
export type ChangePostTextActionType = {
    type: 'CHANGE-POST-TEXT'
    postText: string
}

export type SetUserProfileActionActionType = {
    type: 'SET-USER-PROFILE'
    profile: ProfileType
}
export type setStatusActionType = {
    type: 'SET-STATUS'
    status: string
}
export type changeStatusActionType = {
    type: 'CHANGE-STATUS'
    status: string
}
// пока оставил 2 варианта типизации функций взаимосвязанное с типом action - возвращаемое значение как константа
// тогда можно не указывать тип и непосредственно указанный тип возвращаемого значения
export const addPost = (postText: string): addPostTextActionType => ({
    type: 'ADD-POST-TEXT',
    postText: postText
})
export const changePost = (postText: string) : ChangePostTextActionType => {
    return {
        type: 'CHANGE-POST-TEXT',
        postText: postText
    }
}

export const setUserProfile = (profile: ProfileType) : SetUserProfileActionActionType => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    }
}

export const setStatusAC = (status: string) : setStatusActionType => {
    return {
        type: 'SET-STATUS',
        status
    }
}
export const changeStatusAC = (status: string) : changeStatusActionType => {
    return {
        type: 'CHANGE-STATUS',
        status
    }
}


//thunk creator
export const setUserProfileTH = (userId: string) => {
    return (dispatch: typeof store.dispatch) => {
        usersAPI.setUserProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
            .catch(err => console.log(`In Profile did mount ${userId}`, err))
    }
}



export const setStatus = (id: string) => {
    debugger
    return (dispatch: typeof store.dispatch) => {
        profileAPI.getStatus(id)
            .then(data => {
                debugger
                console.log('get Status is  ', data)
                dispatch(setStatusAC(data))
            })
            .catch(err => console.log(`Try change status, but error`, err))
    }
}

export const changeStatus = (status: string) => {
    return (dispatch: typeof store.dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                console.log('change Status is  ', data)
                if(data.resultCode === 0) dispatch(changeStatusAC(status))
            })
            .catch(err => console.log(`Try change status, but error`, err))
    }
}


