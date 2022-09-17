import React from 'react';
import {ActionType} from "./store-redux";

export type UsersPageType = {
    users: Array<UserType>
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
    users: [

    ]
}

export const reducerUsers = (state: UsersPageType = initialUsersPageState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)}
        case 'SET_USERS':
            return {...state, users: [...state.users, ...action.users]}
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

export const followAC = (id: number): followActionType => ({
    type: 'FOLLOW',
    id
})
export const unfollowAC = (id: number): unfollowActionType => ({
    type: 'UNFOLLOW',
    id
})

export const setUsersAC = (users: Array<UserType>): setUsersActionType => ({
    type: 'SET_USERS',
    users
})