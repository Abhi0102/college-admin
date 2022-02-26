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
  classwiseStudentStats: {},
  genderwiseStudentStats: {},
  categorywiseStudentStats: {},
  success: false,
};

export default function fetchStudents(state = initialConstantState, action) {
  switch (action.type) {
    case FETCH_CONSTANTS_SUCCESS:
      return {
        ...state,
        fields: action.fields.formField,
        options: action.fields.options,
        classwiseStudentStats: action.fields.classwiseStudentStats,
        genderwiseStudentStats: action.fields.genderwiseStudentStats,
        categorywiseStudentStats:action.fields.categorywiseStudentStats,
        success: true,
      };

    default:
      return state;
  }
}
