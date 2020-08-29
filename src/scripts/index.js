import Card from './Card.js';
import Section from './Section.js';
import FormValidator from './FormValidator.js';
import PopopWithImage from './PopupWithImage';
import PopupWithForm from './PopupWithForm';
import UserInfo from './UserInfo';
import '../pages/index.css';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// Врапперы
const editFormModalWindow = document.querySelector('.popup_type_edit');
const cardFormModalWindow = document.querySelector('.popup_type_new-card');

// Кнопки и прочие дом узлы
const openEditFormButton = document.querySelector('.profile__edit-button');
const openCardFormButton = document.querySelector('.profile__add-button');

const cardSelector = '.card-template';
const defaultFormConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const renderCard = (data) => {
  const card = new Card(data, cardSelector, cardImagePopup.open);
  return card.getView();
};
const cardFormSubmitHandler = (elements) => {
  cardsSection.addItem(renderCard({
    name: elements['place-name'].value,
    link: elements['link'].value,
  }));
  cardFormPopup.close();
};
const formSubmitHandler = (elements) => {
  userInfo.setUserInfo({
    name: elements['name'].value,
    description: elements['description'].value
  });
  userInfoFormPopup.close();
};

const cardsSection = new Section({items: initialCards, renderer: renderCard}, '.places__list');
const cardImagePopup = new PopopWithImage('.popup_type_image');
const cardFormPopup = new PopupWithForm('.popup_type_new-card', cardFormSubmitHandler);
const userInfoFormPopup = new PopupWithForm('.popup_type_edit', formSubmitHandler);
const userInfo = new UserInfo({
  name: '.profile__title',
  description: '.profile__description'
});

openEditFormButton.addEventListener('click', () => {
  userInfoFormPopup.open(userInfo.getUserInfo());
});
openCardFormButton.addEventListener('click', cardFormPopup.open);

const editFormValidator = new FormValidator(defaultFormConfig, editFormModalWindow);
const cardFormValidator = new FormValidator(defaultFormConfig, cardFormModalWindow);
editFormValidator.enableValidation();
cardFormValidator.enableValidation();

cardsSection.render();