//Dialogs - component

// Типизация state

// Общая для state

// import {rerenderEntireTree} from "./index";

let rerenderEntireTree = () => {

}


export type stateType = {
    dialogsPage: dialogsPageType
    profilePage: profilePageType
    sideBar: sideBarType
}


// Страница Dialogs

export type dialogsPageType = {
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

export type profilePageType = {
    postsData: Array<PostType>
    textAriaPostValue: string
}

export type PostType = {
    id: string
    message: string
    likesCount: number
}

//Sidebar

export type sideBarType = {
    friends: []
}

// state

export const state: stateType = {
    dialogsPage: {
        dialogsData: [
            {id: '1', name: 'Dima', avatar: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'},
            {id: '2', name: 'Ilya', avatar: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%A1%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D1%83-%D1%81-%D0%BA%D0%BE%D1%82%D0%B0%D0%BC%D0%B8-%D0%B2-%D0%92%D0%9A-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BE%D0%BA-30.jpg'},
            {id: '3', name: 'Pasha',avatar: 'https://uprostim.com/wp-content/uploads/2021/03/image086-77.jpg'},
            {id: '4', name: 'Danil',avatar: 'https://placepic.ru/wp-content/uploads/2021/02/image_562610131056464036330.jpg'},
            {id: '5', name: 'Brother',avatar: 'https://www.nashe.ru/uploads/photos/1/2021/05/%D0%BA%D0%B8%D0%BD%D0%BE/chto-sergej-bodrov-realno-dumal-o-ssha-slova-skazannye-posle-filma-brat-2.jpg'},
            {id: '6', name: 'Sister',avatar: 'https://sun9-28.userapi.com/c850232/v850232151/2484f/Cv6C0275tQA.jpg'},
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
            {id: '3', message: 'Hi, my name is Frank',likesCount: 11},
        ],
        textAriaPostValue: ''
    },
    sideBar: {
        friends: []
    }
}

//Добавление сообщений и постов

export const addPost = (postText: string) => {
    state.profilePage.postsData.push({id: '4', message: postText,likesCount: 0})
    state.profilePage.textAriaPostValue = ''
    rerenderEntireTree()
}



export const addMessage = (messageText: string) => {
    state.dialogsPage.messagesData.push({id: '7', message: messageText})
    state.dialogsPage.textAriaMessageValue = ''
    rerenderEntireTree()
}

// state для текст ариа в постах



export const setTextAriaPostValue = (value: string) => {
    state.profilePage.textAriaPostValue = value
    rerenderEntireTree()
}


// state для текст ариа в сообщениях

export const setTextMessageValue = (value: string) => {
    state.dialogsPage.textAriaMessageValue = value
    rerenderEntireTree()
}

// создаем функцию для экспорта в index.tsx, чтобы там она была вызвана
// и приняла callback rerenderEntireTree - т.о. не будет цикл. зависимости

export const subscribe = (observer: ()=>void) => {
    rerenderEntireTree = observer // наблюдатель
}
