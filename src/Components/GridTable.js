import { AgGridReact } from 'ag-grid-react'
import { useState } from 'react';
import React from 'react';
import "./GridTable.css";
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css';

const GridTable = (props) => {

    const [rowData] = useState([
        {SN:'1',Item:' ',Qty:' ',Unit:" ",Price:" ",Amount:" "},
    {SN:'2',Item:' ',Qty:' ',Unit:" ",Price:" ",Amount:" "},
    {SN:'3',Item:' ',Qty:' ',Unit:" ",Price:" ",Amount:" "},
    {SN:'4',Item:' ',Qty:' ',Unit:" ",Price:" ",Amount:" "},
    {SN:'5',Item:' ',Qty:' ',Unit:" ",Price:" ",Amount:" "},
    {SN:'6',Item:' ',Qty:' ',Unit:" ",Price:" ",Amount:" "},
    {SN:'7',Item:' ',Qty:' ',Unit:" ",Price:" ",Amount:" "},
    {SN:'8',Item:' ',Qty:' ',Unit:" ",Price:" ",Amount:" "},
    {SN:'9',Item:' ',Qty:' ',Unit:" ",Price:" ",Amount:" "},
    {SN:'10',Item:' ',Qty:' ',Unit:" ",Price:" ",Amount:" "},
    {SN:'11',Item:' ',Qty:' ',Unit:" ",Price:" ",Amount:" "},
    {SN:'12',Item:' ',Qty:' ',Unit:" ",Price:" ",Amount:" "}
    ]);


const [columnDefs] = useState([
   {
    headerName:"S.N.",field:'SN', maxWidth:65
},
{
    headerName:"Item",field:'Item',editable:true,width:300, maxWidth:400
},
{
    headerName:"Qty",field:"Qty",maxWidth:80
},
{
    headerName:"Unit",field:"Unit",maxWidth:80
},
{
    headerName:"Price(Rs.)",field:"Price",maxWidth:120
},
{
    headerName:"Amount(Rs.)",field:"Amount",maxWidth:120
}
])


const rowHeight = 30;

  return (
    <div className="ag-theme-material" style={{height: 300, width: 810, color:'white'}}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} rowHeight={rowHeight}/>
        
    </div>
    
  )
}

export default GridTable


