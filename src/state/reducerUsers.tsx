import React from 'react';
import {ActionType, store} from "./store-redux";
import {usersAPI} from "../api/api";

export type UsersPageType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    disabledUsers: Array<number>
}

export type UserType = {
    id: number
    name: string
    status: null
    uniqueUrlName: null
    photos: {
        small: null
        large: null
    }
    followed: boolean
}

const initialUsersPageState: UsersPageType = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    disabledUsers: []
}

export const reducerUsers = (state: UsersPageType = initialUsersPageState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)}
        case 'SET_USERS':
            return {...state, users: action.users}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalCount: action.totalCount}
        case 'TOGGLE_FETHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE_DISABLED_USER':
            return {...state,
                disabledUsers: action.isFollowing
                    ? [...state.disabledUsers, action.userId]
                    : state.disabledUsers.filter(id => id !== action.userId)
            }
        default:
            return state
    }
};

export type followActionType = {
    type: 'FOLLOW'
    id: number
}

export type unfollowActionType = {
    type: 'UNFOLLOW'
    id: number
}

export type setUsersActionType = {
    type: 'SET_USERS'
    users: Array<UserType>
}
export type setCurrentPageActionType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}

export type setTotalUsersCountActionType = {
    type: 'SET_TOTAL_USERS_COUNT'
    totalCount: number
}

export type toggleFethingActionType = {
    type: 'TOGGLE_FETHING'
    isFetching: boolean
}

export type toggleDisableUserType = {
    type: 'TOGGLE_DISABLED_USER',
    userId: number,
    isFollowing: boolean
}

export const toggleIsFetching = (isFetching: boolean): toggleFethingActionType => ({
    type: 'TOGGLE_FETHING',
    isFetching
})

export const follow = (id: number): followActionType => ({
    type: 'FOLLOW',
    id
})
export const unfollow = (id: number): unfollowActionType => ({
    type: 'UNFOLLOW',
    id
})

export const setUsers = (users: Array<UserType>): setUsersActionType => ({
    type: 'SET_USERS',
    users
})

export const setCurrentPage = (newCurrentPage: number): setCurrentPageActionType => ({
    type: 'SET_CURRENT_PAGE',
    currentPage: newCurrentPage
})

export const setTotalUsersCount = (totalCount: number): setTotalUsersCountActionType => ({
    type: 'SET_TOTAL_USERS_COUNT',
    totalCount
})

export const toggleDisableUser = (userId: number, isFollowing: boolean): toggleDisableUserType => ({
    type: 'TOGGLE_DISABLED_USER',
    userId,
    isFollowing
})



// thunks Creators
export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: typeof store.dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setTotalUsersCount(data.totalCount))
                dispatch(setUsers(data.items))
                dispatch(toggleIsFetching(false))
            })
            .catch(err => console.log('In Users DID MOUNT', err))
    }
}

export const unfollowUser = (userId: number) => {
    return (dispatch: typeof store.dispatch) => {
        dispatch(toggleDisableUser(userId, true))
        usersAPI.unfollowUser(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(unfollow(userId))
            }
            dispatch(toggleDisableUser(userId, false))
        })
            .catch(err => console.log('Try unfollowUser', err))
    }
}

export const followUser = (userId: number) => {
    return (dispatch: typeof store.dispatch) => {
        dispatch(toggleDisableUser(userId, true))
        usersAPI.followUser(userId).then(data => {
            if (data.resultCode == 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleDisableUser(userId, false))
        })
            .catch(err => console.log('Try followUser', err))
    }
}