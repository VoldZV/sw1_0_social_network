import React, {ChangeEvent, RefObject} from "react";
import CrPost from './CreatePost.module.css'

type CreatePostType = {
    textAriaPostValue: string
    addPost: () => void
    onChangeTextAria: (posttext: string) => void
}

export const CreatePost = (props: CreatePostType) => {


    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeTextAria(e.currentTarget.value)
    }

    return (
        <div>
            <textarea value={props.textAriaPostValue} onChange={onChangeHandler} />
            <button onClick={props.addPost} className={CrPost.buttons}>ОПУБЛИКОВАТЬ</button>
            <button className={CrPost.buttons}>ОЧИСТИТЬ ФОРМУ</button>
        </div>
    )
}