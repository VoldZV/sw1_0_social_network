import React from 'react';
import nav from '../Navbar.module.css'


export const Friends = () => {
    return (
        <div className={nav.friends}>
            <div className={nav.friend}><img
                src="https://avatars.mds.yandex.net/i?id=4ea1015022b2bffaeb6a1abd5b71a48c-4935684-images-thumbs&n=13"
                alt="bro"/>
                <div>My Friend</div>
            </div>
        </div>
    );
};
