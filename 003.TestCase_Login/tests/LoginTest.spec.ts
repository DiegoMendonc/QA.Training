import { test, expect } from '@playwright/test';
import { LoginPage } from './LoginCredential';

test.describe('Login Tests', () => {
  
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
    });

    test('Deve logar com credenciais válidas', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login('usuario_valido', 'senha_valida');
        // Adicione verificação adicional para garantir que o login foi bem-sucedido
        expect(await page.url()).toBe('https://www.saucedemo.com/v1/inventory.html'); // Substitua pela URL esperada após o login
    });

    test('Deve mostrar mensagem de erro com credenciais inválidas', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.login('usuario_invalido', 'senha_invalida');
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toBe('Credenciais inválidas'); // Substitua pela mensagem de erro esperada
    });
});

