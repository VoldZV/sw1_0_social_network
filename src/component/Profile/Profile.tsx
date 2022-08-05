import React from "react";
import p from './Profile.module.css'
import {Posts, PostType} from "./Posts/Posts";
import {CreatePost} from "./Posts/CreatePost/CreatePost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


type ProfileType = {
    postsData: Array<PostType>
}

export const Profile = (props: ProfileType) => {




    return (
        <div className={p.appContent}>
            <ProfileInfo/>
            <CreatePost/>
            <Posts posts={props.postsData}/>
        </div>
    )
}