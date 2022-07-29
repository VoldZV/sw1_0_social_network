import React from "react";
import CrPost from './CreatePost.module.css'

export const CreatePost = () => {
    return (
        <div>
            <form action="#" className={CrPost.form}>
                <input type="text"/>
                <button className={CrPost.buttons}>ОПУБЛИКОВАТЬ</button>
                <button className={CrPost.buttons}>ОЧИСТИТЬ ФОРМУ</button>
            </form>

        </div>
    )
}