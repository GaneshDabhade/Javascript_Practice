import {test, expect} from '@playwright/test';

// test('Login Test', async ({page})=>{
//   await page.goto("https://opensource-demo.orangehrmlive.com/");
//   await page.waitForLoadState('load');

//   // Locate username inputbox and enter the username text.
//   // await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').fill("Admin");
//   await page.fill('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input', "Admin");

//   // Locate Password input box and enter the password.
//   // await page.locator("//input[@name='password']").fill("admin123")
//   await page.fill("//input[@name='password']", 'admin123');

//   // Locate Login button and click it.
//   // await page.locator('//button[@type="submit"]').click();
//   await page.click('//button[@type="submit"]');

//   //Validate if dashboard text is visible.
//   await expect(page.locator('//*[@id="app"]/div[1]/div[1]/header/div[1]/div[1]/span/h6')).toBeVisible(); 
// })

test('Login Test with Builtin Locators', async ({page})=>{
  await page.goto("https://opensource-demo.orangehrmlive.com/");
  await page.waitForLoadState('load');

  await expect(page.getByAltText("company-branding")).toBeVisible();

  await page.getByPlaceholder("Username").fill("Admin");

  await page.getByPlaceholder("Password").fill("admin123");

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});