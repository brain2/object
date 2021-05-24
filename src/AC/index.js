import { LOAD_EMPLOYEES, ADD_TO_ACTIVE, DELETE_FROM_ACTIVE } from "../constants";

export function loadEmployees() {
  return {
    type: LOAD_EMPLOYEES,
    // callAPI: "https://yalantis-react-school-api.yalantis.com/api/task0/users"
    callAPI: "/api/employees"
  }
}

export const addToActive = id => ({
  type: ADD_TO_ACTIVE,
  payload: {id}
})

export const deleteFromActive = id => ({
  type: DELETE_FROM_ACTIVE,
  payload: {id}
})
