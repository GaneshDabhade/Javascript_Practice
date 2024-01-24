import {test, expect} from '@playwright/test'

test('Login Test', async ({page})=>{
  await page.goto("https://www.saucedemo.com/");

  await page.waitForLoadState('load');

  // Username
  await page.locator("//html//body//div//div//div[2]//div[1]//div//div//form//div[1]//input").fill("standard_user");

  // await page.locator("xpath").fill("text");
  await page.fill('xpath', 'text');

  // Password
  await page.locator("//html//body//div//div//div[2]//div[1]//div//div//form//div[2]//input").fill("secret_sauce");

  // Login button
  await page.locator('//*[@id="login-button"]').click();

  await page.click('xpath')

  await expect(page.locator("//html//body//div//div//div//div[1]//div[1]//div[1]//div//div[1]//div//button")).toBeVisible();
})

// properties, css locators, xpath Locators

