import React from 'react';
import ReactDOM from 'react-dom';
import { theme } from 'loft-taxi-mui-theme';
import { MuiThemeProvider } from '@material-ui/core';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store'; 
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <HashRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </HashRouter>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
