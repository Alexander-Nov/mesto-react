# Проект: Mesto Russia (React)


### О проекте
Этот проект - продолжение предыдущего проекта Mesto Russia, но теперь создан на основе React.

По состоянию на окончание проектной работы №10 проект демонстрирует функционал социальной платформы, отображающей имеющиеся на сервере фотографии студентов группы, при загрузке страницы осуществляется запрос данных текущего пользователя и полученные в ответе от сервера данные отображаются на странице (имя, описание и аватар пользователя).

Реализованы функциональные компоненты:
- App
- Card
- Header
- Main
- Footer
- PopupWithForm
- ImagePopup
- AddPlacePopup
- EditAvatarPopup
- EditProfilePopup
- ConfirmDeletionPopup

Компонент PopupWithForm явдяется базовым для следующих компонентов:
- AddPlacePopup - окно (попап) для добавления нового места
- EditProfilePopup - окно (попап) для редактирования профиля
- EditAvatarPopup - окно (попап) для замены аватара
- ConfirmDeletionPopup - окно (попап) для подтверждения удаления карточки

Улучшен пользовательский интерфейс за счет добавления функционала изменения надписи на кнопках форм в момент отправки запроса на сервер и получения ответа от него.
