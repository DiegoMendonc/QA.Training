import { test, expect } from '@playwright/test';
import { goToAplication } from './goToAplication';

test('Deverá criar uma nova tarefa - CREATE', async ({ page }) => {
  // Acessando a página
  await goToAplication(page);

  // Clicar no botão de criar
  const createButton = page.locator('[class="sc-jIRcFI bRpOYQ btn btn-primary"]');
  await createButton.click();

  // Preencher o novo cartão
  const inputField = page.locator('input[placeholder="e.g: study for the test"]');
  await inputField.fill('Teste01');

  // Verificar se o valor foi inserido corretamente (opcional)
  const inputValue = await inputField.inputValue();
  expect(inputValue).toBe('Teste01');

  // Clicar no botão de submissão
  const submitButton = page.locator('[class="sc-bqWxrE eXwWtY btn btn-primary"]');
  await submitButton.click();
  await page.waitForSelector('text=Teste01');

  // Recarregar a página
  await page.reload();

  // Verificar se a página foi recarregada corretamente
  await expect(page).toHaveURL('http://localhost:3000/Todo-List#/all-tasks')
});



//Visualizando o card criado - READ
test('Deverá visualizar uma tarefa - READ', async ({ page }) => {

  await goToAplication(page);
  //expect(await page.locator())

});

//Atualizando o card criado - Update
test('Deverá atualizar uma tarefa - UPDATE', async ({ page }) => {

  await goToAplication(page);
  //expect(await page.locator())

});

//Deletando o card criado - DELETE
test('Deverá deletar uma tarefa - DELETE', async ({ page }) => {

  await goToAplication(page);
  await page.getByPlaceholder('http://www.w3.org/2000/svg').click();
  //expect(await page.locator())

});