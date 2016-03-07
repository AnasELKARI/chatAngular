class Channel implements Destination {
    private _name: string;
    private _stat: Etat;
    private _namecreator: string;
    private _admin: string[];
    private _members: string[];   

    constructor(nameOfChannel: string, namecreator: string, admin: string[]) {
        this._name = nameOfChannel;
        this._stat = Etat.open;
        this._namecreator = namecreator;
        this._admin = admin;
        this._members = admin;

    }

    close(): void {
        this._stat = Etat.close;
    }

    open(): void {
        this._stat = Etat.open;
    }

    get name(): string {
        return this._name;
    }
}
