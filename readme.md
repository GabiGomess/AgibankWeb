# Automação de Testes - Blog do Agi (QA Web)

Projeto de automação de testes para a funcionalidade de busca do Blog do Agi, utilizando **Cypress** e o padrão **Page Objects**.

## 🛠️ Pré-requisitos
- Node.js instalado (v16 ou superior)
- NPM ou Yarn

## 🚀 Instalação e Execução
1. Clone o repositório:
   `git clone git@github.com:GabiGomess/AgibankWeb.git`
2. Instale as dependências:
   `npm install`
3. Execute os testes em modo interface (GUI):
   `npx cypress open`
4. Execute os testes em modo headless (Terminal):
   `npx cypress run`

Para gerar relatórios
5. Execute os testes com allure
   `npm run cy:run:allure && npm run allure:generate`
6. Abra o relatório em uma aba do navegador
   `npm run allure:open`

## 🏗️ Estrutura do Projeto
- `cypress/e2e/`: Scripts de teste funcionais.
- `cypress/support/pages/`: Implementação do Page Object Pattern.
- `.github/workflows/`: Configuração de CI via GitHub Actions.
