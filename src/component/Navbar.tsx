import React from "react";
import n from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={n.appNav}>
            <div><a className={n.item} href="#">Profile</a></div>
            <div><a  className={n.item} href='#'>Messages</a></div>
            <div><a className={n.item} href='#'>News</a></div>
            <div><a className={n.item} href='#'>Music</a></div>
            <div><a className={n.item} href='#'>Settings</a></div>
        </nav>
    )
}