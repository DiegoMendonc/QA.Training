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
  expect(await page.getByText('text=Teste01'));

  // Recarregar a página
  //await page.reload();

  // Verificar se a página foi recarregada corretamente
  //await expect(page).toHaveURL('http://localhost:3000/Todo-List#/all-tasks')
});



//Visualizando o card criado - READ
test('Deverá visualizar uma tarefa - READ', async ({ page }) => {

  await goToAplication(page);
  const button = page.locator('xpath=/html/body/div[1]/div/div/div[2]/div[5]/div[2]/footer/div/span[4]');
  await button.click();

});

//Atualizando o card criado - Update
test('Deverá atualizar uma tarefa - UPDATE', async ({ page }) => {

  //Acessando a plataforma:
  await goToAplication(page);

  //Localizando o botão de visualizar o card ToDo:
  const buttonUpdate = page.locator('#root > div > div > div.sc-hLBbgP.dNqfEy > div.sc-eDvSVe.gpffcO > div:nth-child(1) > footer > div > span:nth-child(3) > svg');
  await buttonUpdate.click();
  expect (await buttonUpdate.getByText('Task 01'));

  //Verificando o campo de input para edição do nome do card ToDo
  const campoPesquisa = page.locator('input[placeholder="e.g: study for the test"]');
  await campoPesquisa.fill('Task Updated');

  //Clicando no botão de editar o card ToDo:
  const submitButton = page.locator('[class="sc-bqWxrE eXwWtY btn btn-primary"]');
  await submitButton.click();
  expect (await page.getByText('Task Updated'));

});

//Deletando o card criado - DELETE
test('Deverá deletar uma tarefa - DELETE', async ({ page }) => {
  
  //Acessar a página;
  await goToAplication(page);
  
  //Clicar no campo DELETE:
  const campoDelete = page.locator('#root > div > div > div.sc-hLBbgP.dNqfEy > div.sc-eDvSVe.gpffcO > div:nth-child(2) > footer > div > span:nth-child(3) > svg');
  await campoDelete.click();
  expect(await page.getByText('Task 2'));

  //Clicar em confirmar a exclusão do ToDo:
  const botaoDelete = page.locator('[class="sc-kgTSHT eaTHhe btn btn-primary"]');
  await botaoDelete.click()

});