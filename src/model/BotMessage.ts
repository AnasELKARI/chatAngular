export class botMessage implements Message {
    private _destination: string;
    private _message: string;
    private _dateSend: string;
    private _type: Type;
    private _channel: string; 

    constructor(_type: Type, _toUser: string, _message: string, _dateSend: string, _channel: string) {
        this._destination = _toUser;
        this._message = _message;
        this._channel = _channel;
        this._dateSend = _dateSend;
        this._type = _type;
    }
    get channel(): string {
        return this._channel;
    }

    get destination(): string {
        return this._destination;
    }
    get type(): Type {
        return this._type;
    }
    get dateSend(): string {
        return this._dateSend;
    }
    get message(): string {
        return this._message;
    }
}
