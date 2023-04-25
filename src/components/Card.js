export default function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="card__cell">
            <button className="card__bin-button" type="button" aria-label="Удалить"></button>
            <img src={props.card.link} alt={props.card.name} className="card__image" onClick={handleClick} />
            <h2 className="card__title">{props.card.name}</h2>
            <div className="card__like">
                <button className="card__like-button" type="button" aria-label="Нравится"></button>
                <span className="card__like-counter" >{props.card.likes.length}</span>
            </div>
        </li>
    );
}