import React from "react";
import n from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {Friends} from "./Friends/Friends";
import {SideBarType} from "../../state/store-redux";

type NavbarType = {
    sidebar: SideBarType
}

export const Navbar = (props: NavbarType) => {
    return (
        <nav className={n.appNav}>
            <div className={n.item}><NavLink  to="/profile" activeClassName={n.activeLink}>Profile</NavLink></div>
            <div className={n.item}><NavLink  to='/dialogs' activeClassName={n.activeLink}>Messages</NavLink></div>
            <div className={n.item}><NavLink  to='/users' activeClassName={n.activeLink}>Users</NavLink></div>
            <div className={n.item}><NavLink  to='/news' activeClassName={n.activeLink}>News</NavLink></div>
            <div className={n.item}><NavLink  to='/music' activeClassName={n.activeLink}>Music</NavLink></div>
            <div className={n.item}><NavLink  to='/settings' activeClassName={n.activeLink}>Settings</NavLink></div>

            <Friends/>
           {/* <div>
                <img src="https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg" alt=""/>
            </div>*/}
        </nav>
    )
}