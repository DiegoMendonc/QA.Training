import { test, expect } from '@playwright/test';

test('Deve logar com credenciais válidas', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/v1/');
    
});