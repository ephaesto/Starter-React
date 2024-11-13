export const runServer = async (): Promise<void> => {
  await import('../service/serverBrowser');
};
