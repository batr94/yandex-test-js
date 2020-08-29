import Popup from './Popup';

class PopuWithForm extends Popup {
  constructor(selector, submitHandler) {
    super(selector);
    this._container = document.querySelector(selector);
    this._form = this._container.querySelector('form');
    this._submitHandler = null;

    this.setEventListener(submitHandler);
  }

  _getInputValues() {
    return this._form.elements;
  }

  open(defaultValues) {
    const elements = this._getInputValues();
    Object.keys(defaultValues).forEach(name => {
      if(elements[name]) {
        elements[name].value = defaultValues[name];
      }
    });
    super.open();
  }

  close() {
    super.close();
    this._form.reset();
  }

  setEventListener(submitHandler, closeHandler = null) {
    super.setEventListener(closeHandler);

    if(typeof submitHandler !== 'function') return;

    this._container.removeEventListener('submit', this._submitHandler);
    this._submitHandler = (e) => {
      e.preventDefault();
      submitHandler(this._getInputValues());
    }
    this._container.addEventListener('submit', this._submitHandler);
  }
}

export default PopuWithForm;