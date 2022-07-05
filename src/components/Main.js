import React from "react";
import { api } from "../utils/api";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([res, resCardsList]) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
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
          style={{ backgroundImage: `url(${userAvatar})` }}
          type="button"
          onClick={props.onEditAvatar}
        ></button>
        <div className="profile__info">
          <div className="profile__top-line">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={props.onEditProfile}
              aria-label="Редактировать"
            ></button>
          </div>
          <p className="profile__description">{userDescription}</p>
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
          onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
