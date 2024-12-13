import { test, expect } from '@playwright/test';
import { LoginCredential } from './LoginCredential';

test.describe('Login Tests', () => {
  
    test.beforeEach(async ({ page }) => {
        const loginCredential = new LoginCredential(page);
        await loginCredential.goto();
    });

    test('Deve logar com credenciais válidas', async ({ page }) => {
        const loginCredential = new LoginCredential(page);

        await loginCredential.goto();
        await loginCredential.logincorrect();
        expect(await page.url()).toBe('https://www.saucedemo.com/v1/inventory.html');
    });
});