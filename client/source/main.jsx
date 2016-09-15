import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {IndexRoute, Router, Route, hashHistory} from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'
import counterpart from 'counterpart'
import moment from 'moment'

import AuthenticationView from './containers/authentication-view'
import HomeView from './containers/home-view'

import configureStore from './stores/configure-store'
import {syncHistoryWithStore} from 'react-router-redux'

import localeEn from './locale/locale-en.json'

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = configureStore(hashHistory);
const history = syncHistoryWithStore(hashHistory, store);

moment.locale('en');
counterpart.registerTranslations('en', localeEn);
counterpart.setLocale('en');

injectTapEventPlugin();

const muiTheme = getMuiTheme(lightBaseTheme);

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={history}>
        <Route path="/" component={HomeView} />
        <Route path="/authentication" component={AuthenticationView} />
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('content')
);
