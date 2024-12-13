import {
    When,
    Then
} from '@badeball/cypress-cucumber-preprocessor'

import '../../support/defineParameterTypes'
import {users} from "../test_data/Users";
import {helpers} from "@helpers";
import {loginPage} from "@pages/LoginPage";

let fixtureUsers: any;

before(() => {
    // Load the fixture and add extra users if needed
    users.loadFixtureUsers().then((data) => {
        fixtureUsers = data;
    });
});


When('A user logs in as "{user}"', (userType: string) => {
    const user = fixtureUsers[userType];

    if (!user) {
        throw new Error(`User type "${userType}" not found in fixture data`);
    }

    loginPage.submitLogin(user.username, user.password);
});

Then('The login error message {string} is {elementCondition}', (errorMessage: string, elementCondition: string) => {
    helpers.verifyElementCondition(loginPage.elements.errorMessage(), elementCondition)
    helpers.verifyText(loginPage.elements.errorMessage(), errorMessage)
})

