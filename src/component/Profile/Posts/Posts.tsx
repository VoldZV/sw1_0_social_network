import React from "react";
import p from './Posts.module.css'
import {Post} from "./Post/Post";


export const Posts = () => {
    return (
        <div className={p.posts}>
            <h3>Опубликованные посты</h3>
            <Post message="Hello, I'm here" likes={3}/>
            <Post message="Oh, very glad to see you" likes={2}/>
            <Post message="Hi, my name is Frank" likes={11}/>
        </div>
    )
}