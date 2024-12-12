import { createBrowserRouter } from 'react-router-dom';
import RootWrapper from '~pages/RootWrapper';
import Home from '~pages/Home';
import Elevators from '~pages/Elevators';
import { Routes } from '~router/routes';

export const routes = [
  {
    path: Routes.ELEVATORS,
    title: 'Elevators',
    description: '',
    element: <Elevators />,
  },
]

export const router = createBrowserRouter([
  {
    element: <RootWrapper />,
    children: [
      {
        path: Routes.HOME,
        element: <Home />,
      },
      ...routes
    ]
  },
], {
  basename: '/tests'
});
