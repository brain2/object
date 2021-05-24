import { SUCCESS, LOAD_EMPLOYEES, ADD_TO_ACTIVE, DELETE_FROM_ACTIVE } from "../constants";

const defaultState = {
  users: {},
  selected: []
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (employeesState = defaultState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_EMPLOYEES + SUCCESS:
      const users = payload.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});
      return { ...employeesState, users}

    case ADD_TO_ACTIVE:
      return { ...employeesState, selected: employeesState.selected.concat(payload.id) }

    case DELETE_FROM_ACTIVE:
      return { ...employeesState, selected: employeesState.selected.filter(id => id !== payload.id) }

    default:
      return employeesState
  }
}
