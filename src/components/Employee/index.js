import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import "./style.scss";
import { addToActive, deleteFromActive } from "../../AC";

const Index = props => {
  const employee = `${props.employee.lastName} ${props.employee.firstName}`;

  return (
    <div>
      {employee}
      <div onChange={handleChange(props)}>
        <ul className="vertical-list">
          <li><input
            type="radio"
            value={false}
            name={`is-active-${props.employee.id}`}
            defaultChecked={!props.isActive}
          /> not active</li>
          <li><input
            type="radio"
            value={true}
            name={`is-active-${props.employee.id}`}
            defaultChecked={props.isActive}
          /> active</li>
        </ul>
      </div>
    </div>
  );
};

Index.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    dob: PropTypes.string.isRequired,
  }),
  // from connect
  isActive: PropTypes.bool.isRequired,
  addToActive: PropTypes.func.isRequired,
  deleteFromActive: PropTypes.func.isRequired,
};

const handleChange = props => ev => {
  JSON.parse(ev.target.value) ? props.addToActive(props.employee.id) : props.deleteFromActive(props.employee.id);
}

export default connect((state, ownProps) => ({
    isActive: state.employees.selected.includes(ownProps.employee.id)
}), { addToActive, deleteFromActive })(Index);
