import { createAsyncThunk } from '@reduxjs/toolkit';
import { signUp, signIn, sendRestorePassword } from './api';
import { validateEmail } from '../utils/email_validate';

export const userService = {
    userSignUp: createAsyncThunk(
        'user/signUp',
        async (props, thunkAPI) => {
            if (props.password === "") {
                return "all empty"
            }
            if (props.username === "") {
                return "all empty"
            }
            if (validateEmail(props.email)) {
                const response = await signUp(props.username, props.email)
                return response;
            }
            return "email not valid"
        }
    ),
    userSignIn: createAsyncThunk(
        'user/signIn',
        async (props, thunkAPI) => {
            if (props.password === "" && props.email === "") {
                return "all empty"
            }
            if (validateEmail(props.email)) {
                const response = await signIn(props.email, props.password)
                return response;
            }
            return "email not valid"
        }),
    userRestorePassword: createAsyncThunk(
        'user/restore',
        async (props, thunkAPI) => {
            if (validateEmail(props.email)) {
                const response = await sendRestorePassword(props.email)
                return response;
            }
            return "email not valid"
        })
}
