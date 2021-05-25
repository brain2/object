import {
  START,
  SUCCESS,
  FAIL,
  LOAD_EMPLOYEES,
  ADD_TO_ACTIVE,
  DELETE_FROM_ACTIVE,
} from "../constants";

export function loadEmployees() {
  // const url = "https://yalantis-react-school-api.yalantis.com/api/task0/users";
  const url = "/api/employees";

  return (dispatch) => {
    dispatch({
      type: LOAD_EMPLOYEES + START,
    });

    fetch(url)
      .then((data) => data.json())
      .then((response) =>
        dispatch({ type: LOAD_EMPLOYEES + SUCCESS, payload: response })
      )
      .catch((error) => dispatch({ type: LOAD_EMPLOYEES + FAIL, error }));
  };
}

export const addToActive = (id) => ({
  type: ADD_TO_ACTIVE,
  payload: { id },
});

export const deleteFromActive = (id) => ({
  type: DELETE_FROM_ACTIVE,
  payload: { id },
});
