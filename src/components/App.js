import React from "react";

// Импортируем компоненты
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

export default function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    // Обработчики открытия попапов
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }
    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }
    function handleCardClick(card) {
        setSelectedCard(card);
        setIsImagePopupOpen(true);
    }

    // Обработчик закрытия попапов
    function closeAllPopups() {
        setIsEditProfilePopupOpen(false);
        setIsEditAvatarPopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setIsImagePopupOpen(false);
    }

  return (
    <div className="page">
        <Header />
        <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
            name="profile"
            title="Редактировать профиль"
            buttonText="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            children={(
                <>
                    <label className="popup__form-label">
                        <input className="popup__input popup__input_type_name" type="text" id="name-input" name="name"
                               placeholder="Как вас зовут?" minLength="2" maxLength="40" required />
                        <span className="popup__input-error name-input-error"></span>
                    </label>
                    <label className="popup__form-label">
                        <input className="popup__input popup__input_type_job" type="text" id="job-input" name="about"
                               placeholder="Чем занимаетесь?" minLength="2" maxLength="200" required />
                        <span className="popup__input-error job-input-error"></span>
                    </label>
                </>
            )}
        />
        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            children={(
                <>
                    <label className="popup__form-label">
                        <input className="popup__input popup__input_avatar_link" type="url" id="avatar-input"
                               name="avatar" placeholder="Ссылка на аватар" required />
                        <span className="popup__input-error avatar-input-error"></span>
                    </label>
                </>
            )}
        />
        <PopupWithForm
            name="card"
            title="Новое место"
            buttonText="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            children={(
                <>
                    <label className="popup__form-label">
                        <input className="popup__input popup__input_card_name" type="text" id="place-input"
                               name="picture" placeholder="Название" minLength="2" maxLength="30" required />
                        <span className="popup__input-error place-input-error"></span>
                    </label>
                    <label className="popup__form-label">
                        <input className="popup__input popup__input_card_link" type="url" id="link-input" name="link"
                               placeholder="Ссылка на картинку" required />
                        <span className="popup__input-error link-input-error"></span>
                    </label>
                </>
            )}
        />
        <PopupWithForm
            name="confirmation"
            title="Вы уверены?"
            buttonText="Да"
            isOpen={false}
            onClose={closeAllPopups}
        />
        <ImagePopup
            card={selectedCard}
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
        />
    </div>
  );
}