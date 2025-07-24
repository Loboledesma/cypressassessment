// cypress/pages/CartPage.js
class CartPage {
  openCartAside() {
    cy.get('[data-at="cart-opener"]').click({ force: true });
  }

  addProductByName(name) {
    cy.contains(name).click();
    cy.contains('Añadir al carrito').click();
  }

  assertProductInCart(name) {
    this.openCartAside();
    cy.contains(name).should('exist');
  }

  goToCheckout() {
  cy.get('button:contains("Ir al checkout")').click({ force: true });
  cy.url().should('include', '/checkout');
}
}

export default new CartPage();

