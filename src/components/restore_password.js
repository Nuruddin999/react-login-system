import React, { useEffect } from 'react'
import "../styles/App.css"
import { ReactComponent as Lock } from "../img/lock.svg"
import { ReactComponent as SuccessMessage } from "../img/restored.svg"
import Title from './title'
import { useDispatch, useSelector } from 'react-redux'
import { changeField, resetState } from '../store/userSlice'
import { userService } from '../api/userService';
import { Link } from 'react-router-dom'
const RestorePassword = () => {
    const { email, emailNotValid, reqLoading, allEmpty, passwordRestored } = useSelector((state) => state.userAuth)
    const dispatch = useDispatch()
    const handleChange = (e, field) => {
        dispatch(changeField({ value: e.target.value, field }))
    }
    const sendRestore = () => {
        dispatch(userService.userRestorePassword({ email }))
    }
    // useEffect(() => {
    //     dispatch(resetState())
    // }, [])
    return (
        <div className={"restore-password"}>
            <div className={"restore-password-lock"}>
                {passwordRestored ? <SuccessMessage /> : <Lock />}
            </div>
            <h2>{passwordRestored ? "Письмо отправлено" : "Восстановить пароль"}</h2>
            <span className={"restore-password-text"}>{passwordRestored ? "На указанный вами e-mail было отправлено письмо для смены пароля" : "Введите e-mail, на который регистрировались ранее"}</span>
            {!passwordRestored && <> <input placeholder="Email" value={email} onChange={(e) => handleChange(e, "email")} />
                {emailNotValid && <span className={"error-text"}>
                    Возможно вы ошиблись в указании почтового сервиса</span>}
            </>}
            {passwordRestored ? <Link className={"restore-password-gohome"} to={"/"}><button className={"restore_button"} onClick={sendRestore}> Вернуться на главную</button></Link> : <button className={"restore_button"} onClick={sendRestore}>{reqLoading ? <div className={"loader"}>
                <div className={"lds-ring"}><div></div><div></div><div></div><div></div></div><span className={"loader-span"}>Отправить</span>
            </div> : <span>Отправить</span>}</button>}
            { }
            {allEmpty && <span className={"error-text"}>{allEmpty}</span>}
            {!passwordRestored && <span className={"restore-password-text"} onClick={() => dispatch(changeField({ value: false, field: "restorePassword" }))}>Отменить</span>}
        </div>
    )
}

export default RestorePassword
