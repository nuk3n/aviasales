/* eslint-disable */

import AppBodyLeftBar from './app-body-left-bar';
import AppBodyRigthBar from './app-body-rigth-bar';
import './app-body.scss';

function AppBody() {
  return (
    <div className="appBody">
      <AppBodyLeftBar />
      <AppBodyRigthBar />
    </div>
  );
}

export default AppBody;
