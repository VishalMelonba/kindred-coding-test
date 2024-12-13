import {helpers} from "@helpers";

const Users = {
    loadFixtureUsers: () => {
        return cy.fixture('users').then((fixtureUsers) => {
            return {
                ...fixtureUsers,
                standard_user_with_wrong_password: {
                    username: fixtureUsers.standard_user.username,
                    password: helpers.getRandomString(10)
                }
            };
        });
    }
};


export const users = Users
