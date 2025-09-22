class RegisterPage {
  register(email, password) {
    cy.get('input[type="email"]').type(email);
    cy.get('input[type="password"]').type(password);
    cy.contains(/continue|register|create/i).click();
  }
}

export default RegisterPage;
