import { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userPropTypes } from "./propTypes";
import { loadEmployees } from "./AC";
import "./App.scss";
import AlphabetList from "./components/AlphabetList";
import BirthdayList from "./components/BirthdayList/";
import Loader from "./components/Loader";

const App = (props) => {
  const { users, loading, loaded, loadEmployees } = props;

  useEffect(() => {
    if (!loading && !loaded) loadEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!Object.keys(users).length) return <Loader />;

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <AlphabetList users={users} />
        </div>
        <div className="col-4">
          <BirthdayList users={users} />
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  users: PropTypes.objectOf(PropTypes.shape(userPropTypes)),
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
};

export default connect(
  (state) => ({
    users: state.employees.users,
    loading: state.employees.loading,
    loaded: state.employees.loaded,
  }),
  { loadEmployees }
)(App);
