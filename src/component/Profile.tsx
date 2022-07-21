import React from "react";
import p from './Profile.module.css'


export const Profile = () => {
    return (
        <div className={p.appContent}>
            <div><img src="https://img1.goodfon.ru/original/3200x1200/8/13/vancouver-british-columbia-1284.jpg" alt="photo"/></div>
            <div>
                AvatarIMG + Description
            </div>
            <div>
                <form action="">
                    Форма ввода сообщения
                </form>
            </div>
            <div>
                Опубликованные посты
                <div className={p.item}>post 1</div>
                <div className={p.item}>post 2</div>
                <div className={p.item}>post 3</div>
            </div>
        </div>
    )
}