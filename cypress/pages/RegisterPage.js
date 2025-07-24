// cypress/pages/RegisterPage.js
class RegisterPage {
  visit() {
    cy.visit('/auth/signup'); 
  }

  fillForm(email, text, password) {
    cy.get('input[placeholder="Ingresa tu email"]').should('be.visible').type(email);
    cy.get('input[placeholder="Ingresa tu nombre completo"]').should('be.visible').type(text);
    cy.get('input[placeholder="Ingresa tu contraseña"]').should('be.visible').type(password);
    cy.get('input[placeholder="Repite tu contraseña"]').should('be.visible').type(password);
  }

  submit() {
    cy.get('form').submit();
  }

  assertRegistrationSuccess() {
    cy.url().should('include', 'https://www.laboratoriodetesting.com');
  }
}
export default new RegisterPage();
