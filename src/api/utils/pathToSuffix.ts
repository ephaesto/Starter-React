export const pathToSuffix = (path: string): string => {
  const arraySuffix = path.split('/').filter((value) => value);
  const arrayCapitalized = arraySuffix.map(([firstChar, ...otherChar]) => `${firstChar.toUpperCase()}${otherChar}`);
  const pathSanitize = arrayCapitalized.join('');
  return `-${pathSanitize}`;
};
