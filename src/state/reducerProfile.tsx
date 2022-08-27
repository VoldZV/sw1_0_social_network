import React from 'react';
import {ActionType, ProfilePageType} from "./state";

const reducerProfile = (state: ProfilePageType, action: ActionType) => {
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

export default reducerProfile;