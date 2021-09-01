import { userService } from '../api/userService';
import {  createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: "",
    email: "",
    password: "",
    emailforConfirm: "",
    registeredUser: "",
    reqLoading: false,
    reqError: false,
    emailNotValid: false,
    allEmpty: "",
    promoCode: "",
    havePromocode: false,
    restorePassword: false,
    passwordRestored: false,
    isSent: true,
    currentUser: ""
}

export const userSlice = createSlice({
    name: 'userAuth',
    initialState,
    reducers: {
        changeField: (state, action) => {
            if (action.payload.field === "email") {
                state.emailNotValid = false
            }
            state.allEmpty = ""
            state[action.payload.field] = action.payload.value
        },
        resetState: (state, action) => {
            state.allEmpty = ""
            state.emailNotValid = false
            state.email = ""
            state.username = ""
            state.reqError = false
            state.reqLoading = false
            state.password = ""
            state.havePromocode = false
            state.passwordRestored = false
            state.restorePassword = false
            state.registeredUser = ""
            state.isSent = true
            state.promoCode = ""
            state.currentUser = ""
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userService.userSignUp.fulfilled, (state, action) => {
            state.reqLoading = false
            state.reqError = false
            if (action.payload === "all empty") {
                state.allEmpty = "Введите email, Введите пароль, Введите имя"
            }
            else if (action.payload === "email not valid") {
                state.emailNotValid = true
            }
            else {
                state.registeredUser = action.payload.username
            }

        })
        builder.addCase(userService.userSignUp.pending, (state, action) => {
            state.reqLoading = true
            state.reqError = false
        })
        builder.addCase(userService.userSignUp.rejected, (state, action) => {
            state.reqError = true
            state.reqLoading = false
        })
        builder.addCase(userService.userSignIn.fulfilled, (state, action) => {
            state.reqLoading = false
            state.reqError = false
            if (action.payload === "all empty") {
                state.allEmpty = "Введите email, Введите пароль "
            }
            else if (action.payload === "email not valid") {
                state.emailNotValid = true
            }
            else {
                state.currentUser = action.payload.email
            }
        })
        builder.addCase(userService.userSignIn.pending, (state, action) => {
            state.reqLoading = true
            state.reqError = false
        })
        builder.addCase(userService.userSignIn.rejected, (state, action) => {
            state.reqError = true
            state.reqLoading = false
            if (action.error.message === "error") {
                state.allEmpty = "Неверный еmail, или пароль"
            }
        })
        builder.addCase(userService.userRestorePassword.fulfilled, (state, action) => {
            state.reqLoading = false
            state.reqError = false
            if (action.payload === "email not valid") {
                state.emailNotValid = true
            }
            else {
                state.passwordRestored = action.payload
            }

        })
        builder.addCase(userService.userRestorePassword.pending, (state, action) => {
            state.reqLoading = true
            state.reqError = false
        })
        builder.addCase(userService.userRestorePassword.rejected, (state, action) => {
            state.reqError = true
            state.reqLoading = false
            if (action.error.message === "error") {
                state.allEmpty = "неверный email"
            }
        })
    }
})

// Action creators are generated for each case reducer function
export const { changeField, resetState } = userSlice.actions

export default userSlice.reducer