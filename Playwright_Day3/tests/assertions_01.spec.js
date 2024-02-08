import {test, expect} from '@playwright/test';
import exp from 'constants';

// test('Login Test', async ({page})=>{
//     const pageUrl = 'https://demo.nopcommerce.com/';

//     await page.goto(pageUrl);

//     // Put Assertions to validate page is loaded correctly. 
//     await expect(page).toHaveURL(pageUrl);
//     await expect(page).toHaveTitle('nopCommerce demo store_1234');
//     await expect(page.locator("//span[@class='cart-qty']")).toContainText('(0)');

//     // Register a user
//     await page.locator("//a[normalize-space()='Register']").click();
//     await expect(page.locator("//h1[normalize-space()='Register']")).toContainText("Register");

//     // Select Gender
//     await page.locator('//input[@value="M"]').check();
//     await expect(page.locator('//input[@value="M"]')).toBeChecked();
//     await expect(page.locator('//input[@value="F"]')).not.toBeChecked();
    
//     // Enter basic details
//     await page.locator("//input[@id='FirstName']").fill('Ganesh');
//     await page.locator("//input[@id='LastName']").fill('Dabhade');
//     await page.locator('//input[@name="Email"]').fill('abc@xyz.com');

//     // Uncheck the newsletter checkbox
//     await page.locator('//input[@id="Newsletter"]').uncheck();

//     // Enter password
//     await page.locator('//input[@id="Password"]').fill('123456');
//     await page.locator('//input[@id="ConfirmPassword"]').fill('123456');

//     // Click on Register button
//     await expect(page.locator('//button[@id="register-button"]')).toBeEnabled();
//     await page.locator('//button[@id="register-button"]').click();

//     await page.waitForTimeout(10000);
// })


// Backquote, Minus, Equal, Backslash, Backspace, Tab, Delete, Escape,
// ArrowDown, End, Enter, Home, Insert, PageDown, PageUp, ArrowRight,
// ArrowUp, F1 - F12, Digit0 - Digit9, KeyA - KeyZ, etc.


test('User Registration', async ({page})=>{
    const pageUrl = 'https://demo.nopcommerce.com/';

    await page.goto(pageUrl);

    // Put Assertions to validate page is loaded correctly. 
    await expect(page).toHaveURL(pageUrl);
    await expect(page).not.toHaveTitle('nopCommerce demo store_1234');
    await expect(page.locator("//span[@class='cart-qty']")).toContainText('(0)');

    // Register a user
    await page.locator("//a[normalize-space()='Register']").click();
    await expect(page.locator("//h1[normalize-space()='Register']")).toContainText("Register");

    // Select Male gender radio button
    await page.locator('//input[@id="gender-male"]').check();
    await expect.soft(page.locator('//input[@id="gender-male"]')).toBeChecked();

    // Enter basic details
    await page.locator("//input[@id='FirstName']").fill('Ganesh');
    await page.locator("//input[@id='LastName']").fill('Dabhade');
    await page.locator('//input[@name="Email"]').fill('abc@xyz.com');

    // Select Date of Birth
    await page.locator('//select[@name="DateOfBirthDay"]').selectOption('21');
    await expect.soft(page.locator('//select[@name="DateOfBirthDay"]')).toContainText('21');

    await page.locator('//select[@name="DateOfBirthMonth"]').selectOption('June');
    await expect.soft(page.locator('//select[@name="DateOfBirthMonth"]')).toContainText('June');

    await page.locator('//select[@name="DateOfBirthYear"]').selectOption('1987');
    await expect.soft(page.locator('//select[@name="DateOfBirthYear"]')).toContainText('1987');

    // Uncheck the news letter checkbox
    await page.locator('//input[@id="Newsletter"]').uncheck();
    await expect.soft(page.locator('//input[@id="Newsletter"]')).not.toBeChecked();

    // Enter password
    const password = 'abcdef';
    await page.locator('//input[@id="Password"]').fill(password);
    await page.locator('//input[@id="ConfirmPassword"]').fill(password);

    // Click on Register
    await page.locator('//button[@id="register-button"]').click();

    await expect.soft(page.locator("//div[@class='result']")).toHaveText('Your registration completed');

    await page.waitForTimeout(10000);

})