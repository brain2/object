import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { userPropTypes } from "../propTypes";

const EmployeeBirthday = (props) => {
  const dateFormat = "DD MMMM, YYYY [year]";
  const user = `${props.user.lastName} ${props.user.firstName} - ${moment(
    props.user.dob
  ).format(dateFormat)}`;

  return <li>{user}</li>;
};

EmployeeBirthday.propTypes = {
  user: PropTypes.shape(userPropTypes),
};

export default EmployeeBirthday;
