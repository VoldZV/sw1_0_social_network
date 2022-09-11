import React from 'react';
import {ActionType, DialogDataType, MessageType} from "./store-redux";

type DialogsPageType = {
    dialogsData: Array<DialogDataType>
    messagesData: Array<MessageType>
    textAriaMessageValue: string
}

const initialDialogsPageState: DialogsPageType = {
    dialogsData: [
        {id: '1', name: 'Dima', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
        {
            id: '2',
            name: 'Ilya',
            avatar: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D1%81-%D0%BA%D0%BE%D1%82%D0%B0%D0%BC%D0%B8-%D0%B2-%D0%92%D0%9A-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BE%D0%BA-30.jpg'
        },
        {id: '3', name: 'Pasha', avatar: 'https://uprostim.com/wp-content/uploads/2021/03/image086-77.jpg'},
        {
            id: '4',
            name: 'Danil',
            avatar: 'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg'
        },
        {
            id: '5',
            name: 'Brother',
            avatar: 'https://www.nashe.ru/uploads/photos/1/2021/05/%D0%BA%D0%B8%D0%BD%D0%BE/chto-sergej-bodrov-realno-dumal-o-ssha-slova-skazannye-posle-filma-brat-2.jpg'
        },
        {
            id: '6',
            name: 'Sister',
            avatar: 'https://sun9-28.userapi.com/c850232/v850232151/2484f/Cv6C0275tQA.jpg'
        },
    ],
    messagesData: [
        {id: '1', message: 'Hello'},
        {id: '2', message: 'I`m good'},
        {id: '3', message: 'Hi man'},
        {id: '4', message: 'How are you'},
        {id: '5', message: 'That`s good'},
        {id: '6', message: 'Very well!'},
    ],
    textAriaMessageValue: ''
}

export const reducerDialogs = (state:DialogsPageType = initialDialogsPageState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case 'CHANGE-MESSAGE-TEXT':
            return {...state, textAriaMessageValue: action.messageText}
        case 'ADD-MESSAGE-TEXT':
            return {
                ...state,
                messagesData: [...state.messagesData, {
                    id: '7',
                    message: state.textAriaMessageValue
                }],
                textAriaMessageValue: ''
            }
        default:
            return state
    }
};

export type ChangeMessageTextActionType = {
    type: 'CHANGE-MESSAGE-TEXT'
    messageText: string
}
export type AddMessageTextActionType = {
    type: 'ADD-MESSAGE-TEXT'
    messageText: string
}
export const addMessageActionCreator = (messageText: string): AddMessageTextActionType => ({
    type: 'ADD-MESSAGE-TEXT',
    messageText: messageText
})
export const changeMessageActionCreator = (messageText: string): ChangeMessageTextActionType => ({
    type: 'CHANGE-MESSAGE-TEXT',
    messageText: messageText
})