import React from "react";
import n from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={n.appNav}>
            <div><a className={n.item} href="src/component/Navbar/Navbar#">Profile</a></div>
            <div><a  className={n.item} href='src/component/Navbar/Navbar#'>Messages</a></div>
            <div><a className={n.item} href='src/component/Navbar/Navbar#'>News</a></div>
            <div><a className={n.item} href='src/component/Navbar/Navbar#'>Music</a></div>
            <div><a className={n.item} href='src/component/Navbar/Navbar#'>Settings</a></div>
        </nav>
    )
}