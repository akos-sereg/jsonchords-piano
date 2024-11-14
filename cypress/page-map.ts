/**
 * This file contains selectors of the web app. Ideally, this file should be the only source of selectors (eg. avoid
 * using selectors in E2E tests).
 */
export const PageMap = {
  home: {
    container: '.container-fluid'
  },
  authors: {
    title: 'h1',
    addAuthorButton: 'a[data-automation-id="add-author-button"]',
    authorForm: {
      firstNameText: 'input[data-automation-id="first-name-textfield"]',
      lastNameText: 'input[data-automation-id="last-name-textfield"]',
      saveButton: 'input[data-automation-id="save-author-button"]',
      textInputError: 'div[data-automation-id="textinput-error"]'
    },
    authorList: {
      items: 'td[data-automation-id="author-list-item"]',
      ids: 'a[data-automation-id="author-list-item-id"]',
      deleteIds: 'a[data-automation-id="author-list-item-delete-button"]'
    }
  },
  about: {
    title: 'h1'
  },
  error: {
    errorBoundaryText: 'div[data-automation-id="error-boundary-text"]'
  }
};
