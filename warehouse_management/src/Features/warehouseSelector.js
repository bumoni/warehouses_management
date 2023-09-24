import { createSelector } from '@reduxjs/toolkit';

const selectWarehouses = (state) => state.warehouses.warehouses;
const selectSearchQuery = (state) => state.warehouses.searchWarehouse;
const selectFilterCity = (state) => state.warehouses.filterCity;
const selectFilterCluster = (state) => state.warehouses.filterCluster;
const selectFilterAvSpace = (state) => state.warehouses.filterAvSpace;
export const selectFilteredWarehouses = createSelector(
  [selectWarehouses, selectSearchQuery,selectFilterCity,selectFilterCluster,selectFilterAvSpace],
  (warehouses, searchQuery,filterCity,filterCluster,filterAvSpace) => {
    if (!searchQuery && !filterCity && !filterCluster &&!filterAvSpace) {
      return warehouses;
    }

    const filteredWarehouses = warehouses.filter((warehouse) =>
      (warehouse.name.toLowerCase().includes(searchQuery.toLowerCase())||!searchQuery)
       && (warehouse.city===filterCity||!filterCity) &&(warehouse.cluster===filterCluster||!filterCluster)&&(warehouse.space_available>=Number(filterAvSpace)||!filterAvSpace)
    );

    return filteredWarehouses;
  }
);
