import { defaultConfig } from "api/config/mocks/defaultConfig";
import { recDeepMergeAll } from "utils/functions/deepMergeObjects";

type Unwrap<T> = T[keyof T];
export type TDefaultConfig = typeof defaultConfig;

let configMock: TDefaultConfig = defaultConfig;

export const initMockConfig = (initConfig?: Partial<Unwrap<TDefaultConfig>>) => {
  if (initConfig) {
    Object.keys(configMock).forEach((key) => {
      const MergeConfig: Unwrap<TDefaultConfig> = recDeepMergeAll(configMock[key as keyof TDefaultConfig], initConfig);
      configMock[key as keyof TDefaultConfig] = MergeConfig;
    });
  }
};

export const getConfig = (key: keyof TDefaultConfig) => configMock[key];

export const setConfig = (newValue: Partial<TDefaultConfig>) => {
  configMock = recDeepMergeAll(configMock, newValue);
};
