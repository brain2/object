import { SUCCESS, FAIL } from "../constants";

// eslint-disable-next-line import/no-anonymous-default-export
export default store => next => action => {
  const { type, callAPI, ...rest } = action;
  if (!callAPI) return next(action);

  fetch(callAPI)
    .then(data => data.json())
    .then(response => next({ ...rest, type: type + SUCCESS, payload: response }))
    .catch(error => next({ ...rest, type: type + FAIL, error }))
}
