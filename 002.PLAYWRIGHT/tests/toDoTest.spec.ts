import { test, expect } from '@playwright/test';

// Antes de cada teste, navegue até a URL base da aplicação
test('Show de home page', async ({ page }) => {
    await page.goto('http://localhost:3000/Todo-List#/all-tasks');
})
