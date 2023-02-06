import classes from './app.module.scss';

import AppHeader from '../app-header';
import AppBody from '../app-body';
import ErrorBoundary from '../error-boundary';
import * as actions from '../actions';
import { useEffect } from 'react';
import { connect } from 'react-redux';

function App({ getInitialTickets }) {
  useEffect(() => {
    getInitialTickets();
  }, [getInitialTickets]);

  return (
    <section className={classes.app}>
      <ErrorBoundary>
        <AppHeader />
        <AppBody />
      </ErrorBoundary>
    </section>
  );
}

export default connect(null, actions)(App);
