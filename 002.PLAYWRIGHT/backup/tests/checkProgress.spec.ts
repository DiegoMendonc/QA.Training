import { test, expect } from '@playwright/test';
import { goToAplication } from './goToAplication';

test('Deverá checar o andamento da tarefa - Progress Task', async ({ page }) => {
    // Acessando a página
    await goToAplication(page);

    // Verificar e concluir a primeira tarefa
    const button01 = page.locator('#root > div > div > div.sc-hLBbgP.dNqfEy > div.sc-eDvSVe.gpffcO > div:nth-child(1) > footer > button');
    await button01.waitFor({ state: 'visible' });
    await button01.click();

    // Recarregar a página para atualizar o progresso
    await page.reload();

    // Verificar e concluir a segunda tarefa
    const button02 = page.locator('#root > div > div > div.sc-hLBbgP.dNqfEy > div.sc-eDvSVe.gpffcO > div:nth-child(2) > footer > button');
    await button02.waitFor({ state: 'visible' });
    await button02.click();

    // Recarregar a página para atualizar o progresso
    await page.reload();

    // Checar a porcentagem de conclusão
    const progressElement = page.locator('body > div.sc-fLcnxK.fnGQEL.offcanvas.offcanvas-end.show > div.sc-bBABsx.eBzrPW.offcanvas-header > div.sc-kMjNwy.bHWEod > div > div');
    await progressElement.waitFor({ state: 'visible' });

    // Verificar se a porcentagem é 100%
    const progressText = await progressElement.textContent();
    expect(progressText).toContain('100%');

    // Recarregar a página
    await page.reload();
});
