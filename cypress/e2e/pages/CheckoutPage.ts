import {productsPage} from "./ProductsPage";
import {CheckoutButton} from "./CheckoutButtonTypes";

class CheckoutPage {
    elements = {
        cancelBtn: () => cy.get('#cancel'),
        checkoutBtn: () => cy.get('#checkout'),
        completedOrderBackHomeBtn: () => cy.get('#back-to-products'),
        completedOrderImg: () => cy.get('img.pony_express'),
        completedOrderInfoMessage: () => cy.get('.complete-text'),
        completedOrderThankYouMessage: () => cy.get('.complete-header'),
        continueBtn: () => cy.get('#continue'),
        continueShoppingBtn: () => cy.get('#continue-shopping'),
        countField: () => cy.get('.cart_quantity'),
        finishBtn: () => cy.get('#finish'),
        firstNameInput: () => cy.get('#first-name'),
        itemPriceSummary: () => cy.get('.summary_subtotal_label'),
        lastNameInput: () => cy.get('#last-name'),
        paymentAndShipmentInfo: () => cy.get('.summary_value_label'),
        productItemDescription: () => productsPage.elements.productItemDescription(),
        productItemPrice: () => productsPage.elements.productItemPrice(),
        productItemTitle: () => productsPage.elements.productItemTitle(),
        removeBtn: () => cy.get('.cart_button'),
        summaryLabels: () => cy.get('.summary_info_label'),
        summaryLabelsTotal: () => cy.get('.summary_total_label'),
        taxSummary: () => cy.get('.summary_tax_label'),
        zipCodeInput: () => cy.get('#postal-code')
    }

    clickOnBtn(button: CheckoutButton): void {
        switch (button) {
            case 'checkout':
                this.elements.checkoutBtn().click();
                break;
            case 'cancel':
                this.elements.cancelBtn().click();
                break;
            case 'continue':
                this.elements.continueBtn().click();
                break;
            case 'continue shopping':
                this.elements.continueShoppingBtn().click();
                break;
            case 'finish':
                this.elements.finishBtn().click();
                break;
            case 'back home':
                this.elements.completedOrderBackHomeBtn().click();
                break;
            default:
                throw new Error(`Button type ${button} is not added to the list of the checkout page locators`);
        }
    }


    enterCheckoutData(firstName: string, lastName: string, zipCode: string) {
        this.elements.firstNameInput().type(firstName)
        this.elements.lastNameInput().type(lastName)
        this.elements.zipCodeInput().type(zipCode)
    }
}

export const checkoutPage = new CheckoutPage()
