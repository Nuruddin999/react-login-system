import React, { useEffect, useState } from 'react'
import Title from './title'
import "../styles/App.css"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { userService } from '../api/userService';
import { changeField, resetState } from '../store/userSlice'
const ConfirmEmail = () => {


    const { username, email, emailNotValid, isSent } = useSelector((state) => state.userAuth)
    const dispatch = useDispatch()
    const handleChange = (value, field) => {
        dispatch(changeField({ value, field }))
    }
    // useEffect(() => {
    //     dispatch(resetState())
    // }, [])
    return (
        <>
            <Title title={isSent ? "Подтвердите ваш e-mail" : "Мне не пришло письмо"} descr={isSent ? `${username}, на ваш E-mail отправлено письмо со ссылкой для подтверждения. Перейдите по ней, чтобы активировать вашу учетную запись и получить 7 дней бесплатного доступа. ` : "notreceive"} />
            <div className={"signup_page_form"}>
                {!isSent && <input className={"notresent"} type="email" value={email} onChange={(e) => handleChange(e.target.value, "email")} />}
                {emailNotValid && <span className={"error-text"}>
                    Возможно вы ошиблись в указании почтового сервиса</span>}
                {isSent ? <button>Перейти к почте</button> : <button onClick={() => handleChange(true, "isSent")}>Отправить заново</button>}
            </div>
            {isSent ? <span className="signup_page_form_promocode" onClick={() => handleChange(false, "isSent")}>Мне не пришло письмо</span> : <span className={"signup_page_form_cancel"} onClick={(e) => handleChange(true, "isSent")}>Отменить</span>}
        </>
    )
}

export default ConfirmEmail
