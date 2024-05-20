

Cypress.Commands.add('isExistElement', selector => {
    cy.get('body').then(($el) => {
      if ($el.find(selector).length > 0) {
        cy.wrap(true).as('exists')
      } else {
        cy.wrap(false).as('not exists')
      }
    })
  });





