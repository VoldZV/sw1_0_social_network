import React from "react";
import p from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {CreatePost} from "./Posts/CreatePost/CreatePost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../state/state";


type ProfileType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionType) => void
    // addPost: (postText: string)=>void
    // setTextAriaPostValue: (value: string) => void
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={p.appContent}>
            <ProfileInfo/>
            <CreatePost dispatch={props.dispatch}
                        textAriaPostValue={props.profilePage.textAriaPostValue}
            />
            <Posts posts={props.profilePage.postsData}/>
        </div>
    )
}