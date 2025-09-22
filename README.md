Cypress + Cucumber BDD Framework (Tesco Registration Example)
This project is a Cypress test automation framework with Cucumber BDD using the Page Object Model (POM). It demonstrates navigating to Tesco.com, clicking Register, and entering user details defined in Cucumber scenarios.
📂 Project Structure
cypress.config.js           # Cypress config
package.json                # Dependencies + scripts
cypress/
  e2e/
    features/
      register.feature      # Gherkin scenarios with Examples
    steps/
      register.steps.js     # Step definitions
  pages/
    home.page.js            # Home page object
    register.page.js        # Register page object

⚡ Features
•	Cypress with Cucumber BDD (Gherkin syntax)
•	Page Object Model (POM) for maintainability
•	Data-driven with Scenario Outline & Examples
•	Configured baseURL (https://www.tesco.com/)
•	Runs in headed (interactive) or headless (CI/CD) modes
🚀 Getting Started
1. Install dependencies
npm install
2. Open Cypress in headed mode
npm run test:headed
3. Run all tests headless
npm test
📑 Example Feature File
Feature: Tesco Registration

  Scenario Outline: Register with different user data
    Given I am on the Tesco homepage
    When I click the Register link
    And I enter "<email>" and "<password>"
    Then I should see the registration outcome

    Examples:
      | email              | password     |
      | testuser@test.com  | Password123! |
      | not-an-email       | Password123! |
🛠 Tech Stack
•	Cypress – E2E testing framework
•	Cucumber – BDD (Gherkin)
•	JavaScript (ES modules)
•	Page Object Model (POM)
👩‍💻 Author
**Emmalyn Ngoka**
GitHub: @EmmalynNgoka (https://github.com/Emmalyn
