/* eslint-disable */

import AppBodyLeftBar from './app-body-left-bar';
import AppBodyRigthBar from './app-body-rigth-bar';
import classes from './app-body.module.scss';

function AppBody() {
  return (
    <div className={classes.appBody}>
      <AppBodyLeftBar />
      <AppBodyRigthBar />
    </div>
  );
}

export default AppBody;
