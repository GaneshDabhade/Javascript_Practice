// import {test, expect} from '@playwright/test'

// test('Validate Home Page', async ({page})=>{
//     const url = 'https://demo.nopcommerce.com/'
//     await page.goto(url);

//     // Put assertions to validate page elements.
//     await expect(page).toHaveURL(url);
//     await expect(page).toHaveTitle('nopCommerce demo store');

//     // Click on register link
//     const registerLink = page.locator('.ico-register');
//     await registerLink.click();

//     // Check substring present
//     await expect(page.locator("(//strong)[1]")).toContainText('Personal1231');

//     // Check the complete string
//     await expect(page.locator("(//strong)[1]")).toHaveText('Your Personal Details');

//     await expect(page.locator("(//strong)[1]")).not.toHaveText('My Personal Details');

//     // Select Male radio button
//     const maleRadioButton = page.locator("//label[normalize-space()='Male']");
//     const femaleRadioButton = page.locator("//label[normalize-space()='Female']")
//     await maleRadioButton.click();

//     // Validate male & female radio button status
//     await expect(maleRadioButton).toBeChecked();
//     await expect(femaleRadioButton).not.toBeChecked();
// });