
import { createSlice } from '@reduxjs/toolkit';
import data from "../data.json"
const warehousesSlice = createSlice({
  name: 'warehouses',
  initialState: {
    warehouses: data, 
    searchWarehouse: '', 
    filterCity: '', 
    filterCluster: '', 
    filterAvSpace: '', 
  },
  reducers: {
    setWarehouses: (state, action) => {
      return action.payload;
    },
    setSearchWarehouse: (state, action) => {
      state.searchWarehouse = action.payload;
    },
    setFilterCity:(state,action)=>{
      state.filterCity=action.payload;
    },
    setFilterCluster:(state,action)=>{
      state.filterCluster=action.payload;
    },
    setFilterAvSpace:(state,action)=>{
      state.filterAvSpace=action.payload;
    },
    updateWarehouse: (state, action) => {
      const updatedWarehouse = action.payload;
      const index = state.warehouses.findIndex((w) => w.id === updatedWarehouse.id);

      if (index !== -1) {
        state.warehouses[index] = updatedWarehouse;
        state.warehouses = [...state.warehouses];
      }
    },
  },
});

export const { setWarehouses, updateWarehouse ,setSearchWarehouse,setFilterCity,setFilterCluster,setFilterAvSpace} = warehousesSlice.actions;
export default warehousesSlice.reducer;
