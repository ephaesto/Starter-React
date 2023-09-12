import { isAbsoluteUrl } from './isAbsoluteUrl';
import { trimSlashUrl } from './trimSlashUrl';

/**
 * Generate url from a baseurl and a path : a concatenate url or path if path is an absolute url
 * @param baseUrl string of a base url
 * @param path string of a partial path or absolute url
 * @returns string of generated url
 */
export const generateUrl = (baseUrl: string, path: string): string =>
  isAbsoluteUrl(path) ? path : `${trimSlashUrl(baseUrl)}/${trimSlashUrl(path)}`;
