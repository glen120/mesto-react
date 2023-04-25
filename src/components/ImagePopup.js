export default function ImagePopup(props) {
    return (
        <div className={`popup popup_image` + (props.isOpen && " popup_opened")}>
            <div className="popup__image-container">
                <button className="popup__close-button popup__close-button_image"
                        type="button"
                        aria-label="Закрыть"
                        onClick={props.onClose}></button>
                <img src={props.card.link} alt={props.card.name} className="popup__image-picture" />
                <p className="popup__image-sign">{props.card.name}</p>
            </div>
        </div>
    );
}