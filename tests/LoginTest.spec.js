import {test, expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage.js';
import RegisterPage from '../pages/RegisterPage.js';
import HomePage from '../pages/HomePage.js';

let registerPage;
let homePage;
let loginPage;

test.beforeEach('Setup Method', async({page}) => {

    homePage = new HomePage(page);
    registerPage = new RegisterPage(page);
    loginPage = new LoginPage(page);
    await homePage.openURL();

});

test('Login New User', async ({page}) => {

    await homePage.clickOnRegister();

    const username = await registerPage.registerUser();

    await page.pause();

    await loginPage.loginUser(username, "test@123");
    
});