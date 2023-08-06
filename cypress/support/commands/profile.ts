export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asaf' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'user',
            age: 24,
            currency: 'RUB',
            country: 'Russia',
            city: 'Ekaterinburg',
            username: 'testuser',
            avatar: 'https://static.wikia.nocookie.net/822f0ba7-1d6d-48e7-9a1d-96a0c662d4cd',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
