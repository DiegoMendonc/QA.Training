import { test, expect } from '@playwright/test';
import { goToAplication } from './goToAplication';

test('Deverá testar a funcionalidade do campo - Todays Tasks', async ({ page }) => {

    //Acessar a plataforma
    await goToAplication(page);

    //Selecionando o campo de filtro e clicando no mesmo:
    const fieldButton01 = page.locator('body > div.sc-idXgbr.evthbv.offcanvas.offcanvas-start.show > div.offcanvas-body > a.sc-dmctIk.eKwQCE.active');
    await fieldButton01.click();
    
    expect(await page.getByTitle("Today's Task"));
})

test('Deverá testar a funcionalidade do campo - Important Tasks', async ({ page }) => {

    
    //Acessar a plataforma
    await goToAplication(page);

    //Selecionando o campo de filtro e clicando no mesmo:
    const fieldButton02 = page.locator('body > div.sc-idXgbr.evthbv.offcanvas.offcanvas-start.show > div.offcanvas-body > a:nth-child(3)');
    await fieldButton02.click();
    
    expect(await page.getByTitle("Important Tasks"));

});

test('Deverá testar a funcionalidade do campo - Completed Tasks', async ({ page }) => {

    //Acessar a plataforma
    await goToAplication(page);

    //Selecionando o campo de filtro e clicando no mesmo:
    const fieldButton03 = page.getByText('Completed Tasks');
    await fieldButton03.click();
    
    expect(await page.getByTitle("Completed Tasks"));
});

test('Deverá testar a funcionalidade do campo - Uncompleted Tasks', async ({ page }) => {

    //Acessar a plataforma
    await goToAplication(page);

    //Selecionando o campo de filtro e clicando no mesmo:
    const fieldButton04 = page.getByText('Unompleted Tasks');
    await fieldButton04.click();
    
    expect(await page.getByTitle("Uncompleted Tasks"));
});