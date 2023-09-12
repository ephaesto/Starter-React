/**
 * Trim an url, removing `/` at the beginning and at the end of the string.
 * @param url a string represent url or partial path
 * @returns substring of url
 */
export const trimSlashUrl = (url: string): string => {
  const urlLength = url.length;
  if (urlLength < 2) {
    return url.replace('/', '');
  }

  const { startIndex, endIndex } = {
    startIndex: url.indexOf('/') === 0 ? 1 : 0,
    endIndex: url.lastIndexOf('/') === urlLength - 1 ? urlLength - 2 : undefined,
  };
  return url.substring(startIndex, endIndex);
};
