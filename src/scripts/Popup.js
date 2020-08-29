const ESC_KEYCODE = 27;

class Popup {
  constructor(selector) {
    this._container = document.querySelector(selector);
    this._closeButton = this._container.querySelector('.popup__close');
    this._closeHandler = null;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    // Устанавливаю стандартное поведение для кнопки закрытия
    this._closeButton.addEventListener('click', this.close.bind(this));
  }

  _handleEscClose(e) {
    e.preventDefault();
    if(e.which === ESC_KEYCODE) {
      this.close();
    }
  }

  open() {
    this._container.classList.add('popup_is-opened');
    document.addEventListener('keyup', this._handleEscClose.bind(this));
  }

  close() {
    this._container.classList.remove('popup_is-opened');
    document.removeEventListener('keyup', this._handleEscClose);
  }

  setEventListener(handler = null) {
    if(typeof handler !== 'function') return;

    this._closeButton.removeEventListener('click', this._closeHandler);
    this._closeHandler = () => {
      handler();
      this.close();
    }
    this._closeButton.addEventListener('click', this._closeHandler);
  }
}

export default Popup;