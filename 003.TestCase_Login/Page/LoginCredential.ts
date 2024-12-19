import { Page } from '@playwright/test';

export class LoginCredential {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('https://www.saucedemo.com/v1/');
    }

    async login(username: string, password: string) {
        await this.page.locator('input[data-test="username"]').fill(username);
        await this.page.locator('input[data-test="password"]').fill(password);
        await this.page.click('[class="btn_action"]');
    }
    async logincorrect() {
        await this.page.locator('input[data-test="username"]').fill('standard_user');
        await this.page.locator('input[data-test="password"]').fill('secret_sauce');
        await this.page.click('[class="btn_action"]');
};
};