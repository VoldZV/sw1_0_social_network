import React from "react";
import p from './Posts.module.css'
import {Post} from "./Post/Post";


export type PostsType = {
    posts: Array<PostType>
}

export type PostType = {
    id: string
    message: string
    likesCount: number
}

export const Posts = (props: PostsType) => {


    return (
        <div className={p.posts}>
            <h3>Опубликованные посты</h3>
            {props.posts.map((post, i) => {
                return (
                    <Post message={post.message} likes={post.likesCount} id={p.id}/>
                )
            })}
            {/* <Post message="Hello, I'm here" likes={3} id={p.id}/>
            <Post message="Oh, very glad to see you" likes={2} id={p.id}/>
            <Post message="Hi, my name is Frank" likes={11} id={p.id}/>*/}
        </div>
    )
}