import React, { useEffect } from 'react'
import '../styles/App.css';
import Title from '../components/title';
import SocialIcons from '../components/social_icons';
import UserEmailPassword from '../components/user_email_password';
import ConfirmEmail from '../components/confirm_email';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, resetState, signUpThunk, validate } from '../store/userSlice';
import { userService } from '../api/userService';
const SignUpPage = () => {
    const authState = useSelector((state) => state.userAuth)
    const dispatch = useDispatch()
    const handleChange = (e, field) => {
        dispatch(changeField({ value: e.target.value, field }))
    }
    const register = () => {
        dispatch(userService.userSignUp({ username: authState.username, email: authState.email, password: authState.password }))
    }
    const setPromocode = () => {
        dispatch(changeField({ value: true, field: "havePromocode" }))
    }

    useEffect(() => {
        dispatch(resetState())
    }, [])
    return (
        <div className={"signup_page"}>
            {authState.registeredUser !== "" ? <ConfirmEmail /> : <>  <Title title={"Регистрация"} descr={"Зарегистрируйся и получи доступ к аналитике аккаунтов."} />
                <SocialIcons />
                <div className={"signup_page_form"}>
                    <input className={authState.allEmpty ? "error-input" : "signup_page_name"} placeholder="Имя" value={authState.username} onChange={(e) => handleChange(e, "username")} />
                    <UserEmailPassword />
                    {authState.havePromocode && <input placeholder="Промокод" className={"signup_page_name"} value={authState.promoCode} onChange={(e) => handleChange(e, "promoCode")} />}
                    <span className="signup_page_form_promocode" onClick={setPromocode}>У меня есть промокод</span>
                    {authState.reqLoading ? <span>Подождите </span> : <button onClick={register}>Создать аккаунт</button>}
                    <div className={"signup_page_form_agree"}>
                        <span>Создавая аккаунт, я согласен с</span><span>условиями оферты</span>
                    </div>
                </div></>}

        </div>
    )
}

export default SignUpPage
