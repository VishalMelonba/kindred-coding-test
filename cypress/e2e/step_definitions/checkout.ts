import {
    When,
    Then
} from '@badeball/cypress-cucumber-preprocessor'
import '../../support/defineParameterTypes'
import {checkoutPage} from "@pages/CheckoutPage";
import {helpers} from "@helpers";
import {CheckoutButton} from "@pages/CheckoutButtonTypes";

When('A user clicks the "{text}" button', (buttonText: string) => {
    const button: CheckoutButton = buttonText.toLowerCase() as CheckoutButton;
    checkoutPage.clickOnBtn(button);
});

When('A user enters checkout details:', (table: any) => {
    table.hashes().forEach((row: { firstName: string; lastName: string; zipCode: string; }) => {
        cy.log(row.firstName)
        cy.log(row.lastName)
        cy.log(row.zipCode)
        checkoutPage.enterCheckoutData(row.firstName, row.lastName, row.zipCode)
    })
})

Then('The product details are displayed:', (table: any) => {
    table.hashes().forEach((row: { title: string; description: string; price: string; }) => {
        cy.log(row.title)
        cy.log(row.description)
        cy.log(row.price)
        helpers.verifyText(checkoutPage.elements.productItemTitle(), row.title)
        helpers.verifyText(checkoutPage.elements.productItemDescription(), row.description)
        helpers.verifyText(checkoutPage.elements.productItemPrice(), row.price)
    })
})

Then('The order summary is displayed with price "{text}" and tax "{text}"', (price: string, tax: string) => {
    helpers.verifyText(checkoutPage.elements.paymentAndShipmentInfo(), 'SauceCard #31337')
    helpers.verifyText(checkoutPage.elements.paymentAndShipmentInfo(), 'Free Pony Express Delivery!')
    helpers.verifyText(checkoutPage.elements.itemPriceSummary(), price)
    helpers.verifyText(checkoutPage.elements.taxSummary(), tax)
    helpers.verifyText(checkoutPage.elements.summaryLabelsTotal(), (+price + +tax).toFixed(2))
})
Then('The summary checkout labels are displayed', () => {
    helpers.verifyText(checkoutPage.elements.summaryLabels(), 'Payment Information')
    helpers.verifyText(checkoutPage.elements.summaryLabels(), 'Shipping Information')
    helpers.verifyText(checkoutPage.elements.summaryLabels(), 'Price Total')
    helpers.verifyText(checkoutPage.elements.summaryLabelsTotal(), 'Total:')
})

Then('The order confirmation page is {elementCondition}', (elementCondition: string) => {
    helpers.verifyElementCondition(checkoutPage.elements.completedOrderImg(), elementCondition)
    helpers.verifyElementCondition(checkoutPage.elements.completedOrderBackHomeBtn(), elementCondition)
    helpers.verifyText(checkoutPage.elements.completedOrderThankYouMessage(), 'Thank you for your order!')
    helpers.verifyText(checkoutPage.elements.completedOrderInfoMessage(), 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
})

Then('The buttons Remove, Continue shopping and Checkout are {elementCondition} on the checkout page', (elementCondition: string) => {
    helpers.verifyElementCondition(checkoutPage.elements.removeBtn(), elementCondition)
    helpers.verifyElementCondition(checkoutPage.elements.continueShoppingBtn(), elementCondition)
    helpers.verifyElementCondition(checkoutPage.elements.checkoutBtn(), elementCondition)
})
