import {test, expect} from '@playwright/test';
import HomePage from '../pages/HomePage.js';

let homePage;

test.beforeEach('Setup Method', async ({page}) => {
    homePage = new HomePage(page);
    await homePage.openURL();    
});

test('Go to Registration Page', async({page}) => {

    // const homePage = new HomePage(page);
    // await homePage.openURL();
    await homePage.clickOnRegister();

    const URL = await page.url();
    console.log(URL);
    await expect(page).toHaveURL(URL);

});

test('Go to Login Page', async ({page}) => {

    // const homePage = new HomePage(page);
    // await homePage.openURL();
    await homePage.clickOnLogin();

    const URL = await page.url();
    console.log(URL);
    await expect(page).toHaveURL(URL);
    
});