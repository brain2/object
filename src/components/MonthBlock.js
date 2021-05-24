import React from 'react';
import PropTypes from 'prop-types';
import EmployeeBirthday from "./EmployeeBirthday";
import {compareBy} from "../helpers";

const MonthBlock = props => {
  const users = props.users
    .sort(compareBy("lastName"))
    .map(user => <EmployeeBirthday key={user.id} user={user}/>)

  return (
    <div>
      <p>{props.month}</p>
      <ul className="vertical-list">
        {users}
      </ul>
    </div>
  );
};

MonthBlock.propTypes = {
  users: PropTypes.array.isRequired
};

export default MonthBlock;
