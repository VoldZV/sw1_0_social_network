import React from 'react';
import {Field, reduxForm} from "redux-form";
import {FormDecorator, InjectedFormProps} from "redux-form/lib/reduxForm";

type FormDataType = {
    login: string
    password: string
    remember_me: boolean
}



const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};



const LoginForm = (props: InjectedFormProps<FormDataType, any, string>) => {
   return <form onSubmit={props.handleSubmit} >

        <div>
            <Field component={'input'} name={'login'} placeholder='login' />
        </div>
        <div>
            <Field component={'input'} name={'password'} placeholder='password' />
        </div>
        <div>
            <Field component={'input'} name={'remember_me'} type="checkbox"/> Remember me
        </div>
       <div>
           <button>Send</button>
       </div>
    </form>
}


const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)


export default Login;