import {faker} from '@faker-js/faker';
import Chainable = Cypress.Chainable;


const Helpers = {

    getRandomString(length: number): string {
        return faker.string.alphanumeric(length);
    },

    verifyElementCondition(elem: Chainable<JQuery>, elementCondition: string) {
        const supportedElementConditions = ['displayed', 'not displayed', 'not existing']
        switch (elementCondition) {
            case 'displayed':
                return elem.should('be.visible')
            case 'not displayed':
                return elem.should('not.be.visible')
            case 'not existing':
                return elem.should('not.exist')

            default:
                throw new Error(`Element condition: '${elementCondition}' is not supported. Only the following element conditions are supported: ${supportedElementConditions.join(', ')}`)
        }
    },

    verifyText(elem: Chainable<JQuery>, text: string) {
        return elem.should('contain.text', text)
    },
    /**
     * Verify count of elements
     *
     * @param elem - Cypress element to get
     * @param count - integer
     */
    verifyCount(elem: Chainable<JQuery>, count: number) {
        return elem.should('have.length', count)
    },
}

export const helpers = Helpers
