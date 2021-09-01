import React from 'react'
import '../styles/App.css';
import { ReactComponent as LiveDuneLogo } from "../img/livedune.svg"
import { Link, Route, Switch } from "react-router-dom";
import SignUpPage from './sign_up_page';
import SignInPage from './sign_in_page';
import { withRouter } from 'react-router-dom';
import MainContent from './main_content';
const MainPage = (props) => {
    return (
        <div className={"main-container"}>
            <header>
                <nav>
                    <div className={"nav_buttons"}>
                        <div className={"nav_buttons_logo"}>
                            <LiveDuneLogo />
                        </div>

                        <div className={"nav_buttons_signin"}>
                            <span>{props.location.pathname === "/" ? "У вас нет  аккаунта ?" : "Уже есть аккаунт?"}</span>
                            <Link to={props.location.pathname === "/" ? "/signup" : "/"}>
                                <button className={"nav_buttons_button"}>{props.location.pathname === "/" ? "Регистрация" : "Войти"}</button>
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
            <div className={"content"}>
                <Switch>
                    <Route path="/" exact render={(prop) => <SignInPage />} />
                    <Route path="/signup" render={(prop) => <SignUpPage />} />
                    <Route path="/main" render={(prop) => <MainContent />} />
                </Switch>
            </div>
        </div>
    )
}

export default withRouter(MainPage)
