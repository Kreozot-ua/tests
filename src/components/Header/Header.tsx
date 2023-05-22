import React, { FC, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { KeyboardArrowLeft } from '@mui/icons-material';

import { ThemeSwitcher } from '~components/core';
import { routes } from '~router/router';
import { Routes } from '~router/routes';

export const Header: FC = memo(() => {
  const location = useLocation();

  const currentRoute = routes.find(({ path }) => path === location.pathname);

  return (
    <AppBar position="sticky">
      <Toolbar sx={{ display: 'flex', gap: 1 }}>
        {!!currentRoute && <Link to={Routes.HOME}><IconButton><KeyboardArrowLeft /></IconButton></Link>}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>{currentRoute?.title ?? ''}</Typography>
        <ThemeSwitcher/>
      </Toolbar>
    </AppBar>
  )
});
