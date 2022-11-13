import React from 'react';
import {Redirect} from "react-router-dom";
import {Profile} from "../component/Profile/Profile";
import {AppStateType} from "../state/store-redux";
import {connect} from "react-redux";

type mstpType = {
    isAuth: boolean
}

const mstp = (state: AppStateType): mstpType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T> (Component: React.ComponentType<T>) {
    const RedirectComponent = (props: mstpType) => {
        const {isAuth, ...restProps} = props
        if(!isAuth) return <Redirect to={'/login'}/>
        return (
            <Component {...restProps as T}/>
        )
    }
    return connect(mstp)(RedirectComponent)
};




