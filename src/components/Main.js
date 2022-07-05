import React from "react";
import { api } from "../utils/api";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/currentUserContext";

function Main(props) {
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id); // проверяем, есть ли уже лайк на этой карточке

    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card)
    .then(() => {
      setCards((state) => state.filter((c) => !(c._id === card._id)));
  });
  }

  React.useEffect(() => {
    api.getInitialCards()
      .then((resCardsList) => {
        setCards(resCardsList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main-content">
      <section className="profile">
        <button
          className="profile__avatar"
          style={{ backgroundImage: `url(${currentUser.avatar})` }}
          type="button"
          onClick={props.onEditAvatar}
        ></button>
        <div className="profile__info">
          <div className="profile__top-line">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={props.onEditProfile}
              aria-label="Редактировать"
            ></button>
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
          aria-label="Добавить"
        ></button>
      </section>

      <section className="elements">
        {cards.map((cardItem) => (
          <Card
          key={cardItem._id}
          card={cardItem}
          onCardClick={props.onCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}/>
        ))}
      </section>
    </main>
  );
}

export default Main;
