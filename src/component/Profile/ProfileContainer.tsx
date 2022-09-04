import React from "react";
import {ActionType, ProfilePageType} from "../../state/store-redux";
import {Profile} from "./Profile";
import {addPostActionCreator, changePostActionCreator} from "../../state/reducerProfile";


type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
}

export const ProfileContainer = (props: ProfileType) => {

    const addPost = () => {
        const actionPost = addPostActionCreator(props.profilePage.textAriaPostValue)
        props.dispatch(actionPost)
    }

    const onChangeTextAria = (posttext: string) => {
        const action = changePostActionCreator(posttext)
        props.dispatch(action)
    }

    return (
        <Profile
            profilePage={props.profilePage}
            addPost={addPost}
            onChangeTextAria={onChangeTextAria}
        />
    )
}