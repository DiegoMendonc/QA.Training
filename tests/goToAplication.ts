import { Page } from '@playwright/test';

// Função auxiliar para acessar a página
async function goToAplication(page: Page) {
    await page.goto('http://localhost:3000/Todo-List#/all-tasks');
}

export { goToAplication }
