import React from "react";

function ImagePopup(props) {
  return (
    <section
      className={`popup popup_type_image popup_dark-background popup_centered ${
        props.isOpened && "popup_is-opened"
      }`}
    >
      <div className="popup__container">
        <button
          className="popup__close-button"
          type="button"
          onClick={props.onClose}
          aria-label="Закрыть"
        ></button>
        <img
          className="popup__image"
          src={props.card.link}
          alt={props.card.name}
        />
        <h2 className="popup__image-title">{props.card.name}</h2>
      </div>
    </section>
  );
}

export default ImagePopup;
