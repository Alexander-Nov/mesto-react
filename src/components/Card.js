import React from "react";

function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="element">
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        type="button"
        onClick={handleClick}
      />
      <div className="element__title-block">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like">
          <button
            className="element__heart"
            type="button"
            aria-label="Нравится"
          ></button>
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
      <button
        className="element__delete"
        type="button"
        aria-label="Удалить"
      ></button>
    </div>
  );
}

export default Card;
