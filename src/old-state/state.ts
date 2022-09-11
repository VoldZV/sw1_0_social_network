//Dialogs - component

// Типизация state

// Общая для state

// import {rerenderEntireTree} from "./index";


import {addPostTextActionType, ChangePostTextActionType, reducerProfile} from "../state/reducerProfile";
import {reducerDialogs} from "../state/reducerDialogs";
import {reducerSideBar} from "../state/reducerSideBar";

const addMessageActionCreator = (messageText: string): AddMessageTextActionType => ({
    type: 'ADD-MESSAGE-TEXT',
    messageText: messageText
})
const changeMessageActionCreator = (messageText: string): ChangeMessageTextActionType => ({
    type: 'CHANGE-MESSAGE-TEXT',
    messageText: messageText
})

const addPostActionCreator = (postText: string): addPostTextActionType => ({
    type: 'ADD-POST-TEXT',
    postText: postText
})
const changePostActionCreator = (postText: string) : ChangePostTextActionType => {
    return {
        type: 'CHANGE-POST-TEXT',
        postText: postText
    }
}


export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sideBar: SideBarType
}


// Страница Dialogs

export type DialogsPageType = {
    dialogsData: Array<DialogDataType>
    messagesData: Array<MessageType>
    textAriaMessageValue: string
}

export type DialogDataType = {
    id: string
    name: string
    avatar: string
}

export type MessageType = {
    message: string
    id: string
}

// Страница Profile

export type ProfilePageType = {
    postsData: Array<PostType>
    textAriaPostValue: string
}

export type PostType = {
    id: string
    message: string
    likesCount: number
}

//Sidebar

export type SideBarType = {
    friends: []
}

export type StoreType = {
    _state: StateType
    // addPost: (postText: string) => void
    // addMessage: (messageText: string) => void
    // setTextAriaPostValue: (value: string) => void
    // setTextMessageValue: (value: string) => void
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
}

export type ActionType =
    ReturnType<typeof changePostActionCreator>
    | ReturnType<typeof addPostActionCreator>
    | ChangeMessageTextActionType
    | AddMessageTextActionType

// можно не прописывать отдельно типы для action когда протипизировано возвращаемое значение функции как константное
// type ChangePostTextActionType = ReturnType<typeof changePostActionCreator>
// type AddPostTextActionType = ReturnType<typeof addPostActionCreator>



type ChangeMessageTextActionType = {
    type: 'CHANGE-MESSAGE-TEXT'
    messageText: string
}
type AddMessageTextActionType = {
    type: 'ADD-MESSAGE-TEXT'
    messageText: string
}

export const store: StoreType = {
    // добавим state
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            postsData: [
                {id: '1', message: "Hello, I\'m here", likesCount: 103},
                {id: '2', message: 'Oh, very glad to see you', likesCount: 2},
                {id: '3', message: 'Hi, my name is Frank', likesCount: 11},
            ],
            textAriaPostValue: ''
        },
        sideBar: {
            friends: []
        }
    },
    // функция для перерисовки компоненты
    _callSubscriber(state: StateType) {
    },

    // вернуть state
    getState() {
        return this._state
    },
    // создаем функцию для экспорта в index.tsx, чтобы там она была вызвана
    // и приняла callback rerenderEntireTree - т.о. не будет цикл. зависимости
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer // наблюдатель
    },

    //Добавление сообщений и постов (до диспатч и экшн креэйтор)
    // addPost(postText: string) {
    //     this._state.profilePage.postsData.push({id: '4', message: postText, likesCount: 0})
    //     this._state.profilePage.textAriaPostValue = ''
    //     this._callSubscriber(this._state)
    // },
    // addMessage(messageText: string) {
    //     this._state.dialogsPage.messagesData.push({id: '7', message: messageText})
    //     this._state.dialogsPage.textAriaMessageValue = ''
    //     this._callSubscriber(this._state)
    // },
    // // state для текст ариа в постах
    // setTextAriaPostValue(value: string) {
    //     this._state.profilePage.textAriaPostValue = value
    //     this._callSubscriber(this._state)
    // },
    // // state для текст ариа в сообщениях
    // setTextMessageValue(value: string) {
    //     this._state.dialogsPage.textAriaMessageValue = value
    //     this._callSubscriber(this._state)
    // },

    // объединяем все методы в один и вызов нужного метода будет происходить исходя из action, переданного
    // как параметр в dispatch
    dispatch(action: ActionType) {
        this._state.profilePage = reducerProfile(this._state.profilePage, action)
        this._state.dialogsPage = reducerDialogs(this._state.dialogsPage, action)
        this._state.sideBar = reducerSideBar(this._state.sideBar, action)
        this._callSubscriber(this._state)
    }
}

