let jobsCallback: any;
  
export const searchAndSendAlias = (selector: string, aliasName: string): void => {
  if (typeof jobsCallback === 'undefined') {
    console.error('Error: jobsCallback is not defined.');
  }
    // Check if the element exists
  if (Cypress.$(selector).length > 0) {
    cy.log("element inside if")
    cy.wrap(true).as('success');
    return;
  } else {
    cy.isExistElement('a[aria-label="Go to the next page of results."]').then((exists) => {
      if (exists) {
        cy.get('a[aria-label="Go to the next page of results."]').click();
        searchAndSendAlias(selector, aliasName);
      } else {
        cy.wrap(false).as('failure');
      }
    });
      }
  };

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });


  











