import React from 'react';
import ReactDOM from 'react-dom';
import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

Bugsnag.start({
  apiKey: process.env.REACT_APP_BUGSNAG_API_KEY,
  plugins: [new BugsnagPluginReact()],
  //appType:'client',
  //autoTrackSessions:false
  //collectUserIp: false
  //context: 'ctx-id-1234'
  //enabledBreadcrumbTypes: ['error', 'log', 'navigation', 'request', 'user']
  //enabledReleaseStages: [ 'production', 'staging' , 'development' ]
  /*endpoints: {
    notify: 'https://bugsnag-notify.com',
    sessions: 'https://bugsnag-sessions.com'
  }*/
  //maxBreadcrumbs:5,
  /*metadata: {
    company: {
      name: 'Acme Co.',
      country: 'uk'
    }
  }*/
  onError: function (event) {
    event.setUser('123',sessionStorage.getItem('user_mail'),sessionStorage.getItem('user_name'))
  },
  /*redactedKeys: [
    'access_token',
    //'type', 
    /^password$/i,
  ]*/
  /*user: {
    id: '123',
    name: sessionStorage.getItem('user_name'),
    email: sessionStorage.getItem('user_mail')
  }*/
})

const ErrorBoundary = Bugsnag.getPlugin('react')
  .createErrorBoundary(React)

  const ErrorScreen = ({ clearError }) =>
  <div>
    <h1> Error </h1>
    <p><strong>Uh oh, there was an error in the component tree!</strong></p>
    <p>This <code>FallbackComponent</code> prop can be used to show something useful to your users when such errors occur.</p>
    <button onClick={clearError}>Reset</button>
  </div>

const onError = event => {
  console.log('about to send this event', { event })
}

ReactDOM.render(
  <ErrorBoundary FallbackComponent={ErrorScreen} onError={onError}>
    <App />
  </ErrorBoundary>,
  document.getElementById('root')
);

serviceWorker.unregister();
