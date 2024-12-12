import { Page } from '@playwright/test';

export class LoginCredential {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('https://www.saucedemo.com/v1/');
    }

    async login(username: string, password: string) {
        await this.page.fill('input[data-test="username"]', 'standard_user');
        await this.page.fill('input[data-test="password"]', 'secret_sauce');
        await this.page.click('[class="btn_action"]');
    }

    async getErrorMessage() {
        return await this.page.textContent('Epic sadface: ');
    }
}
