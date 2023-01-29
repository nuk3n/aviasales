/* eslint-disable */
import classes from './app.module.scss';

import AppHeader from '../app-header';
import AppBody from '../app-body';

function App() {
  return (
    <section className={classes.app}>
      <AppHeader />
      <AppBody />
    </section>
  );
}

export default App;
