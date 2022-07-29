import React from "react";
import p from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {CreatePost} from "./Posts/CreatePost/CreatePost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


export const Profile = () => {
    return (
        <div className={p.appContent}>
            <ProfileInfo/>
            <CreatePost/>
            <Posts/>
        </div>
    )
}