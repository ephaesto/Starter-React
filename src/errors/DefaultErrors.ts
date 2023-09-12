class DefaultErrors extends Error {
  public name: string;

  public i18nKey: string;

  constructor(message: string | undefined, i18nKey: string) {
    super(message);
    this.name = 'DefaultErrors';
    this.i18nKey = i18nKey;
  }
}

export default DefaultErrors;
