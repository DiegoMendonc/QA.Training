import { test, expect } from '@playwright/test';
import { LoginCredential } from './LoginCredential';

test.describe('Login - Swag Labs', () => {
  
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginCredential(page);
        await loginPage.goto();
    });

    test('Deve logar com credenciais válidas', async ({ page }) => {
        const loginCredential = new LoginCredential(page);

        await loginCredential.login('usuario_valido', 'senha_valida');
        expect(await page.url()).toBe('https://www.saucedemo.com/v1/inventory.html');
    });

    test('Deve mostrar mensagem de erro com credenciais inválidas', async ({ page }) => {
        const loginCredential = new LoginCredential(page);
        await loginCredential.login('usuario_invalido', 'senha_invalida');
        const errorMessage = await loginCredential.getErrorMessage();
        expect(errorMessage).toBe('Epic sadface: ');
    });
});

