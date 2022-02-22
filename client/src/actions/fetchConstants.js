import { APIUrls } from "../helpers/url";
import { getFormBody, getHeaderWithAuth } from "../helpers/utils";
import { FETCH_CONSTANTS_SUCCESS } from "../actions/actionType";
export function fetchConstants() {
  return async (dispatch) => {
    const url = APIUrls.fetchConstants();
    const response = await fetch(url, {
      method: "GET",
      headers: getHeaderWithAuth(),
    });
    const data = await response.json();

    if (data.success) {
      dispatch(successFetchConstants(data.data));
    }
  };
}

function successFetchConstants(data) {
  return {
    type: FETCH_CONSTANTS_SUCCESS,
    fields: data,
  };
}
