import React, {ChangeEvent, RefObject} from "react";
import CrPost from './CreatePost.module.css'
import {setTextAriaPostValue, textAriaPostValue} from "../../../../state/state";

type CreatePostType = {
    addPost: (postText: string)=>void
}

export const CreatePost = (props: CreatePostType) => {

    const addRefPost: RefObject<HTMLTextAreaElement> = React.createRef()

    const addPostHandler = () => {
            props.addPost(textAriaPostValue)
            setTextAriaPostValue('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            setTextAriaPostValue(e.currentTarget.value)
    }

    return (
        <div>
                <textarea value={textAriaPostValue} onChange={onChangeHandler} ref={addRefPost}/>
                <button onClick={addPostHandler} className={CrPost.buttons}>ОПУБЛИКОВАТЬ</button>
                <button className={CrPost.buttons}>ОЧИСТИТЬ ФОРМУ</button>
        </div>
    )
}