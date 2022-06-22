import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard({});
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };

  return (
    <div className="page">
      <Header />

      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />

      <Footer />

      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              type="text"
              id="input-name"
              className="popup__input popup__input-name"
              name="input-name"
              minLength="2"
              maxLength="40"
              placeholder="Фамилия Имя"
              required
            />
            <span id="input-name-error" className="popup__span-error"></span>
            <input
              type="text"
              id="input-prof"
              className="popup__input popup__input-prof"
              name="input-prof"
              minLength="2"
              maxLength="200"
              placeholder="Профессия"
              required
            />
            <span id="input-prof-error" className="popup__span-error"></span>
          </>
        }
      />

      <PopupWithForm
        title="Новое место"
        name="card"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
            />
            <span id="card-name-error" className="popup__span-error"></span>
            <input
              type="url"
              id="card-link"
              className="popup__input popup__input-prof"
              name="addCard-input-link"
              required
              placeholder="Ссылка на картинку"
            />
            <span id="card-link-error" className="popup__span-error"></span>
          </>
        }
      />

      <PopupWithForm
        title="Вы уверены?"
        name="confirm"
        isOpen={false}
        onClose={closeAllPopups}
        children={<></>}
      />

      <PopupWithForm
        title="Обновить аватар"
        name="avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input
              type="url"
              id="avatar-link"
              className="popup__input popup__input-avatar"
              name="avatar-input-link"
              required
              placeholder="Ссылка на новый аватар"
            />
            <span id="avatar-link-error" className="popup__span-error"></span>
          </>
        }
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
        isOpened={isImagePopupOpen}
      />
    </div>
  );
}

export default App;
