import Popup from './Popup';

class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._container = document.querySelector(selector);
    this._image = this._container.querySelector('.popup__image');
    this._description = this._container.querySelector('.popup__caption');
  }

  open(link, description) {
    this._image.src = link;
    this._image.alt = `Изображение ${link}`;
    this._description.textContent = description;
    super.open();
  }
}

export default PopupWithImage;