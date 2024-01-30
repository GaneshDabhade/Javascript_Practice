// import {test, expect} from '@playwright/test'

// test('Login Workflow', async ({page}) => {
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     await page.waitForLoadState('load');

//     // Validate username input box is visible, Then enter username.
//     await expect(page.getByPlaceholder('Username')).toBeVisible();
//     await page.getByPlaceholder('Username').fill('Admin');

//     // Validate the password input box is visible
//     await expect(page.getByPlaceholder('password')).toBeVisible();
//     await page.getByPlaceholder('password').fill('admin123');

//     // Validate Login button is visible and click on it.
//     await expect(page.getByRole('button', {name: 'Login'})).toBeVisible();
//     await page.getByRole('button', {name: 'Login'}).click();

//     await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible();
// });

// Recorded by codegen

import { test, expect } from '@playwright/test';

test('test_By_Codegen', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
});