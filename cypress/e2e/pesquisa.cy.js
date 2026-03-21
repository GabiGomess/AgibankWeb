import '@shelex/cypress-allure-plugin';
import PesquisaPage from '../support/pages/PesquisaPage';

describe('Funcionalidade de Busca - Blog do Agi', () => {
  const pesquisaPage = new PesquisaPage();

  beforeEach(() => {
    pesquisaPage.visit();
  });

  it('Deve buscar um artigo com sucesso', () => {
    const termo = 'Empréstimo';
    pesquisaPage.pesquisarPor(termo);

    cy.contains('Resultados encontrados para: ' + termo).should('be.visible'); 
    cy.get('article').should('have.length.at.least', 1);
  });

  it('Deve exibir mensagem amigável ao não encontrar resultados', () => {
    const termo = '999999999';
    pesquisaPage.pesquisarPor(termo);

    cy.contains('Resultados encontrados para: ' + termo).should('be.visible');
    cy.xpath('//div[@class="page-content"]/p').should('contain', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.');
  });
});