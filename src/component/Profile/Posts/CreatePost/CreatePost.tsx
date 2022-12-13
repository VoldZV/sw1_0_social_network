import React, {ChangeEvent, RefObject} from "react";
import CrPost from './CreatePost.module.css'
import {Field, FormSubmitHandler, reduxForm} from "redux-form";
import {InjectedFormProps, SubmitHandler} from "redux-form/lib/reduxForm";
import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {MyTextField} from "../../../common/FormControl/FormControl";

type CreatePostType =    {
    addPost: (postText: string) => void
    onChangeTextAria: (posttext: string) => void
}

const maxLengthValidator = maxLengthCreator(10)

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
            <Field formType={'textarea'} component={MyTextField} name={'textAriaPostValue'} placeholder={'enter post text'}  validate={[required, maxLengthValidator]}/>
            <button className={CrPost.buttons}>ОПУБЛИКОВАТЬ</button>
        </form>
    )
}


const ReduxPostForm = reduxForm<PostDataType>({form: 'postForm'})(postForm)