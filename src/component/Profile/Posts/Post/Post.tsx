import React from "react";
import p from './Post.module.css'

type PostType = {
    message: string,
    likes: number
}

export const Post: React.FC<PostType> = (props) => {
    return (
            <div className={p.item}>
                <img src="https://avatars.mds.yandex.net/i?id=c6934e09362b865b4a6d47ca390d2747-5476795-images-thumbs&n=13" alt=""/>
                {props.message}
                <div className={p.likes}>
                    Нравится <button>{props.likes}</button>
                </div>
            </div>
    )
}