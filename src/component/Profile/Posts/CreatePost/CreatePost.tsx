import React, {ChangeEvent, RefObject} from "react";
import CrPost from './CreatePost.module.css'
import {ActionType, addPostActionCreator, changePostActionCreator} from "../../../../state/state";

type CreatePostType = {
    // addPost: (postText: string)=>void
    textAriaPostValue: string
    dispatch: (action: ActionType) => void
    // setTextAriaPostValue: (value: string) => void
}

export const CreatePost = (props: CreatePostType) => {

    const addRefPost: RefObject<HTMLTextAreaElement> = React.createRef()

    const addPostHandler = () => {
        // props.addPost(props.textAriaPostValue)
        const actionPost = addPostActionCreator(props.textAriaPostValue)
        props.dispatch(actionPost)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.setTextAriaPostValue(e.currentTarget.value)
        const action = changePostActionCreator(e.currentTarget.value)
        props.dispatch(action)
    }

    return (
        <div>
            <textarea value={props.textAriaPostValue} onChange={onChangeHandler} ref={addRefPost}/>
            <button onClick={addPostHandler} className={CrPost.buttons}>ОПУБЛИКОВАТЬ</button>
            <button className={CrPost.buttons}>ОЧИСТИТЬ ФОРМУ</button>
        </div>
    )
}