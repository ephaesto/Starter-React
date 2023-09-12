import DefaultErrors from './DefaultErrors';

class UnknownResponseErrors extends DefaultErrors {
  public response: Response;

  constructor(message: string | undefined, i18nKey: string, response: Response) {
    super(message, i18nKey);
    this.name = 'HttpErrors';
    this.response = response;
  }
}

export default UnknownResponseErrors;
