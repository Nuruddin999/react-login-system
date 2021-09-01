import React from 'react'
import "../styles/App.css"
import { ReactComponent as Facebook } from '../img/facebook.svg'
import { ReactComponent as Google } from '../img/google.svg'
const SocialIcons = () => {
    return (
        <>
            <div className={"social_icons_comp"}>
                <div className={"social_icons_facebook"}>
                    <div className={"social_icons_svg_ic"}>
                        <Facebook />
                    </div>
                    <span>Войти через Facebook</span>
                </div>
                <div className={"social_icons_facebook"}>
                    <div className={"social_icons_svg_ic"}>
                        <Google />
                    </div>
                    <span>Войти через Google</span>
                </div>
            </div>
            <div className={"signup_page_or"}>
                <span>или</span>
            </div>
        </>
    )
}

export default SocialIcons
