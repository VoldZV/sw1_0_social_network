import React from 'react';
import {ActionType, DialogsPageType} from "./state";

const reducerDialogs = (state: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case 'CHANGE-MESSAGE-TEXT':
            state.textAriaMessageValue = action.messageText
            return state
        case 'ADD-MESSAGE-TEXT':
            state.messagesData.push({id: '7', message: state.textAriaMessageValue})
            state.textAriaMessageValue = ''
            return state
        default:
            return state
    }
};

export default reducerDialogs;