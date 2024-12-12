import { Page } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('https://www.saucedemo.com/v1/');
    }

    async login(username: string, password: string) {
        await this.page.fill('input[data-test="username"]', username);
        await this.page.fill('input[data-test="password"]', password);
        await this.page.click('[class="btn_action"]');
    }
};
