
export class UserMessage implements Message {
    private _user: string;
    private _destination: string;
    private _message: string;
    private _dateSend: string;
    private _channel: string;

    constructor(_user: string, _toUser: string, _message: string, _dateSend: string, _channel: string) {
        this._user = _user;
        this._destination = _toUser;
        this._message = _message;
        this._channel = _channel;
        this._dateSend = _dateSend;
    }

    get user(): string {
        return this._user;
    }

    get channel(): string {
        return this._channel;
    }

    get dateSend(): string {
        return this._dateSend;
    }
    get message(): string {
        return this._message;
    }
    get destination(): string {
        return this._destination;
    }
}
