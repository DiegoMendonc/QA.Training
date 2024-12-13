import { expect, test } from "@playwright/test";

test('The user login with sucess', async ({ page }) => {

    

    await page.locator('//*[@id="login-button"]').click();
    await expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');

    const productTitle = await page.locator('.header_secondary_container > span');
    await expect(productTitle).toHaveText('Products');
});

test('the user inserts wrong credentials', async({ page }) =>{

    await page.goto('https://www.saucedemo.com/');
    await expect(await page.title()).toBe('Swag Labs');

    await page.locator('[data-test="username"]').fill('wrongUser');
    await page.locator('[data-test="password"]').fill('wrongPassword');

    await page.locator('//*[@id="login-button"]').click();
    const errorText = await page.getByText('Epic sadface: Username and password do not match any user in this service');

    await expect(errorText).toBeVisible();
})