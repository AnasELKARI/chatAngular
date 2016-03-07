var User = (function () {
    function User(name, login, password, dateSignUp) {
        this._name = name;
        this._password = password;
        this._dateSignUp = dateSignUp;
        this._login = login;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.authentify = function (login, password) {
        if (this._login == login && this._password == password) {
            return true;
        }
        return false;
    };
    return User;
}());
//# sourceMappingURL=User.js.map