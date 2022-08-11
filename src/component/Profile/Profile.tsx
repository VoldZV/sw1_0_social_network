import React from "react";
import p from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {CreatePost} from "./Posts/CreatePost/CreatePost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType, profilePageType} from "../../state/state";


type ProfileType = {
    profilePage: profilePageType
    addPost: (postText: string)=>void
}

export const Profile = (props: ProfileType) => {

    return (
        <div className={p.appContent}>
            <ProfileInfo/>
            <CreatePost addPost={props.addPost}/>
            <Posts posts={props.profilePage.postsData}/>
        </div>
    )
}