
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateWarehouse } from '../../Features/warehousesSlice';
import "./WarehouseDetail.css"
import {Link} from "react-router-dom";
const WarehouseDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const warehouses = useSelector((state) => state.warehouses.warehouses);
  const warehouse = warehouses.filter((w) => w.id === Number(id));
  const [editedWarehouse, setEditedWarehouse] = useState({...warehouse[0]});
  const [tempEdit, setTempEdit] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const handleEditSubmit = () => {
    setIsOpen(false);
    dispatch(updateWarehouse(tempEdit));
    setEditedWarehouse(tempEdit);
  };
  const handleEdit = () => {
    setIsOpen(true);
    setTempEdit(editedWarehouse);
  };

  return (
    <div className='warehouse_detail'>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={()=>setIsOpen(false)}>&times;</span>
            <h2>Edit Warehouse Details</h2>
            <h3>Name : <input className='input_details' onChange={(e)=>setTempEdit({...tempEdit,name:e.target.value})} value={tempEdit.name}/></h3>
            <h3>City : <input  className='input_details' onChange={(e)=>setTempEdit({...tempEdit,city:e.target.value})} value={tempEdit.city}/></h3>
            <h3>Space Available : <input   className='input_details' type='number' onChange={(e)=>setTempEdit({...tempEdit,space_available:e.target.value})} value={tempEdit.space_available}/></h3>
            <h3>Cluster : <input  className='input_details' value={tempEdit.cluster} onChange={(e)=>setTempEdit({...tempEdit,cluster:e.target.value})}/></h3>
            <h3>Live Status  :<select  className='input_details' value={tempEdit.is_live} onChange={(e)=>setTempEdit({...tempEdit,is_live:e.target.value==="true"})}>
                 <option value={true}>True</option>
                 <option value={false}>False</option>
               </select></h3>

            <button className='submit_btn' onClick={()=>handleEditSubmit()}>Submit</button>
          </div>
        </div>
      )}
    
      <h1>Warehouse Details</h1>
      <div className='details_div'>
            <h3>Name : <span> {editedWarehouse.name}</span></h3>
            <h3>Code : <span>{editedWarehouse.code}</span></h3>
            <h3>City : <span>{editedWarehouse.city}</span></h3>
            <h3>Space Available : <span>{editedWarehouse.space_available}</span></h3>
            <h3>Cluster : <span>{editedWarehouse.cluster}</span></h3>
            <h3>Type :<span>{editedWarehouse.type}</span></h3>
            <h3>Registere Status :<span>{editedWarehouse.is_registered?" Registered":" Not Registered"}</span></h3>
            <h3>Live Status  :<span>{Boolean(editedWarehouse.is_live)?" Live":" Not Live"}</span></h3>
      </div>
      <button  className='submit_btn' onClick={()=>handleEdit()}>Edit Details</button>
      <Link  to="/"><button  className='submit_btn back_btn'>Go to Dashboard</button></Link>
    </div>
  );
};

export default WarehouseDetail;
