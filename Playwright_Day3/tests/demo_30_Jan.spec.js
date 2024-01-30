// import {test, expect} from '@playwright/test'

// test('Add to cart workflow', async ({page}) => {
//     await page.goto('https://demo.nopcommerce.com/');
//     page.waitForLoadState('load');

//     // Check for brand name.
//     await expect(page.locator("//img[@alt='nopCommerce demo store']")).toBeVisible();

//     // Click on Add to cart button present below macBook from home page
//     await page.locator('(//button[@class="button-2 product-box-add-to-cart-button"])[2]').click();

//     // Validate product page loaded.
//     await expect(page.locator("div[class='product-name'] h1")).toBeVisible();

//     // Click on add to cart from Apple MacBook Pro 13-inch product page.
//     await page.locator('//button[@class="button-1 add-to-cart-button"]').click();

//     // Click on cart button.
//     await page.locator("//span[@class='cart-label']").click();

//     // Validate item added is visible in cart.
//     await expect(page.locator("//span[@class='sku-number']")).toBeVisible();

// });


import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://demo.nopcommerce.com/');
  await page.getByRole('button', { name: 'Add to cart' }).nth(1).click();
  await page.locator('#add-to-cart-button-4').click();
  await page.getByRole('link', { name: 'Shopping cart (2)' }).click();
  await expect(page.getByText('AP_MBP_13')).toBeVisible();
});
