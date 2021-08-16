import languages from '..';

export const authFormSelectors = (language, value) =>
  languages[language].pages.authPage.authForm[value];
export const authFormPlaceholders = (language, value) =>
  languages[language].pages.authPage.authForm.placeholders[value];
export const authFormBtnSelectors = (language, value) =>
  languages[language].pages.authPage.authForm.buttons[value];
