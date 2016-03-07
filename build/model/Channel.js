var Channel = (function () {
    function Channel(nameOfChannel, namecreator, admin) {
        this._name = nameOfChannel;
        this._stat = Etat.open;
        this._namecreator = namecreator;
        this._admin = admin;
        this._members = admin;
    }
    Channel.prototype.close = function () {
        this._stat = Etat.close;
    };
    Channel.prototype.open = function () {
        this._stat = Etat.open;
    };
    Object.defineProperty(Channel.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return Channel;
}());
//# sourceMappingURL=Channel.js.map