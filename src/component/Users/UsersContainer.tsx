import React from "react";
import {followAC, setUsersAC, unfollowAC, UsersPageType, UserType} from "../../state/reducerUsers";
import {AppStateType} from "../../state/store-redux";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {Users} from "./Users";


type mapStateToPropsType = {
    usersPage: UsersPageType
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType) : mapStateToPropsType => {
    return {
        usersPage: state.usersPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
    }
}


export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)