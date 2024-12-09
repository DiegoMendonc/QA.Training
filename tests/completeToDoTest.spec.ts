import { test, expect } from '@playwright/test';
import { goToAplication } from './goToAplication';

test('Deverá finalizar uma tarefa ToDo - COMPLETE', async ({ page }) => {
  // Acessando a página
    await goToAplication(page);

  //Completando a tarefa:
    const button01 = page.locator('#root > div > div > div.sc-hLBbgP.dNqfEy > div.sc-eDvSVe.gpffcO > div:nth-child(1) > footer > button');
    await button01.click();

    expect(await page.getByText('Task 1'));

});

test('Deverá finalizar uma tarefa ToDo - Campo Update', async ({ page }) => {
    // Acessando a página
    await goToAplication(page);

    //Completando a tarefa:
    const button02 = page.locator('#root > div > div > div.sc-hLBbgP.dNqfEy > div.sc-eDvSVe.gpffcO > div:nth-child(2) > footer > div > span:nth-child(4) > svg');
    await button02.click();

    //Clicando em Editar Tarefa:
    expect(await page.getByText('Task 2'));
    const button03 = page.locator('body > div.fade.sc-jrcTuL.khkKgd.modal.show > div > div > div.sc-eDWCr.gLZpgR.modal-footer > button');
    await button03.click();

});