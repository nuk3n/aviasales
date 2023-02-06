/* eslint-disable */
import AppDurationFilter from './app-duration-filter';
import TicketList from './ticket-list';
import classes from './app-body-rigth-bar.module.scss';
import { connect } from 'react-redux';
import { BarLoader } from 'react-spinners';
import ErrorMessage from '../../error-message';

const override = {
  margin: '15px auto',
  borderRadius: '5px',
};

function AppBodyRigthBar({ loading, error }) {
  const errorMessage = error ? <ErrorMessage message="Что-то не так с интернетом, попробуйте позже!" /> : null;

  return (
    <div className={classes['appBody__rigthBar']}>
      <AppDurationFilter />
      {errorMessage}
      <BarLoader loading={loading} color="#2196f3" cssOverride={override} width={300} height={6} />
      <TicketList />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps)(AppBodyRigthBar);
