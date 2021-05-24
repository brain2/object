import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import "./style.scss"
import moment from "moment";
import { groupByMonth } from "../../helpers";
import MonthBlock from "../MonthBlock";
import { EMPTY_EMPLOYEE_LIST } from "../../constants";
import {userPropTypes} from "../../propTypes";

const Index = props => {
  return (
    <div>
      <h2 className="text-center">Employees Birthday</h2>
      <div className="birthday-block">
        {props.selected.length ? getMonthList(props) : EMPTY_EMPLOYEE_LIST}
      </div>
    </div>
  );
};

const getMonthList = props => {
  let monthList = moment.months().map(month => ({ month }));
  let usersGroupedByMonths = groupByMonth(props.users, props.selected);

  monthList.forEach((item, idx) => {
    if (usersGroupedByMonths[idx]) item.users = usersGroupedByMonths[idx]
  })
  const prevMonths = monthList.splice(0, new Date().getMonth());

  return [...monthList, ...prevMonths]
    .filter(item => item.users)
    .map((item, idx) => <MonthBlock key={idx} month={item.month} users={item.users} />);
}

Index.propTypes = {
  users: PropTypes.objectOf(PropTypes.shape(userPropTypes)),
  // from connect
  selected: PropTypes.arrayOf(PropTypes.string)
};

export default connect(state => ({
  selected: state.employees.selected
}))(Index);
