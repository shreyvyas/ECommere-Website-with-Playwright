export default class RegisterPage{

    constructor(page){
        this.page = page;
        this.username = this.page.getByPlaceholder("Enter Username");
        this.password = this.page.getByPlaceholder("Enter a password with minimum 6 characters");
        this.confirmPassword = this.page.getByPlaceholder("Re-enter your password to confirm");
        this.registerNow = this.page.getByRole('button', {name: "Register Now"});        
    };


    async registerUser(){
        //const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        const username = `testuser${random}`;
        const password = "test@123";
        await this.username.fill(username);
        await this.password.fill(password);
        await this.confirmPassword.fill(password);
        await this.registerNow.click();
        return username;
    }


}