import {MONTH_NAMES, SHORT_MONTH_LENGTH} from './constants';

export const getMonthName = (date: Date): string => {
	return MONTH_NAMES[date.getMonth()];
}

export const getShortMonthName = (date: Date): string => {
  return getMonthName(date).substring(0, SHORT_MONTH_LENGTH);
}

export const getAbbreviatedDate = (date: Date): string => {
  return `${getShortMonthName(date)} ${date.getDay()}`;
}
