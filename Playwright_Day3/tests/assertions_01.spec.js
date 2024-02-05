import {test, expect} from '@playwright/test';

test('Login Test', async ({page})=>{
    const pageUrl = 'https://demo.nopcommerce.com/';

    await page.goto(pageUrl);

    // Put Assertions to validate page is loaded correctly. 
    await expect(page).toHaveURL(pageUrl);
    await expect(page).toHaveTitle('nopCommerce demo store_1234');
    await expect(page.locator("//span[@class='cart-qty']")).toContainText('(0)');

    // Register a user
    await page.locator("//a[normalize-space()='Register']").click();
    await expect(page.locator("//h1[normalize-space()='Register']")).toContainText("Register");

    // Select Gender
    await page.locator('//input[@value="M"]').check();
    await expect(page.locator('//input[@value="M"]')).toBeChecked();
    await expect(page.locator('//input[@value="F"]')).not.toBeChecked();
    
    // Enter basic details
    await page.locator("//input[@id='FirstName']").fill('Ganesh');
    await page.locator("//input[@id='LastName']").fill('Dabhade');
    await page.locator('//input[@name="Email"]').fill('abc@xyz.com');

    // Uncheck the newsletter checkbox
    await page.locator('//input[@id="Newsletter"]').uncheck();

    // Enter password
    await page.locator('//input[@id="Password"]').fill('123456');
    await page.locator('//input[@id="ConfirmPassword"]').fill('123456');

    // Click on Register button
    await expect(page.locator('//button[@id="register-button"]')).toBeEnabled();
    await page.locator('//button[@id="register-button"]').click();

    await page.waitForTimeout(10000);
})