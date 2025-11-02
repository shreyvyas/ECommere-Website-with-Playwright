export default class LoginPage{

    constructor(page){
        this.page = page;
        this.username = this.page.getByPlaceholder("Enter Username");
        this.password = this.page.getByPlaceholder("Enter a password");
        this.loginButton = this.page.getByRole('button', {name: "Login to QKart"});
    }

    async loginUser(username, password){
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }


}