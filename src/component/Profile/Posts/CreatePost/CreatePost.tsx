import React, {ChangeEvent, RefObject} from "react";
import CrPost from './CreatePost.module.css'

type CreatePostType = {
    addPost: (postText: string)=>void
    textAriaPostValue: string
    setTextAriaPostValue: (value: string) => void
}

export const CreatePost = (props: CreatePostType) => {

    const addRefPost: RefObject<HTMLTextAreaElement> = React.createRef()

    const addPostHandler = () => {
            props.addPost(props.textAriaPostValue)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
            props.setTextAriaPostValue(e.currentTarget.value)
    }

    return (
        <div>
                <textarea value={props.textAriaPostValue} onChange={onChangeHandler} ref={addRefPost}/>
                <button onClick={addPostHandler} className={CrPost.buttons}>ОПУБЛИКОВАТЬ</button>
                <button className={CrPost.buttons}>ОЧИСТИТЬ ФОРМУ</button>
        </div>
    )
}