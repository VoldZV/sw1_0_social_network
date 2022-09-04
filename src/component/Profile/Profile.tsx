import React from "react";
import p from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {CreatePost} from "./Posts/CreatePost/CreatePost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionType, ProfilePageType} from "../../state/store-redux";


type ProfileType = {
    profilePage: ProfilePageType
    addPost: () => void
    onChangeTextAria: (posttext: string) => void
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={p.appContent}>
            <ProfileInfo/>
            <CreatePost addPost={props.addPost}
                        textAriaPostValue={props.profilePage.textAriaPostValue}
                        onChangeTextAria={props.onChangeTextAria}
            />
            <Posts posts={props.profilePage.postsData}/>
        </div>
    )
}