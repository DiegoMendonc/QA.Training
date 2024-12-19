import { Page } from '@playwright/test';

export class CorrectCredential {
    constructor(private page: Page) {}

    async goto() {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('//*[@id="login-button"]').click();
    }
}
