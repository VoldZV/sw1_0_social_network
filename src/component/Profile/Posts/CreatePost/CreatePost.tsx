import React, {RefObject} from "react";
import CrPost from './CreatePost.module.css'

type CreatePostType = {
    addPost: (postText: string)=>void
}

export const CreatePost = (props: CreatePostType) => {

    const addRefPost: RefObject<HTMLTextAreaElement> = React.createRef()

    const addPostHandler = () => {
        debugger
        if (addRefPost.current) {
            props.addPost(addRefPost.current.value)
        }
    }

    return (
        <div>
            <form action="#" className={CrPost.form}>
                <textarea ref={addRefPost}/>
                <button onClick={addPostHandler} className={CrPost.buttons}>ОПУБЛИКОВАТЬ</button>
                <button className={CrPost.buttons}>ОЧИСТИТЬ ФОРМУ</button>
            </form>
        </div>
    )
}