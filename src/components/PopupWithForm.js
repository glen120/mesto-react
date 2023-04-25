export default function PopupWithForm(props) {
    return (
        <div className={`popup popup_${props.name}` + (props.isOpen && " popup_opened")}>
            <div className="popup__container">
                <button
                    className="popup__close-button"
                    type="button"
                    aria-label="Закрыть"
                    onClick={props.onClose}></button>
                <h2 className="popup__title">{props.title}</h2>
                <form className="popup__form" name={props.name} noValidate>
                    {props.children}
                    <button
                        className="popup__save-button popup__save-button_disabled"
                        type="submit"
                        disabled>{props.buttonText}</button>
                </form>
            </div>
        </div>
    );
}