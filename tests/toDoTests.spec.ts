import { test, expect } from '@playwright/test';

test('Acessando a plataforma ToDo', async ({ page }) => {
  //Acessando a plataforma ToDo List
  await page.goto('http://localhost:3000/Todo-List#/all-tasks');

  //Verificando a usabilidade do botão Important Tasks button
  await expect(page.getByText('Important Tasks')).toBeVisible();
});