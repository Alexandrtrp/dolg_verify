import { createSlice } from "@reduxjs/toolkit";
import { mockData } from "../components/MockData";

const initialState = {
  tableData: mockData,
  filterData: {},
  filterType: null
};

export const getDataSlice = createSlice({
  name: "getData",
  initialState,
  reducers: {
    addFilter: (state, action)=>{
        state.filterType = action.payload
        state.filterData = state.tableData.filter(row=>row.recordType ===  state.filterType)
    },
    addRow: (state) =>{
      state.tableData.unshift()
    }
  },
});
export const {addFilter, addRow} = getDataSlice.actions
export const getDataReducer = getDataSlice.reducer
