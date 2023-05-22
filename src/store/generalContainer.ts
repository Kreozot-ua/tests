import { Dispatch, SetStateAction } from 'react';
import { createContainer } from 'unstated-next';

export type GeneralFallthroughProps = {
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
};

export const useGeneralData = (
  { isDark, setIsDark }: GeneralFallthroughProps = {
    isDark: false,
    setIsDark: () => undefined,
  },
) => {
  return { isDark, setIsDark };
};

export const GeneralDataContainer = createContainer(useGeneralData);
