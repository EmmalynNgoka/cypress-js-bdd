class HomePage {
  clickRegister() {
    cy.get('a').contains(/register/i).click();
  }
}

export default HomePage;