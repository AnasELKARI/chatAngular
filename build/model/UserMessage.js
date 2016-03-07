"use strict";
var UserMessage = (function () {
    function UserMessage(_user, _toUser, _message, _dateSend, _channel) {
        this._user = _user;
        this._destination = _toUser;
        this._message = _message;
        this._channel = _channel;
        this._dateSend = _dateSend;
    }
    Object.defineProperty(UserMessage.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMessage.prototype, "channel", {
        get: function () {
            return this._channel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMessage.prototype, "dateSend", {
        get: function () {
            return this._dateSend;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMessage.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserMessage.prototype, "destination", {
        get: function () {
            return this._destination;
        },
        enumerable: true,
        configurable: true
    });
    return UserMessage;
}());
exports.UserMessage = UserMessage;
//# sourceMappingURL=UserMessage.js.map