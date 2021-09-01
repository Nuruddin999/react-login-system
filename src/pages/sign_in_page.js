import React, { useEffect } from 'react'
import '../styles/App.css';
import Title from '../components/title';
import SocialIcons from '../components/social_icons';
import UserEmailPassword from '../components/user_email_password';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, resetState } from '../store/userSlice';
import { userService } from '../api/userService';
import RestorePassword from '../components/restore_password';
import { Redirect } from 'react-router';
const SignInPage = () => {
    const authState = useSelector((state) => state.userAuth)
    const dispatch = useDispatch()
    const handleChange = () => {
        dispatch(changeField({ value: true, field: "restorePassword" }))
    }
    const logIn = () => {
        dispatch(userService.userSignIn({ email: authState.email, password: authState.password }))
    }
    useEffect(() => {
        dispatch(resetState())
    }, [])
    return (
        <div className={"signup_page"}>
            {authState.restorePassword ? <RestorePassword /> : <><Title title={"Войти"} descr={"Добро пожаловать, рады видеть вас снова 👋"} />
                <SocialIcons />
                <div className={"signup_page_form"}>
                    <UserEmailPassword />
                    {authState.currentUser !== "" && <Redirect to="/main" />}
                    {authState.reqLoading ? <span>Подождите </span> : <button onClick={logIn}>Войти в аккаунт</button>}
                    <span className="signup_page_form_promocode" onClick={handleChange}>Забыли пароль</span>
                </div></>}


        </div>
    )
}

export default SignInPage
