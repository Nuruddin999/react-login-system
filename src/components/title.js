import React from 'react'
import "../styles/App.css"
const Title = ({ title, descr }) => {
    return (
        <div className={"title-comp"}>
            <h1>{title}</h1>
            {descr !== "notreceive" ? <h4>{descr}</h4> : <h4>Письмо может прийти с задержкой в 5-10 минут.
                Также проверьте разные папки почтового ящика (актуально для gmail.com) и папку "Спам".Если письмо все же не пришло, повторите попытку или напишите об этом в тех.поддержку <span className="title-comp-support">support@livedune.ru</span> и мы активируем ваш аккаунт.</h4>}
        </div>
    )
}

export default Title
