export class Login {

    token: string;

    constructor(private userName: string, private password: string) { 
        this.token = '';
    }

    public setUserName(userName: string): void {
        this.userName = userName;
    }

    public setPassword(password: string): void {
        this.password = password;
    }
}
