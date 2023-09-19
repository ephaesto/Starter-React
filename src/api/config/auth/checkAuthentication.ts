import { checkHttpError } from 'api/utils/checkHttpError';
import { NavigateFunction } from 'react-router-dom';

export const checkAuthentication = (navigate: NavigateFunction, err: unknown): void => {
  const { isHttpError, error } = checkHttpError(err);
  if (isHttpError && error.status === '401') {
    navigate('login');
  }
};
