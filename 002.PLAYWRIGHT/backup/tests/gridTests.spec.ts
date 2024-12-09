import { test, expect } from '@playwright/test';
import { goToAplication } from './goToAplication';

test('Deverá realizar uma verificação no GRID e List', async ({ page }) => {
    // Acessando a página
    await goToAplication(page);

    //Selecionando o filtro estilo List
    const button01 = page.locator('#root > div > div > div.sc-hLBbgP.dNqfEy > div.sc-iBYQkv.cnwggd > span:nth-child(1) > svg');
    await button01.click();

    //retornar ao estilo GRID
    const button02 = page.locator('#root > div > div > div.sc-hLBbgP.dNqfEy > div.sc-iBYQkv.cnwggd > span:nth-child(2) > svg');
    await button02.click()
});