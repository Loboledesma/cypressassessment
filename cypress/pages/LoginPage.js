// cypress/pages/LoginPage.js
class LoginPage {
  visit() {
    cy.visit('/auth/login');
  }

  fillForm(email, password) {
    cy.get('input[placeholder="Ingresa tu email"]').type(email);
    cy.get('input[placeholder="Ingresa tu contraseña"]').type(password);
  }

  submit() {
    cy.get('[data-at="submit-login"]').click();
  }

  login(email, password) {
    this.fillForm(email, password);
    this.submit();
  }

  assertLoginSuccess() {
    cy.url().should('eq', 'https://www.laboratoriodetesting.com/');}

  assertLoginError() {
    cy.get('[role="dialog"]').should('contain', 'No pudimos iniciar sesión con estas credenciales. Intenta de nuevo.');
  }
}

export default new LoginPage();