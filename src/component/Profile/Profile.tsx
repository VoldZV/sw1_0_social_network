import React from "react";
import p from './Profile.module.css'
import {Posts} from "./Posts/Posts";
import {CreatePost} from "./Posts/CreatePost/CreatePost";


export const Profile = () => {
    return (
        <div className={p.appContent}>
            <div><img src="https://img1.goodfon.ru/original/3200x1200/8/13/vancouver-british-columbia-1284.jpg" alt="photo"/></div>
            <div>
                AvatarIMG + Description
            </div>
            <CreatePost />
            <Posts />
        </div>
    )
}