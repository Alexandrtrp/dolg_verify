import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "../components/MockData";

const initialState = {
  tableData: mockData,
  filterData: {},
  filterType: null,
};

export const getDataSlice = createSlice({
  name: "getData",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filterType = action.payload;
      state.filterData = state.tableData.filter(
        (row) => row.recordType === state.filterType
      );
    },
    addRow: (state) => {
      const newId =
        state.tableData.length > 0 ? Math.max(...state.tableData.map((r) => r.id)) + 1 : 1;
      state.tableData.unshift({
        id: newId,
        1: null,
        2: null,
        3: null,
        4: null,
        5: null,
        6: new Date(),
        7: null,
        8: null,
        9: null,
        10: null,
        11: null,
        12: null,
        13: null,
        14: null,
        15: null,
        16: null,
        17: null,
        18: null,
        19: null,
        20: null,
        21: null,
        22: null,
        23: null,
        24: null,
        25: null,
        26: null,
        27: null,
        28: null,
        29: null,
        30: null,
        31: null,
        32: null,
        33: null,
        34: null,
        35: null,
        36: null,
        37: null,
        38: null,
        39: null,
        40: null,
        41: null,
        42: null,
        43: null,
        44: null,
        45: null,
        46: null,
        47: null,
        48: null,
        49: null,
        50: null,
        51: null,
        52: null,
        53: null,
        54: null,
        55: null,
        56: null,
        57: null,
        58: null,
        59: null,
        60: null,
        61: null,
        62: null,
        63: null,
        64: null,
        65: null,
        66: null,
        67: null,
        68: null,
        69: null,
        70: null,
        71: null,
        72: null,
        73: null,
        74: null,
        75: null,
        76: null,
        77: null,
        recordType: null,
      });
    },
    changeRowStatus: (state, action)=>{
      console.log(action.payload.id)
      state.tableData.find(row=>row.id === action.payload.id).recordType = action.payload.type
    }
  },
});
export const { addFilter, addRow, changeRowStatus } = getDataSlice.actions;
export const getDataReducer = getDataSlice.reducer;
