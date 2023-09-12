/**
 *  Check is an url is absolute or not.
 * @param url a string represent url or partial path
 * @returns true is its absolute, else false
 */
export const isAbsoluteUrl = (url: string): boolean => url.startsWith('http://') || url.startsWith('https://');
