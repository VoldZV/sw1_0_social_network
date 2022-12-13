import React from 'react';
import {DecoratedComponentClass, DecoratedFormProps, Field, reduxForm} from "redux-form";
import {FormDecorator, InjectedFormProps} from "redux-form/lib/reduxForm";
import {maxLengthCreator, required} from "../utils/validators/validators";
import {MyTextField} from "./common/FormControl/FormControl";
import {connect} from "react-redux";
import {loginUser} from "../state/authReducer";
import {AppStateType} from "../state/store-redux";
import {Redirect} from "react-router-dom";
import errStyle from './common/FormControl/FormControl.module.css'

type FormDataType = {
    login: string
    password: string
    remember_me: boolean
    captcha: string
}


const LoginConnect = (props: LoginConnectType) => {

    if(props.isAuth) return <Redirect to={'/profile'}/>

    const onSubmit = ({login, password, remember_me, captcha}: FormDataType) => {
        props.loginUser(login, password, remember_me, captcha)
    }
    return (
        <div>
            <h2>LOGIN</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

type mstpType = {
    isAuth: boolean
    captcha: boolean
}

type mdtpType = {
    loginUser: (login: string, password: string, remember_me: boolean, captcha: string) => void
}

type LoginConnectType = mstpType & mdtpType

const mstp = (state: AppStateType): mstpType => ({
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
})

const Login = connect(mstp, {
    loginUser
})(LoginConnect)


const maxLengthValidator = maxLengthCreator(30)


const LoginForm = (props: InjectedFormProps<FormDataType, any, string>) => {

    return <form onSubmit={props.handleSubmit}>

        <div>
            <Field component={MyTextField} name={'login'} placeholder='login'
                   validate={[required, maxLengthValidator]} formType={'input'}
            />
        </div>
        <div>
            <Field component={MyTextField} name={'password'} type={'password'} placeholder='password'
                   validate={[required, maxLengthValidator]} formType={'input'}
            />
        </div>
        <div>
            <Field component={MyTextField} name={'remember_me'} type="checkbox"
            />
            Remember me
        </div>
        {props.error && <div className={errStyle.formSummaryError}>{props.error}</div>}
        <Captcha/>
        <div>
            <button>Send</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)


type mstpCaptchaType = {
    captcha: boolean
    captchaSrc: string
}

const mstpCaptcha = (state: AppStateType): mstpCaptchaType => ({
    captcha: state.auth.captcha,
    captchaSrc: state.auth.captchaSrc
})

const Captcha = connect(mstpCaptcha, {})((props: mstpCaptchaType & {}) => {
    return <>
        {props.captcha && <div>
            <Field component={MyTextField} name={'captcha'} type="text"
            />
            <img src={props.captchaSrc} alt="#"/>
            enter captcha from IMG
        </div>}
    </>
})


export default Login;