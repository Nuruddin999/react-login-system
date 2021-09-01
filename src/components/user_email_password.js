import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeField } from '../store/userSlice'
import "../styles/App.css"
const UserEmailPassword = () => {
    const emailNotValid = useSelector((state) => state.userAuth.emailNotValid)
    const email = useSelector((state) => state.userAuth.email)
    const password = useSelector((state) => state.userAuth.password)
    const allEmpty = useSelector((state) => state.userAuth.allEmpty)
    const dispatch = useDispatch()
    const handleChange = (e, field) => {
        dispatch(changeField({ value: e.target.value, field }))
    }
    return (
        <>
            <input className={emailNotValid || allEmpty !== "" ? "error-input" : "signup_page_email"} placeholder="Email" value={email} onChange={(e) => handleChange(e, "email")} />
            {emailNotValid && <span className={"error-text"}>
                Возможно вы ошиблись в указании почтового сервиса</span>}
            <input className={allEmpty !== "" ? "error-input" : "signup_page_password"} placeholder="Пароль" value={password} onChange={(e) => handleChange(e, "password")} />
            {allEmpty !== "" && <span className={"error-text"}>
                {allEmpty}</span>}
        </>
    )
}

export default UserEmailPassword
