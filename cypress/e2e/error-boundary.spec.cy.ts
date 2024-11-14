import { WEBAPP_URL_ROOT } from '../constants';
import { PageMap } from '../page-map';
import HashLinkService from '../../app/services/HashLinkService';

describe('Error Boundary', () => {
  it('is catching error in buggy AuthorForm component', () => {
    cy.visit(`${WEBAPP_URL_ROOT}${HashLinkService.getAuthorsLink()}`);

    cy.get(PageMap.authors.addAuthorButton).click();
    cy.url().should('eq', `${WEBAPP_URL_ROOT}${HashLinkService.getAddAuthorLink()}`);

    cy.get(PageMap.authors.authorForm.firstNameText).type('buggy-0123456789');
    cy.get(PageMap.authors.authorForm.lastNameText).type('Blah');

    cy.get(PageMap.authors.authorForm.saveButton).click();
    cy.url().should('eq', `${WEBAPP_URL_ROOT}${HashLinkService.getAuthorsLink()}`);

    cy.get(PageMap.authors.authorList.items).should('have.length', 4);
    cy.get(PageMap.authors.authorList.ids).contains('buggy-0123456789-blah');

    const authorId = 'buggy-0123456789-blah';
    let updateLink = HashLinkService.getAuthorLink(authorId).replace('/#/', '#/');

    cy.on('uncaught:exception', (err, runnable) => false);
    cy.get(PageMap.authors.authorList.ids).get(`[href="${updateLink}"`).click();
    cy.url().should('eq', `${WEBAPP_URL_ROOT}${HashLinkService.getAuthorLink(authorId)}`);

    cy.get(PageMap.error.errorBoundaryText, { timeout: 2000 }).should('be.visible');

    // make sure that error disappears when we navigate to another author
    cy.visit(`${WEBAPP_URL_ROOT}${HashLinkService.getAuthorsLink()}`);
    cy.get(PageMap.authors.authorList.ids).first().click();
    cy.get(PageMap.error.errorBoundaryText, { timeout: 2000 }).should('have.length', 0);
  });
});
