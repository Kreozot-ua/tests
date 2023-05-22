import React, { FC, memo } from 'react';
import { Brightness7, Brightness4 } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { GeneralDataContainer } from '~store/generalContainer';

export const ThemeSwitcher: FC = memo(() => {
  const { isDark, setIsDark } = GeneralDataContainer.useContainer();

  return (
    <div>
      <IconButton onClick={() => setIsDark(prev => !prev)}>{isDark ? <Brightness7 /> : <Brightness4 />}</IconButton>
    </div>
  );
});
