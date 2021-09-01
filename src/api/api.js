import { validate } from "../store/userSlice"

export const signUp = (username, email) => new Promise((resolve, reject) => {
    resolve({ username, email })
    reject("error")
})
export const signIn = (email, password) => new Promise((resolve, reject) => {
    if (email === "example@example.com" && password === "password2021") {
        resolve({ success: true, email })
    }
    else {
        reject("error")
    }
})
export const sendRestorePassword = (email) => new Promise((resolve, reject) => {
    if (email === "example@example.com") {
        setTimeout(() => resolve(true), 1500)
    }
    else {
        reject("error")
    }
})