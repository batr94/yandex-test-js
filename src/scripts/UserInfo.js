class UserInfo {
  constructor(selectors) {
    this._name = document.querySelector(selectors.name);
    this._description = document.querySelector(selectors.description);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      description: this._description.textContent,
    };
  }

  setUserInfo(info) {
    this._name.textContent = info.name;
    this._description.textContent = info.description;
  }
}

export default UserInfo;