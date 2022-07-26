import React from "react";
import n from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={n.appNav}>
            <div><a className={n.item} href="/profile">Profile</a></div>
            <div><a className={n.item} href='/dialogs'>Messages</a></div>
            <div><a className={n.item} href='/news'>News</a></div>
            <div><a className={n.item} href='/music'>Music</a></div>
            <div><a className={n.item} href='/settings'>Settings</a></div>
        </nav>
    )
}