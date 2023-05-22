import React from 'react';
import { Outlet } from 'react-router-dom';
import { Paper } from '@mui/material';

import { Header } from '~components/core';

import { useStyles } from './styles';

export default function RootWrapper () {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Paper square className={classes.root}>
        <Header/>
        <Outlet/>
      </Paper>
    </div>
  )
}
