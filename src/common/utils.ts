import {MONTH_NAMES, SHORT_MONTH_LENGTH} from './constants';

export const getMonthName = (date: Date): string => {
  return MONTH_NAMES[date.getMonth()];
};

export const getShortMonthName = (date: Date): string => {
  return getMonthName(date).substring(0, SHORT_MONTH_LENGTH);
};

export const getAbbreviatedDate = (date: Date): string => {
  return `${getShortMonthName(date)} ${date.getDay()}`;
};

// TODO: don't always return en
export const getNavigatorLanguage = () => {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  } else {
    return 'en';
    // return navigator.userLanguage || navigator.language || navigator.browserLanguage || 'en';
  }
};
