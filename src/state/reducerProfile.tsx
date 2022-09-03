import React from 'react';
import {ActionType, addPostTextActionType, ChangePostTextActionType, PostType} from "./store-redux";

type ProfilePageType = {
    postsData: Array<PostType>
    textAriaPostValue: string
}



const initialProfileState: ProfilePageType = {
    postsData: [
        {id: '1', message: "Hello, I\'m here", likesCount: 103},
        {id: '2', message: 'Oh, very glad to see you', likesCount: 2},
        {id: '3', message: 'Hi, my name is Frank', likesCount: 11},
    ],
        textAriaPostValue: ''
}


export const reducerProfile = (state:ProfilePageType = initialProfileState, action: ActionType) : ProfilePageType => {
    switch (action.type) {
        case 'CHANGE-POST-TEXT':
            state.textAriaPostValue = action.postText
            return state
        case  'ADD-POST-TEXT':
            state.postsData.push({
                id: '4',
                message: state.textAriaPostValue,
                likesCount: 0
            })
            state.textAriaPostValue = ''
            return state
        default:
            return state
    }
};

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