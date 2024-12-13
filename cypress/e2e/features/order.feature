@Regression
Feature: Place an order

  Background:
    Given A user lands on the "login_page"
    And A user logs in as "standard_user"

  @KCT-3
  Scenario: Success Order
    Then The url contains the "products_page" subdirectory
    And The count of displayed products is 6 in the product list
    And The page title "Products" is displayed

    And The sorting dropdown is displayed
    And The header is displayed with Logo, Cart and Burger Menu Icon
    And The footer is displayed with Twitter, LinkedIn, Facebook icons and text info
    When A user adds Sauce Labs Bike Light to the cart

    Then The shopping cart counter is "1" item

    And The remove button is displayed on the products page
    When A user clicks on the cart
    Then The url contains the "cart_page" subdirectory
    And The page title "Your Cart" is displayed
    And The buttons Remove, Continue shopping and Checkout are displayed on the checkout page

    When A user clicks the "Checkout" button
    Then The url contains the "checkout_page" subdirectory
    And The page title "Checkout: Your Information" is displayed

    When A user enters checkout details:
      | firstName | lastName | zipCode |
      | John      | Joe      | 2000    |

    And A user clicks the "Continue" button
    Then The url contains the "checkout_overview" subdirectory
    And The page title "Checkout: Overview" is displayed

    And The product details are displayed:
      | title                 | description                                                                                                                                                     | price |
      | Sauce Labs Bike Light | A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. | 9.99  |
    And The summary checkout labels are displayed
    And The order summary is displayed with price "9.99" and tax "0.80"

    When A user clicks the "Finish" button
    Then The url contains the "checkout_complete" subdirectory
    And The page title "Checkout: Complete!" is displayed

    And The order confirmation page is displayed
    When A user clicks the "Back Home" button

    Then The url contains the "products_page" subdirectory
    And The count of displayed products is 6 in the product list

