import React from 'react';
import pr from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div><img src="https://img1.goodfon.ru/original/3200x1200/8/13/vancouver-british-columbia-1284.jpg"
                      alt="photo"/>
            </div>
            <div className={pr.avaDescr}>
                AvatarIMG + Description
            </div>
        </div>
)
    ;
};

export default ProfileInfo;