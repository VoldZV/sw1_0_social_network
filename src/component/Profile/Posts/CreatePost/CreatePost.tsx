import React, {ChangeEvent, RefObject} from "react";
import CrPost from './CreatePost.module.css'
import {Field, FormSubmitHandler, reduxForm} from "redux-form";
import {InjectedFormProps, SubmitHandler} from "redux-form/lib/reduxForm";

type CreatePostType = {
    addPost: (postText: string) => void
    onChangeTextAria: (posttext: string) => void
}

export const CreatePost = (props: CreatePostType) => {

    const addPostHandler = (formData: PostDataType) => {
        if (formData.textAriaPostValue.trim()) props.addPost(formData.textAriaPostValue)
    }

    return (
        <ReduxPostForm onSubmit={addPostHandler}/>
    )
}


type PostDataType = {
    textAriaPostValue: string
}

const postForm = (props: InjectedFormProps<PostDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'textAriaPostValue'} placeholder={'enter post text'} />
            <button className={CrPost.buttons}>ОПУБЛИКОВАТЬ</button>
        </form>
    )
}


const ReduxPostForm = reduxForm<PostDataType>({form: 'postForm'})(postForm)