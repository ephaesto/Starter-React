import DefaultErrors from './DefaultErrors';

class HttpErrors extends DefaultErrors {
  public status: string;

  constructor(message: string | undefined, i18nKey: string, status: string) {
    super(message, i18nKey);
    this.name = 'HttpErrors';
    this.status = status;
  }
}

export default HttpErrors;
