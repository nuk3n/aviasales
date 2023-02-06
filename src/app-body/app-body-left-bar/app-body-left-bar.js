import AppTransferFilter from './app-transfer-filter';
import classes from './app-body-left-bar.module.scss';

function AppBodyLeftBar() {
  return (
    <div className={classes.appBody__leftBar}>
      <AppTransferFilter />
    </div>
  );
}

export default AppBodyLeftBar;
