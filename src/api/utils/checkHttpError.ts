import DefaultErrors from 'errors/DefaultErrors';
import HttpErrors from 'errors/HttpErrors';

type ResponseCheckHttpError =
  | {
      isHttpError: true;
      error: HttpErrors;
    }
  | {
      isHttpError: false;
      error: DefaultErrors;
    };
export const checkHttpError = (error: unknown, key = 'status'): ResponseCheckHttpError => {
  if (typeof error === 'object' && Object.prototype.hasOwnProperty.call(error, key)) {
    return {
      isHttpError: true,
      error: error as HttpErrors,
    };
  }
  return {
    isHttpError: false,
    error: error as DefaultErrors,
  };
};
