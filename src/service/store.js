import { configureStore } from "@reduxjs/toolkit";
import { getDataReducer } from "./getData";
import { authReducer } from "./auth";

export const store = configureStore({
  reducer: {
    getData: getDataReducer,
    auth: authReducer,
  },
});


// const StatusName = {
//   someOne: 'someOne',
//   someOne1: 'someOne1', 
// }


// const UIMap = {
//   [StatusName.someOne]: 'first ui message',
//   [StatusName.someOne1]: 'second ui message'
// };

// const reversStatus = (UIMap, uiValue) => {
//   const reversed = Object.entries(UIMap).map(
//     ([key, val]) => [val, key]
//   );
//   return reversed[uiValue]
// }

// Object.values(UIMap)