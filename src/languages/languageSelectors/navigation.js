import languages from '..';

export const navSelectors = (language, value) =>
  languages[language].header.navigation[value].toUpperCase();
