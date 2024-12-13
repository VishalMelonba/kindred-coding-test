import {
    When,
    Then
} from '@badeball/cypress-cucumber-preprocessor'

import '../../support/defineParameterTypes'
import {productsPage} from "@pages/ProductsPage";
import {helpers} from "@helpers";

// Click on Add to Card button.
When('A user adds {text} to the cart', (itemName: string) => {
    productsPage.addToCartByItemName(itemName)
})

Then('The count of displayed products is {int} in the product list', (int:number) => {
    helpers.verifyCount(productsPage.elements.productItemTitle(), int)
    helpers.verifyCount(productsPage.elements.productItemDescription(), int)
    helpers.verifyCount(productsPage.elements.productItemImg(), int)
    helpers.verifyCount(productsPage.elements.productItemPrice(), int)
    helpers.verifyCount(productsPage.elements.addToCartBtn(), int)
})

Then('The remove button is {elementCondition} on the products page', (elementCondition:string) => {
    helpers.verifyElementCondition(productsPage.elements.removeBtn(), elementCondition)
})

Then('The sorting dropdown is {elementCondition}', (elementCondition:string) => {
    helpers.verifyElementCondition(productsPage.elements.sortDropdown(), elementCondition)
})