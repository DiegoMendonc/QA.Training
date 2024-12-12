import { test, expect } from '@playwright/test';
import { LoginCredential } from './LoginCredential';

test.describe('Login - Swag Labs', () => {
  
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginCredential(page);
    await loginPage.goto();
  });

  test('Correct Credentials - Login Test', async ({ page }) => {
    const loginCredential = new LoginCredential(page);

    await loginCredential.login('standard_user', 'secret_sauce');
    expect(await page.url()).toBe('https://www.saucedemo.com/v1/inventory.html');
    });

  test('Incorrect Credentials - Login test', async ({ page }) => {
    const loginCredential = new LoginCredential(page);
    await loginCredential.login('usuario_invalido', 'senha_invalida');

    expect(await page.locator('data-test="error"')).toBe('Username and password do not match any user in this service');
  });
});