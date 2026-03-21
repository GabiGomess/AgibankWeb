class PesquisaPage {
  visit() {
    cy.visit('https://blogdoagi.com.br/');
  }

  pesquisarPor(termo) {
    cy.xpath('//a[@aria-label="Search button"]').click({force: true}); 
    // Clica no ícone de busca

    cy.xpath('//input[@placeholder="Search..."]').type(`${termo}{enter}`, {force: true}); // Digita e dá Enter

    cy.wait(3000); // Wait for page to load

    cy.scrollTo('bottom');
  }
}
export default PesquisaPage;