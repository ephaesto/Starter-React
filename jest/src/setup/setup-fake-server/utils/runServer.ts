export const runServer = async (urlPrefix: string): Promise<void> => {
  const { fakeServer } = await import('api-mock/MirageApi');
  if (fakeServer) {
    fakeServer({
      urlPrefix,
      timing: 1500,
    });
  }
};
