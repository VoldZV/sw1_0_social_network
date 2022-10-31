import {
    addPostTextActionType,
    ChangePostTextActionType, ProfilePageType,
    reducerProfile,
    SetUserProfileActionActionType
} from "./reducerProfile";
import {AddMessageTextActionType, ChangeMessageTextActionType, reducerDialogs} from "./reducerDialogs";
import {reducerSideBar} from "./reducerSideBar";
import {combineReducers, legacy_createStore, Store} from "redux";
import {
    followActionType,
    reducerUsers,
    setCurrentPageActionType, setTotalUsersCountActionType,
    setUsersActionType, toggleFethingActionType,
    unfollowActionType,
    UsersPageType
} from "./reducerUsers";


const reducers = combineReducers({
    profilePage: reducerProfile,
    dialogsPage: reducerDialogs,
    usersPage: reducerUsers,
    sideBar: reducerSideBar
})


// Можно создать типизацию для общего стейта приложения следующим образом
// export type AppStateType = ReturnType<typeof reducers> и использовать ее вместо
// StateType в ProfileContainer и DialogsContainer
// для примера Я использовал типизацию таким образом в ProfileContainer
// и обычным образом, т.е. StateType в DialogsContainer
export type AppStateType = ReturnType<typeof reducers>

export const store: Store<ReturnType<typeof reducers>> = legacy_createStore(reducers)

// @ts-ignore
window.store = store




// Типизация, объединяющая все страницы
export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    usersPage: UsersPageType
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

// export type ProfilePageType = {
//     postsData: Array<PostType>
//     textAriaPostValue: string
// }

export type PostType = {
    id: string
    message: string
    likesCount: number
}

//Sidebar

export type SideBarType = {
    friends: []
}


// Вместо этого типа в mapStateToProps и mapDispatchToProps использовали
// типизацию Dispatch (импортировали этот тип из библиотеки redux)
// Dicpatch - типизация ф-ции dispatch из store, которая принимает все типы action

export type ActionType =
    addPostTextActionType
    | ChangePostTextActionType
    | ChangeMessageTextActionType
    | AddMessageTextActionType
    | followActionType
    | unfollowActionType
    | setUsersActionType
    | setCurrentPageActionType
    | setTotalUsersCountActionType
    | toggleFethingActionType
    | SetUserProfileActionActionType



