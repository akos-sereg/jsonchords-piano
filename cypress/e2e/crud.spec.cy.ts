import { WEBAPP_URL_ROOT } from '../constants';
import { PageMap } from '../page-map';
import HashLinkService from '../../app/services/HashLinkService';

describe('CRUD operations', () => {
  it('creates and reads author', () => {
    cy.visit(`${WEBAPP_URL_ROOT}${HashLinkService.getAuthorsLink()}`);

    // arrange: navigate to add author screen
    cy.get(PageMap.authors.addAuthorButton).click();
    cy.url().should('eq', `${WEBAPP_URL_ROOT}${HashLinkService.getAddAuthorLink()}`);

    // populate form
    cy.get(PageMap.authors.authorForm.firstNameText).type('Paul');
    cy.get(PageMap.authors.authorForm.lastNameText).type('MaudDib');

    // act: save
    cy.get(PageMap.authors.authorForm.saveButton).click();
    cy.url().should('eq', `${WEBAPP_URL_ROOT}${HashLinkService.getAuthorsLink()}`);

    // assert: check if newly added author is in the list
    cy.get(PageMap.authors.authorList.items).should('have.length', 4);
    cy.get(PageMap.authors.authorList.ids).contains('paul-mauddib');
  });

  it('deletes a specific author', () => {
    cy.visit(`${WEBAPP_URL_ROOT}${HashLinkService.getAuthorsLink()}`);

    cy.get(PageMap.authors.authorList.deleteIds).should('have.length', 3);
    cy.get(PageMap.authors.authorList.deleteIds).first().click();
    cy.get(PageMap.authors.authorList.deleteIds).should('have.length', 2);
  });

  it('updates a specific author', () => {
    cy.visit(`${WEBAPP_URL_ROOT}${HashLinkService.getAuthorsLink()}`);

    cy.get(PageMap.authors.authorList.ids).should('have.length', 3);
    cy.get(PageMap.authors.authorList.ids).first().click();
    cy.url().should('eq', `${WEBAPP_URL_ROOT}${HashLinkService.getAuthorLink('cory-house')}`);

    cy.get(PageMap.authors.authorForm.firstNameText).type(' the Greatest');
    cy.get(PageMap.authors.authorForm.lastNameText).type('X');

    cy.get(PageMap.authors.authorForm.saveButton).click();
    cy.url().should('eq', `${WEBAPP_URL_ROOT}${HashLinkService.getAuthorsLink()}`);

    cy.get(PageMap.authors.authorList.items).contains('Cory the Greatest HouseX');
  });
});
