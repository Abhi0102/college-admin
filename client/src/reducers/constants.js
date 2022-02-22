// import { FETCH_CONSTANTS_SUCCESS } from "../actions/actionType";

// const initialState = { fields: {} };

// export default function constants(state, action) {
//   switch (action.type) {
//     case FETCH_CONSTANTS_SUCCESS:
//       return { fields: action.fields };
//     default:
//       return state;
//   }
// }

import { FETCH_CONSTANTS_SUCCESS } from "../actions/actionType";

const initialConstantState = {
  fields: {},
  options: [],
  success: false,
};

export default function fetchStudents(state = initialConstantState, action) {
  switch (action.type) {
    case FETCH_CONSTANTS_SUCCESS:
      return {
        ...state,
        fields: action.fields.formField,
        options: action.fields.options,
        success: true,
      };

    default:
      return state;
  }
}
