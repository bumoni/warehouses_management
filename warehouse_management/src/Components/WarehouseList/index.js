// src/components/WarehouseList.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchWarehouse,setFilterCity,setFilterCluster,setFilterAvSpace} from '../../Features/warehousesSlice';
import "./WarehouseList.css"
import { selectFilteredWarehouses } from '../../Features/warehouseSelector';
import {Link} from "react-router-dom";

const WarehouseList = () => {
  const dispatch = useDispatch();
  const filteredWarehouses = useSelector(selectFilteredWarehouses);
  let warehousesCity=useSelector((state)=>state.warehouses.warehouses.map((warehouse)=>warehouse.city));
  warehousesCity=[...new Set(warehousesCity)];
  const handleFilterCity = (event) => {
    dispatch(setFilterCity(event.target.value));
  };

  let warehousesCluster=useSelector((state)=>state.warehouses.warehouses.map((warehouse)=>warehouse.cluster));
  warehousesCluster=[...new Set(warehousesCluster)];
  const handleFilterCluster = (event) => {
    dispatch(setFilterCluster(event.target.value));
  };
  
  let warehousesAvSpace=useSelector((state)=>state.warehouses.warehouses.map((warehouse)=>warehouse.space_available));
  warehousesAvSpace=[...new Set(warehousesAvSpace)];
  const handleFilterAvSpace = (event) => {
    dispatch(setFilterAvSpace(event.target.value));
  };
  function debounce(){
    let timeoutId;
    return function(value){
      if(timeoutId)clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        dispatch(setSearchWarehouse(value));
       }, 1000);
      }
  }
  const mydebounce=debounce()
  const handleSearch =(e)=>{
    mydebounce(e);
  };
  

  return (
    <div className='Container Bg_color'>
      <div className='search_nav'>
        <input className='searchbox_input'  onChange={(e)=>handleSearch(e.target.value)} placeholder='Search Wearhouse'/>

        <select className='searchbox_input' onChange={handleFilterCity}>
          <option value=""  defaultValue={""}>All City</option>
          {warehousesCity.map((warehouse,index)=>{
             return(<option key={index} value={warehouse}>{warehouse}</option>)
          })}
        </select>

        <select className='searchbox_input' onChange={handleFilterCluster}>
          <option value=""  defaultValue={""}>All Cluster</option>
          {warehousesCluster.map((warehouse,index)=>{
             return(<option key={index} value={warehouse}>{warehouse}</option>)
          })}
        </select>
        <select className='searchbox_input' onChange={handleFilterAvSpace}>
          <option value=""  defaultValue={""}>All Spaces</option>
          {warehousesAvSpace.map((warehouse,index)=>{
             return(<option key={index} value={warehouse}>{warehouse}</option>)
          })}
        </select>
      </div>
      <div className='warehouse_list'>
        {filteredWarehouses.map((warehouse) => (
          <Link to={`/warehouse/${warehouse.id}`} key={warehouse.id} className='warehouse'>
            <h3>Name :<span> {warehouse.name}</span></h3>
            <h4>Code :<span>{warehouse.code}</span></h4>
            <h5>City :<span>{warehouse.city}</span></h5>
            <h5>Space Available :<span>{warehouse.space_available}</span></h5>
            <h5>Cluster :<span>{warehouse.cluster}</span></h5>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WarehouseList;
