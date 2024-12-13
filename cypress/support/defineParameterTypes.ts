import {defineParameterType} from '@badeball/cypress-cucumber-preprocessor'
import {urls} from "../e2e/test_data/Urls";


//Used for element conditions. One of the following: displayed, not displayed, not existing
defineParameterType({
    regexp: /[^"]*/,
    name: 'elementCondition',
    transformer: (elementCondition) => {
        const supportedElementConditions = ['displayed', 'not displayed', 'not existing'];
        if (!supportedElementConditions.includes(elementCondition)) {
            throw new Error(`Element Condition: '${elementCondition}' is not supported. Only the following element conditions are supported: ${supportedElementConditions.join(', ')}`);
        }

        return elementCondition;
    }
});

//reading users from Users.ts
defineParameterType({
    regexp: /[^"]*/,
    name: 'user',
    transformer: (userType) => userType
})

//Used for reading urls from Urls.ts
defineParameterType({
    regexp: /[^"]*/,
    name: 'path',
    transformer: (path) => {
        return urls[path]
    }
})

//text values
defineParameterType({
    regexp: /[^"]*/,
    name: 'text',
    transformer: (string) => {
        return string
    }
})

