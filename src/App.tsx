import React, { Fragment, FC, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material';

import { theme } from '~assets/theme';
import { GeneralDataContainer } from '~store/generalContainer';
import { store } from '~store/store';
import { router } from '~router/router';

const App: FC = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme(isDark ? 'dark' : 'light')}>
          <GeneralDataContainer.Provider initialState={{ isDark, setIsDark }}>
            <RouterProvider router={router} />
          </GeneralDataContainer.Provider>
        </ThemeProvider>
      </Provider>
    </Fragment>
  );
}

export default App;
