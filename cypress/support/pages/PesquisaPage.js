class PesquisaPage {
  visit() {
    cy.visit('https://blogdoagi.com.br/');
  }

  pesquisarPor(termo) {
    cy.xpath('//a[@aria-label="Search button"]').as('btn').click({force: true}); 
    cy.get('@btn').click()// Clica no ícone de busca

    cy.xpath('//input[@placeholder="Search..."]').type(`${termo}{enter}`, {force: true}); // Digita e dá Enter

    cy.scrollTo('bottom');
  }
}
export default PesquisaPage;