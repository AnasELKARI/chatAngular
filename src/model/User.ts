class User implements Destination {
    private _name: string;
    private _login: string; 
    private _password: string;
    private _dateSignUp: string;

    constructor(name: string, login: string, password: string, dateSignUp: string) {
        this._name = name;
        this._password = password;
        this._dateSignUp = dateSignUp;
        this._login = login;
    }

    public get name(): string {
        return this._name;
    }

    public authentify(login: string, password: string): boolean {
        if (this._login == login && this._password == password) {
            return true;
        }
        return false;
    }
}
