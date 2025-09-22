Feature: Tesco Registration

  Scenario Outline: Register with different user data
    Given I am on the Tesco homepage
    When I click the Register link
    And I enter "<email>" and "<password>"
    Then I should see the registration outcome

    Examples:
      | email                | password     |
      | testuser@test.com    | Password123! |
      | not-an-email         | Password123! |
