import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, Link as LinkUI, List, ListItem, Typography, Divider } from '@mui/material';
import { routes } from '~router/router';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Tasks</title>
      </Helmet>
      <Card elevation={6} sx={{ margin: 1 }}>
      <List>
        {routes.map(({ path, title }) => (
          <ListItem key={path+title}>
            <Link to={path}><LinkUI component="span">{title}</LinkUI></Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem>
          <Typography>Note: see <LinkUI href="https://github.com/Kreozot-ua/tests" target="_blank">readme.md</LinkUI> for tasks description.</Typography>
        </ListItem>
      </List>
    </Card>
    </>
  )
}
