import {test, expect} from '@playwright/test';
import RegisterPage from '../pages/RegisterPage.js';
import HomePage from '../pages/HomePage.js';

let registerPage;
let homePage;

test.beforeEach('Setup Method', async({page}) => {

    homePage = new HomePage(page);
    registerPage = new RegisterPage(page);

    await homePage.openURL();

});


test('New User Registration', async ({ page }) => {

    await homePage.clickOnRegister();

    const username = await registerPage.registerUser();  

    console.log(`✅ New user registered: ${username}`);

});
