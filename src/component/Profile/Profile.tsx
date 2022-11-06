import React from "react";
import p from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {CreatePost} from "./Posts/CreatePost/CreatePost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePropsType} from "./ProfileContainerClass";


export const Profile = (props: ProfilePropsType) => {

    return (
        <div className={p.appContent}>
            <ProfileInfo avatar={props.profilePage.profile?.photos.large}/>
            <CreatePost addPost={props.addPost}
                        textAriaPostValue={props.profilePage.textAriaPostValue}
                        onChangeTextAria={props.changePost}
            />
            <Posts posts={props.profilePage.postsData}/>
        </div>
    )
}