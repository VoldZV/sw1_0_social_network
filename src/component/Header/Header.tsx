import React from "react";
import h from './Header.module.css'


export const Header = () => {
    return (
        <header className={h.appHeader}>
            <img src="https://avatars.mds.yandex.net/i?id=5bb11cfb9051feb65e095d971197f050-5288402-images-thumbs&n=13" alt="logo"/>
        </header>
    )
}