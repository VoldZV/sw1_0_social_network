import React from 'react';
import {ActionType} from "./store-redux";

export type UsersPageType = {
    users: Array<UserType>
    totalCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
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
    // location: {
    //     city: string
    //     town: string
    // }
}

const initialUsersPageState: UsersPageType = {
    users: [],
    totalCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false
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