import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';

import { Header } from '~components/core';

import { useStyles } from './styles';

export default function RootWrapper () {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const redirectPath = urlParams.get('redirect');

  useEffect(() => {
    if (redirectPath) {
      navigate(redirectPath);
    }
  }, [redirectPath, navigate]);

  return (
    <div className={classes.wrapper}>
      <Paper square className={classes.root}>
        <Header/>
        <Outlet/>
      </Paper>
    </div>
  )
}
