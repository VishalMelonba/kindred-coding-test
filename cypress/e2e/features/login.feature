@Regression
Feature: Login page

  Background:
    Given A user lands on the "login_page"

  @KCT-1
  Scenario: Success Logi
    When A user logs in as "standard_user"
    Then The url contains the "products_page" subdirectory
    And The page title "Products" is displayed

  @KCT-2
  Scenario: Incorrect Username Login
    When A user logs in as "standard_user_with_wrong_password"
    Then The login error message "Epic sadface: Username and password do not match any user in this service" is displayed
