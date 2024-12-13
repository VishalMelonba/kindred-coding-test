import {
    Given,
    Then
} from '@badeball/cypress-cucumber-preprocessor'
import '../../support/defineParameterTypes'
import {helpers} from "@helpers";
import {productsPage} from "@pages/ProductsPage";

//path - options can be found in e2e/data/urls.js
Given('A user lands on the "{path}"', (path: string) => {
    cy.visit(path)
})

Then('The page title "{text}" is {elementCondition}', (title: string, elementCondition: string) => {
    helpers.verifyElementCondition(productsPage.elements.pageTitle(), elementCondition)
    helpers.verifyText(productsPage.elements.pageTitle(), title)
})

Then('The url contains the "{path}" (sub)directory', (path) => {
    cy.url().should('contains', path)
})
