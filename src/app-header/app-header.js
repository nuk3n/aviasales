import classes from './app-header.module.scss';

function AppHeader() {
  return (
    <div className={classes.appHeader}>
      <img src="/aviasales-logo.png" alt="aviasales-logo" />
    </div>
  );
}

export default AppHeader;
