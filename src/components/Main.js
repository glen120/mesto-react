import React from "react";
import Card from "./Card";
import api from "../utils/api";

export default function Main(props) {
    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription ] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, initialCards]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(initialCards);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <img src={userAvatar} alt="Аватар пользователя" className="profile__avatar-image" />
                    <button
                        className="profile__avatar-button"
                        type="button"
                        aria-label="Изменить аватар"
                        onClick={props.onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <button
                        className="profile__edit-button"
                        type="button"
                        aria-label="Редактировать профиль"
                        onClick={props.onEditProfile}></button>
                    <p className="profile__job">{userDescription}</p>
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                    aria-label="Добавить"
                    onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="card">
                    {cards.map((cardData) => (
                        <Card
                            card={cardData}
                            key={cardData._id}
                            onCardClick={props.onCardClick}
                        />
                    ))}
                </ul>
            </section>
        </main>
    );
}