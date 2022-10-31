import React from 'react';
import {ActionType, PostType} from "./store-redux";

export type ProfilePageType = {
    postsData: Array<PostType>
    textAriaPostValue: string
    profile: ProfileType | null
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
    profile: null
}


export const reducerProfile = (state:ProfilePageType = initialProfileState, action: ActionType) : ProfilePageType => {
    switch (action.type) {
        case 'CHANGE-POST-TEXT':
            return {...state, textAriaPostValue: action.postText }
        case 'SET-USER-PROFILE':
            return {...state, profile: action.profile }
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
// пока оставил 2 варианта типизации функций взаимосвязанное с типом action - возвращаемое значение как константа
// тогда можно не указывать тип и непосредственно указанный тип возвращаемого значения
export const addPostActionCreator = (postText: string): addPostTextActionType => ({
    type: 'ADD-POST-TEXT',
    postText: postText
})
export const changePostActionCreator = (postText: string) : ChangePostTextActionType => {
    return {
        type: 'CHANGE-POST-TEXT',
        postText: postText
    }
}

export const setUserProfileActionCreator = (profile: ProfileType) : SetUserProfileActionActionType => {
    return {
        type: 'SET-USER-PROFILE',
        profile
    }
}