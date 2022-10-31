import React, {useEffect, useState} from "react";
import h from './Header.module.css'


export const Header = () => {

    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

        return (
        <header className={h.appHeader}>
            <img src="https://avatars.mds.yandex.net/i?id=5bb11cfb9051feb65e095d971197f050-5288402-images-thumbs&n=13"
                 alt="logo"/>
            <div
                className={h.clock}>{date.toLocaleTimeString()}</div>
        </header>
    )
}