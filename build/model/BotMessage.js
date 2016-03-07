"use strict";
var botMessage = (function () {
    function botMessage(_type, _toUser, _message, _dateSend, _channel) {
        this._destination = _toUser;
        this._message = _message;
        this._channel = _channel;
        this._dateSend = _dateSend;
        this._type = _type;
    }
    Object.defineProperty(botMessage.prototype, "channel", {
        get: function () {
            return this._channel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(botMessage.prototype, "destination", {
        get: function () {
            return this._destination;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(botMessage.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(botMessage.prototype, "dateSend", {
        get: function () {
            return this._dateSend;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(botMessage.prototype, "message", {
        get: function () {
            return this._message;
        },
        enumerable: true,
        configurable: true
    });
    return botMessage;
}());
exports.botMessage = botMessage;
//# sourceMappingURL=BotMessage.js.map