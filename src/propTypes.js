import PropTypes from "prop-types";

export const userPropTypes = {
  id: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired
}
