import React from 'react';
import pr from './ProfileInfo.module.css'
import {ProfileStatus} from "./ProfileStatus";

type ProfileInfoPropsType = {
    avatar: string | undefined
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    return (
        <div>
            <div>
                <img src="https://co10.nevseoboi.com.ua/posts/2010-01/1262606847_chicago-illinois.jpg"
                     alt="photo"/>
                <ProfileStatus/>
            </div>
            <div className={pr.avaDescr}>
                <img className={pr.avaUserProfile} src={props.avatar}
                     alt="avatar"/> Description
            </div>
        </div>
    )
        ;
};

export default ProfileInfo;