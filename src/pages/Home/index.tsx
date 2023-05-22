import React from 'react';
import { Card, Link as LinkUI, List, ListItem } from '@mui/material';
import { routes } from '~router/router';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Card elevation={6} sx={{ margin: 1 }}>
      <List>
        {routes.map(({ path, title }) => (
          <ListItem><Link to={path}><LinkUI>{title}</LinkUI></Link></ListItem>
        ))}
      </List>
    </Card>
  )
}
