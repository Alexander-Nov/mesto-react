import React from "react";
import { useEffect } from "react";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");
  const inputPlaceNameRef = React.useRef();
  const inputPlaceLinkRef = React.useRef();

  useEffect(() => {
    setName("");
    setLink("");
    inputPlaceNameRef.current.value = '';
    inputPlaceLinkRef.current.value = '';
  }, [props.isOpen])


  function handleSubmit(e) {
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onAddPlace({
      name,
      link,
    });
  }

  function handleNewCardName(e) {
    setName(e.target.value);
  }

  function handleNewCardLink(e) {
    setLink(e.target.value);
  }

  return (
    <PopupWithForm
      title="Новое место"
      name="card"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      buttonText={props.isLoading ? "Сохранение..." : "Создать"}
      children={
        <>
          <input
            type="text"
            id="card-name"
            className="popup__input popup__input-name"
            name="addCard-input-name"
            minLength="2"
            maxLength="30"
            required
            placeholder="Название"
            onChange={handleNewCardName}
            ref={inputPlaceNameRef}
          />
          <span id="card-name-error" className="popup__span-error"></span>
          <input
            type="url"
            id="card-link"
            className="popup__input popup__input-prof"
            name="addCard-input-link"
            required
            placeholder="Ссылка на картинку"
            onChange={handleNewCardLink}
            ref={inputPlaceLinkRef}
          />
          <span id="card-link-error" className="popup__span-error"></span>
        </>
      }
    />
  );
}

export default AddPlacePopup;
