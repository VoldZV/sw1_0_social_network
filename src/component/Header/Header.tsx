import React, {useEffect, useState} from "react";
import h from './Header.module.css'
import {HeaderPropsType} from "./HeaderContainer";
import {NavLink, Redirect} from "react-router-dom";



export const Header = (props: HeaderPropsType) => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

        return (
        <header className={h.appHeader}>
            <img className={h.headerLogo}
                src="https://avatars.mds.yandex.net/i?id=5bb11cfb9051feb65e095d971197f050-5288402-images-thumbs&n=13"
                 alt="logo"/>
            <div
                className={h.clock}>{date.toLocaleTimeString()}
            </div>
            <div className={h.loginBlock}>

                {!props.auth.isAuth ? <NavLink to={'./login'}>Login</NavLink>
                    : <div>{props.auth.login}
                        <img className={h.loginAvatar} src={props.auth.avatar? props.auth.avatar: 'https://st4.depositphotos.com/14846838/22882/v/450/depositphotos_228825094-stock-illustration-bearded-man-colorful-icon-design.jpg' } alt=""/>
                        <button onClick={() => props.logOut()}>out</button>
                    </div>}
            </div>
        </header>
    )
}