import {searchAndSendAlias } from "../support/utils";

describe('template spec', () => {
  it.skip('passes', () => {
    cy.visit('/')
  })

  it.skip('accept cookies', () => {
      cy.visit("/");
      cy.get('#onetrust-accept-btn-handler').click();
  })
  it.skip('search for a job', () => {
    cy.visit("/");
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('a[href="/job-search-results/"]').click();
    cy.contains('a','Principal Software Engineer in Test').click();
  })

  it('searches for a job in multiple pages', () => {
    cy.visit("/");
    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('a[href="/job-search-results/"]').click();
     var aliasName : string;
    
    const textToSearch = '.jobTitle a:contains("Leader – CRM Solutions")';
    searchAndSendAlias(textToSearch,aliasName);
  });
  
})