import { test, expect } from '@playwright/test';
import { goToAplication } from './goToAplication';

test('Deverá realizar um filtro na aplicação - Filter', async ({ page }) => {

    //Acessar a plataforma
    await goToAplication(page)

    //Selecionando o campo de filtro e clicando no mesmo:
    const filterButton = page.locator('[id="sort"]');
    await filterButton.click();
    
    //Selecionando a opção "Priority" 
    await page.selectOption('#sort', 'priority'); 
    
    // Verificar se a opção "Priority" foi selecionada corretamente 
    const selectedOptionPriority = await page.locator('#sort').inputValue(); 
    expect(selectedOptionPriority).toBe('priority')
})