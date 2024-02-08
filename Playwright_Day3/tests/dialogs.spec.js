// testautomationpractice.blogspot.com

import {test, expect} from '@playwright/test'

test('Alert Handling', async ({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect.soft(page.locator("button[onclick='myFunctionAlert()']")).toBeVisible();
 
    // Write handler for alert dialog.
    page.on('dialog', async dialog => {
        console.log("Print dialog type: ", dialog.type())
        const dialogMessage = await dialog.message();
        console.log("dialogMessage: ", dialogMessage);
        await page.waitForTimeout(10000);
        await dialog.accept();        
    })

    // Click on alert button.
    await page.locator("button[onclick='myFunctionAlert()']").click();
    await page.waitForTimeout(5000);
})

test('Conformation Dialog Handling', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect.soft(page.locator("button[onclick='myFunctionAlert()']")).toBeVisible();

    // Handler for confirmation dialog
    page.on('dialog', async dialog => {
        const dialogMessage = await dialog.message();
        console.log('Message shown on confirmation dialog is: ', dialogMessage);
        console.log("Print dialog type: ", dialog.type())
        await expect(dialog.message()).toContain('Press a button!');
        await page.waitForTimeout(5000);
        await dialog.dismiss();
    })

    // Launch confirmation dialog
    await page.locator("//button[normalize-space()='Confirm Box']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed Cancel!');
    await page.waitForTimeout(5000);
})

test('Handle Prompt Dialog', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect.soft(page.locator("button[onclick='myFunctionAlert()']")).toBeVisible();

    // Handler for prompt dialog.
    page.on('dialog', async dialog => {
        console.log("Message displayed on dialog window: ", dialog.message());
        console.log("Print dialog type: ", dialog.type())
        await dialog.accept('Ganesh')
    })
    await page.locator("//button[normalize-space()='Prompt']").click();
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Ganesh! How are you today?');
    await page.waitForTimeout(5000);
})