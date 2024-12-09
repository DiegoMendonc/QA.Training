# Projeto de Testes Automatizados com Playwright

Este projeto utiliza a ferramenta Playwright para realizar testes automatizados de interface de usuário (UI) em uma aplicação de TODO List. A base dos testes abrange operações de CRUD, filtragem de tarefas, verificação de visualização e cálculo de progresso de tarefas concluídas.

## Repositório Utilizado

- **Repositório Base da Aplicação a ser testada:** [Todo-List](https://github.com/ZiadSheriif/Todo-List):

## Índice

1. [Requisitos](#requisitos)
2. [Instalação](#instalação)
3. [Configuração](#configuração)
4. [Execução dos Testes](#execução-dos-testes)
5. [Descrição dos Testes](#descrição-dos-testes)
    - [CRUD de TODO](#crud-de-todo)
    - [Filtrar TODO](#filtrar-todo)
    - [Verificar Filtros de Tarefas](#verificar-filtros-de-tarefas)
    - [Alterar Visualização](#alterar-visualização)
    - [Completar TODO](#completar-todo)
    - [Verificar Progresso de Tarefas](#verificar-progresso-de-tarefas)
6. [Casos de Uso dos Testes](#casos-de-uso-dos-testes)

## Requisitos

- Node.js (versão 14 ou superior)
- NPM ou Yarn
- Playwright
- TypeScript

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/DiegoMendonc/QA.Training/tree/main/002.PLAYWRIGHT
cd 002.PLAYWRIGHT
npm install
```
## Configuração
Certifique-se de que o Playwright está configurado corretamente. Você pode inicializar o Playwright com o comando abaixo:

```bash
npx playwright install
Execução dos Testes
Para executar os testes, use o comando:
```
```bash
npm run test
Para abrir o relatório HTML dos testes, use o comando:
```
```bash
npm run report
```
# # Descrição dos Testes
- CRUD de TODO
    Este teste cobre a criação, leitura, atualização e exclusão de tarefas na aplicação TODO List.

- Filtrar TODO
    Este teste verifica a funcionalidade de filtragem das tarefas.

- Verificar Filtros de Tarefas
    Este teste verifica se os filtros "Today's Tasks", "Important Tasks", "Completed Tasks" e "Uncompleted Tasks" estão funcionando corretamente.

- Alterar Visualização
    Este teste verifica se a alteração entre visualização em lista e grid está funcionando corretamente.

- Completar TODO
    Este teste cobre a funcionalidade de marcar uma tarefa como concluída.

- Verificar Progresso de Tarefas
    Este teste verifica se o progresso das tarefas concluídas está sendo calculado corretamente.

## Casos de Uso dos Testes
- Caso de Uso 1: CRUD de TODO
    Descrição: O usuário deve ser capaz de criar, visualizar, editar e excluir tarefas na aplicação.

        Passos:

            Criar uma nova tarefa.

            Verificar se a tarefa foi criada.

            Atualizar a tarefa.

            Verificar se a tarefa foi atualizada.

            Excluir a tarefa.

            Verificar se a tarefa foi excluída.

- Caso de Uso 2: Filtrar TODO
    Descrição: O usuário deve ser capaz de filtrar as tarefas com base em critérios específicos.

        Passos:

            Aplicar um filtro de tarefas.

            Verificar se apenas as tarefas que atendem ao critério do filtro são exibidas.

- Caso de Uso 3: Verificar Filtros de Tarefas
    Descrição: O usuário deve ser capaz de usar filtros como "Today's Tasks", "Important Tasks", "Completed Tasks" e "Uncompleted Tasks" corretamente.

        Passos:

            Aplicar cada filtro.

            Verificar se os resultados correspondem ao filtro aplicado.

- Caso de Uso 4: Alterar Visualização
    Descrição: O usuário deve ser capaz de alternar entre as visualizações de lista e grid.

        Passos:

            Alterar a visualização para lista.

            Verificar se a visualização está em lista.

            Alterar a visualização para grid.

            Verificar se a visualização está em grid.

- Caso de Uso 5: Completar TODO
    Descrição: O usuário deve ser capaz de marcar uma tarefa como concluída.

        Passos:

            Marcar uma tarefa como concluída.

            Verificar se a tarefa está marcada como concluída.

- Caso de Uso 6: Verificar Progresso de Tarefas
    Descrição: O usuário deve ser capaz de ver o progresso das tarefas concluídas.

        Passos:

            Marcar tarefas como concluídas.

            Verificar se a porcentagem de conclusão é atualizada corretamente.

Para mais informações sobre Playwright, consulte a [documentação oficial](https://playwright.dev/).