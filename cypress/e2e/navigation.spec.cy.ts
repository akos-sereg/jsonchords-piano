import { PageMap } from '../page-map';
import { WEBAPP_URL_ROOT } from '../constants';
import HashLinkService from '../../app/services/HashLinkService';

describe('navigate between pages', () => {
  it('opens Home page by default', () => {
    cy.visit(WEBAPP_URL_ROOT);
    cy.get(PageMap.home.container).should('contain', 'Main');
  });

  it('opens About page', () => {
    cy.visit(`${WEBAPP_URL_ROOT}${HashLinkService.getAboutLink()}`);
    cy.get(PageMap.about.title).should('contain', 'About');
  });

  it('opens Authors page', () => {
    cy.visit(`${WEBAPP_URL_ROOT}${HashLinkService.getAuthorsLink()}`);
    cy.get(PageMap.authors.title).should('contain', 'Authors');
  });
});
