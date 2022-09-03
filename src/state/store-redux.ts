import {combineReducers, createStore} from "redux";
import {reducerProfile} from "./reducerProfile";
import {reducerDialogs} from "./reducerDialogs";
import {reducerSideBar} from "./reducerSideBar";


const reducers = combineReducers({
    profilePage: reducerProfile,
    dialogsPage: reducerDialogs,
    sideBar: reducerSideBar
})

export const store: StoreType = createStore(reducers)

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
    getState: () => StateType
    dispatch: (action: ActionType) => void
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



export type ActionType =
    addPostTextActionType
    | ChangePostTextActionType
    | ChangeMessageTextActionType
    | AddMessageTextActionType

// можно не прописывать отдельно типы для action когда протипизировано возвращаемое значение функции как константное
// type ChangePostTextActionType = ReturnType<typeof changePostActionCreator>
// type AddPostTextActionType = ReturnType<typeof addPostActionCreator>

export type addPostTextActionType = {
    type: 'ADD-POST-TEXT',
    postText: string
}

export type ChangePostTextActionType = {
    type: 'CHANGE-POST-TEXT'
    postText: string
}


export type ChangeMessageTextActionType = {
    type: 'CHANGE-MESSAGE-TEXT'
    messageText: string
}
export type AddMessageTextActionType = {
    type: 'ADD-MESSAGE-TEXT'
    messageText: string
}