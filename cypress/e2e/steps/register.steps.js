import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor/methods";
import HomePage from "../../pages/home.page";
import RegisterPage from "../../pages/register.page";

const home = new HomePage();
const register = new RegisterPage();

Given("I am on the Tesco homepage", () => {
  cy.visit("/");
});

When("I click the Register link", () => {
  home.clickRegister();
});

When("I enter {string} and {string}", (email, password) => {
  register.register(email, password);
});

Then("I should see the registration outcome", () => {
  cy.contains("Register").should("be.visible");
});
