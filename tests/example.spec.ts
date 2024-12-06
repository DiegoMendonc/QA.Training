import { test, expect } from '@playwright/test';

test.describe('CRUD de To-Do List', () => 
    // Antes de cada teste, navegue até a URL base da aplicação
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000/Todo-List#/all-tasks');
    });

    //1º Teste -> Criando uma nova tarefa - CREATE
    test('Deve criar uma nova tarefa', async ({ page }) => {
        await page.fill('#new-todo-input', 'Comprar leite');
        await page.click('#add-todo-button');
        const todoText = await page.textContent('.todo-item:last-child');
        expect(todoText).toBe('Comprar leite');
    });

    //2º Teste -> Visualizar a tarefa adicionada - READ
    test('Deve ler a tarefa adicionada', async ({ page }) => {
        const todoText = await page.textContent('.todo-item:last-child');
        expect(todoText).toBe('Comprar leite');
    });
    
    //3º Teste -> Deverá atualizar a tarefa adicionada - UPDATE
    test('Deve atualizar uma tarefa', async ({ page }) => {
        await page.click('.todo-item:last-child .edit-button');
        await page.fill('.todo-item:last-child .edit-input', 'Comprar pão');
        await page.click('.todo-item:last-child .save-button');
        const todoText = await page.textContent('.todo-item:last-child');
        expect(todoText).toBe('Comprar pão');
    });

    //4º Teste -> Deverá deletar a tarefa criada - DELETE
    test('Deve deletar uma tarefa', async ({ page }) => {
        await page.click('.todo-item:last-child .delete-button');
        const todoItems = await page.$$('.todo-item');
        expect(todoItems.length).toBe(0);
    });
);
