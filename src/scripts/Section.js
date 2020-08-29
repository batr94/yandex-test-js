class Section {
  constructor(data, selector) {
    this._container = document.querySelector(selector);
    this._renderer = data.renderer;
    this._items = data.items;
  }

  render() {
    this._items.forEach(item => this.addItem(this._renderer(item)));
  }

  addItem(newElement) {
    this._container.append(newElement);
  };
}

export default Section;