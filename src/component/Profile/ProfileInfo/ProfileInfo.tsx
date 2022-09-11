import React from 'react';
import pr from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div><img src="https://co10.nevseoboi.com.ua/posts/2010-01/1262606847_chicago-illinois.jpg"
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