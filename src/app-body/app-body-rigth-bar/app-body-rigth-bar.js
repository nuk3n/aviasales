import AppDurationFilter from './app-duration-filter';
import TicketList from './ticket-list';
import classes from './app-body-rigth-bar.module.scss';
import ErrorMessage from '../../error-message';
import { connect } from 'react-redux';
import { BarLoader } from 'react-spinners';

const override = {
  margin: '15px auto',
  borderRadius: '5px',
};

function AppBodyRigthBar({ status }) {
  const errorMessage =
    status === 'error' ? <ErrorMessage message="Что-то не так с интернетом, попробуйте позже!" /> : null;
  const loading = status === 'loading';

  return (
    <div className={classes.appBody__rigthBar}>
      <AppDurationFilter />
      {errorMessage}
      <BarLoader loading={loading} color="#2196f3" cssOverride={override} width={300} height={6} />
      <TicketList />
    </div>
  );
}

const mapStateToProps = (state) => ({
  status: state.status,
});

export default connect(mapStateToProps)(AppBodyRigthBar);
