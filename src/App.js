import {useEffect} from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { loadEmployees } from "./AC";
import './App.scss';
import AlphabetList from './components/AlphabetList';
import BirthdayList from './components/BirthdayList/';
import {userPropTypes} from "./propTypes";

const App = props => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(props.loadEmployees, []);

  if (!Object.keys(props.users).length) return null;

  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
          <AlphabetList users={props.users} />
        </div>
        <div className="col-4">
          <BirthdayList users={props.users} />
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  users: PropTypes.objectOf(PropTypes.shape(userPropTypes))
}

export default connect(state => ({
  users: state.employees.users
}), { loadEmployees })(App);
