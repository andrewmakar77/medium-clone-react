import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { PageLayout, CurrentUserChecker } from 'components';
import { CurrentUserProvider } from 'contexts';

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <PageLayout/>
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
