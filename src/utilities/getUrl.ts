import { BASE_URL, TOKEN } from './constants';

export const getUrl = (url: string): string => {
  return `${BASE_URL}/${url}/?token=${TOKEN}`;
};
