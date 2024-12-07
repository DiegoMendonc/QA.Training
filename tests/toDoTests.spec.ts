import { test, expect } from '@playwright/test';

  //Iniciando o CRUD Test - Create
test('Deverá criar uma nova tarefa - CREATE', async ({ page }) => {

  //Acessando a página
  await page.goto('http://localhost:3000/Todo-List#/all-tasks');

  //Localizando o botão e clicando no botão
  await page.locator('[class="sc-jIRcFI bRpOYQ btn btn-primary"]').click();

  //Preenchendo o novo cartão
  await page.fill('input[placeholder="e.g: study for the test"]', 'Teste01');

  //Verificando se o valor foi inserido corretamente (opcional)
  const inputValue = await page.inputValue('input[placeholder="e.g: study for the test"]');
  expect(inputValue).toBe('Teste01');

  //Clicando em criar Card To Do
  await page.locator('[class="sc-bqWxrE eXwWtY btn btn-primary"]').click();
});
