// import { AgGridReact } from 'ag-grid-react';
// import { useState } from 'react';
import React from 'react';
import "./SummaryTable.css";
import 'ag-grid-community/styles/ag-grid.css'; 
import 'ag-grid-community/styles/ag-theme-alpine.css';


const SummaryTable = (props) => {

//     const [rowData] = useState([
//         {SN:'1',BillSundry:'', atTheRate:' ',Unit:" ",Amount:""},
//     {SN:'2',BillSundry:'', atTheRate:' ',Unit:" ",Amount:""},
//     {SN:'3',BillSundry:'', atTheRate:' ',Unit:" ",Amount:""},
//     {SN:'4',BillSundry:'', atTheRate:' ',Unit:" ",Amount:""},
//     {SN:'5',BillSundry:'', atTheRate:' ',Unit:" ",Amount:""},
//     ]);


// const [columnDefs] = useState([
//    {
//     headerName:"S.N.",field:'SN', maxWidth:65
// },
// {
//     headerName:"Bill Sundry",field:'BillSundry',editable:true,width:158, maxWidth:400
// },
// {
//     headerName:"@",field: "atTheRate" ,maxWidth:50
// },
// {
//     headerName:" ",field:"Unit",maxWidth:50
// },

// {
//     headerName:"Amount(Rs.)",field:"Amount",maxWidth:120
// }
// ])


// const rowHeight = 30;

  return (
    <div >
        {/* <AgGridReact rowData={rowData} columnDefs={columnDefs} rowHeight={rowHeight}/> */}
        <table className="summarytable">
        <tr>
          <th className="head">S.N.</th>
          <th className="head">Bill Sundry</th>
          <th className="head">@</th>
          <th className="head"> </th>
          <th className="head">Amount(Rs.)</th>
        </tr>
        <tr>
          <td className="srno">1</td>
          <td className="item">
            <input  className="item" type="text" size="20" id="item"/>
          </td>
          <td className="qty">
            <input className="qty" type="Number" id="qty" />
          </td>
          <td className="unit">
            <input  className="unit" type="Number" id="unit" />
          </td>
          <td className="amount">
            <input className="amount" type="Number" id="amount" />
          </td>
        </tr>
        <tr>
          <td className="srno">2</td>
          <td className="item">
            <input className="item" type="text" size="20" id="item" />
          </td>
          <td className="qty">
            <input className="qty" type="Number" id="qty" />
          </td>
          <td className="unit">
            <input className="unit" type="Number" id="unit" />
          </td>
          <td className="amount">
            <input className="amount" type="Number" id="amount" />
          </td>
        </tr>
        <tr>
          <td className="srno">3</td>
          <td className="item">
            <input className="item" type="text" size="20" id="item" />
          </td>
          <td className="qty">
            <input className="qty" type="Number" id="qty" />
          </td>
          <td className="unit">
            <input className="unit" type="Number" id="unit" />
          </td>
          <td className="amount">
            <input className="amount" type="Number" id="amount" />
          </td>
        </tr>
        <tr>
          <td className="srno">4</td>
          <td className="item">
            <input className="item" type="text" size="20" id="item" />
          </td>
          <td className="qty">
            <input className="qty" type="Number" size="20" id="qty" />
          </td>
          <td className="unit">
            <input className="unit" type="Number" id="unit" />
          </td>
          <td className="amount">
            <input className="amount" type="Number" id="amount" />
          </td>
        </tr>
        <tr>
          <td className="srno">5</td>
          <td className="item">
            <input className="item" type="text" size="20" id="item" />
          </td>
          <td className="qty">
            <input className="qty" type="Number" id="qty" />
          </td>
          <td className="unit">
            <input className="unit" type="Number" id="unit" />
          </td>
          <td className="amount">
            <input className="amount" type="Number" id="amount" />
          </td>
        </tr>
        <tr>
          <td className="srno">6</td>
          <td className="item">
            <input className="item" type="text" size="20" id="item" />
          </td>
          <td className="qty">
            <input className="qty" type="Number" id="qty" />
          </td>
          <td className="unit">
            <input className="unit" type="Number" id="unit" />
          </td>
          <td className="amount">
            <input className="amount" type="Number" id="amount" />
          </td>
        </tr>
        
      </table>
        
    </div>
    
  )
}

export default SummaryTable