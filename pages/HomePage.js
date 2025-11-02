export default class HomePage{


    constructor(page){
        this.page = page;
        this.registerButton = page.getByRole('button', {name: 'Register'});
        this.LoginButton = page.getByRole('button', {name: 'Login'});
    }

    async openURL(){
        await this.page.goto("https://crio-qkart-frontend-qa.vercel.app/");
    }

    async clickOnRegister(){
        await this.registerButton.click();
    }

    async clickOnLogin(){
        await this.LoginButton.click();
    }



}