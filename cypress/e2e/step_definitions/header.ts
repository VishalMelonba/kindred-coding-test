import {
    Then,
    When
} from '@badeball/cypress-cucumber-preprocessor'
import '../../support/defineParameterTypes'
import {headerPage} from "@pages/HeaderPage";
import {helpers} from "@helpers";


//Clicks on the cart
When('A user clicks on the cart', () => {
    headerPage.goToCart()
})

Then('The header is {elementCondition} with Logo, Cart and Burger Menu Icon', (elementCondition: string) => {
    helpers.verifyElementCondition(headerPage.elements.burgerMenuIcon(), elementCondition)
    helpers.verifyElementCondition(headerPage.elements.logoText(), elementCondition)
    helpers.verifyText(headerPage.elements.logoText(), 'Swag Labs')
    helpers.verifyElementCondition(headerPage.elements.shoppingCartLink(), elementCondition)
})

Then('The shopping cart counter is "{int}" item(s)', (count: number) => {
    helpers.verifyCount(headerPage.elements.shoppingCartCount(), count)
})
