import React, {ChangeEvent, RefObject} from "react";
import CrPost from './CreatePost.module.css'

type CreatePostType = {
    textAriaPostValue: string
    addPost: (postText: string) => void
    onChangeTextAria: (posttext: string) => void
}

export const CreatePost = (props: CreatePostType) => {


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeTextAria(e.currentTarget.value)
    }

    const addPostHandler = () => {
        if (props.textAriaPostValue.trim())props.addPost(props.textAriaPostValue)
    }

    return (
        <div>
            <textarea value={props.textAriaPostValue} onChange={onChangeHandler} />
            <button onClick={addPostHandler} className={CrPost.buttons}>ОПУБЛИКОВАТЬ</button>
            <button className={CrPost.buttons}>ОЧИСТИТЬ ФОРМУ</button>
        </div>
    )
}