import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Employee from "../Employee"
import { EMPTY_SIGN } from "../../constants";
import { compareBy } from "../../helpers";

const AlphabetBlock = props => {
  const users = props.users.length ?
    props.users
      .sort(compareBy("lastName"))
      .map(user => <Employee key={user.id} employee={user} />)
    :
    EMPTY_SIGN

  return (
    <div className="d-inline-block me mb align-top alphabet-block">
      <div className="mb">
        {props.title}
      </div>
      {users}
    </div>
  );
};

AlphabetBlock.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.array
};

export default AlphabetBlock;
