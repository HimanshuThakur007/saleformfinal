import React, { useState } from "react";
import "./Table.css";
import DatalistInput from "react-datalist-input";

const Table = () => {
  let one = React.createRef();
  let two = React.createRef();
  let three = React.createRef();
  let four = React.createRef();

  const handleKeyEnter = (e) => {
    if (e.keyCode === 13 || e.keyCode === 40) {
      switch (e.target.id) {
        case "item":
          one.current.focus();
          break;
        case "qty":
          two.current.focus();
          break;
        case "unit":
          three.current.focus();
          break;
        case "price":
          four.current.focus();
          break;
        default:
          break;
      }
    }
  };
  const [inputValue, setInputValue] = useState({amount:"", rs:""})

  const {amount, rs}=inputValue

  const inputField = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  

  function findTotal(){
    var arr = document.getElementById('amount').value;
    var tot = 0;
    for(var i = 0 ; i < arr.length ; i++ ){
        if(parseInt(arr[i].value))
        // tot = parseInt(tot + arr[i].value);
            tot += parseInt(arr[i].value);
            console.log(tot);
    }
    // tot = parseInt(tot + arr);
     


    document.getElementById('total').innerHtml = tot;

//     console.log(arr);
//     console.log(tot);
}




  // $(document).ready(function(){

	// 	//iterate through each textboxes and add keyup
	// 	//handler to trigger sum event
	// 	$(".txt").each(function() {

	// 		$(this).keyup(function(){
	// 			calculateSum();
	// 		});
	// 	});

	// });

	// function calculateSum() {

	// 	var sum = 0;
	// 	//iterate through each textboxes and add the values
	// 	// document.getElementsByClassName(".amount").forEach (function() {
  //     document.querySelectorAll(".amount").forEach(function(){

	// 		//add only if the value is number
	// 		if(!isNaN(this.value) && this.value.length !== 0) {
	// 			sum += parseFloat(this.value);
	// 		}

	// 	});
	// 	//.toFixed() method will roundoff the final sum to 2 decimal places
	// 	document.getElementById("#total").innerHtml(sum.toFixed(2));

  //   console.log()
	// }
  



  // var table = document.getElementById("table"),sumVal = 0;
  // for(var i=1; i< table.rows.length; i++){
  //     sumVal = sumVal + parseInt(table.rows[i].cell[5].innerHtml);
  // }

  // document.getElementById("val").innerHTML = "Sum Value ="+sumVal;
  // console.log(sumVal);

  // const handelEnter = (e)=>{`$(e.target)`
  //     .closest('tr')
  //     .nextAll('tr:not(.group)')
  //     .first()
  //     .find('input')
  //     .focus();
  // }

  // const handleEnter = (e) => {
  //     if (e.keyCode === 13||e.keyCode === 40) {
  //       const table = e.target.table;
  //       const Index = [...table].indexOf(e.target);
  //       table.elements[Index + 1].focus();
  //       e.preventDefault();
  //     }

  return (
    <div>
      <table className="table-responsive datatable" id="table">
        <thead>
          <tr>
            <th scope="col" className="heading">
              S.N.
            </th>
            <th scope="col" className="heading">
              Item
            </th>
            <th scope="col" className="headingQty">
              Qty
            </th>
            <th scope="col" className="heading">
              Unit
            </th>
            <th scope="col" className="headingPrice">
              Price(Rs.)
            </th>
            <th scope="col" className="headingAmount">
              Amount(Rs.)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="srno">1</td>
            <td className="item">
              <DatalistInput
                className="item"
                type="text"
                size="20"
                id="item"
                name="item"
                onSelect={(item) => console.log(item.value)}
                items={[
                  { id: "himanshu", value: "himanshu" },
                  { id: "Atul", value: "atul" },
                  { id: "Mint", value: "Mint" },
                  { id: "Strawberry", value: "Strawberry" },
                  { id: "Vanilla", value: "Vanilla" },
                ]}
              />
            </td>
            <td className="qty">
              <input
                ref={one}
                onKeyDown={handleKeyEnter}
                className="qty"
                type="Number"
                id="qty"
                name="qty"
              />
            </td>
            <td className="unit">
              <input
                ref={two}
                onKeyDown={handleKeyEnter}
                className="unit"
                type="Number"
                id="unit"
                name="unit"
              />
            </td>
            <td className="price">
              <input
                ref={three}
                onKeyDown={handleKeyEnter}
                className="price"
                type="Number"
                id="price"
                name="price"
              />
            </td>
            <td className="amount">
              <input
                ref={four}
                value ={amount}
                onBlur ={findTotal}
                onChange ={inputField}
                onKeyDown={handleKeyEnter}
                // onBlur={Table}
                className="amount"
                type="Number"
                id="amount"
                name="amount"  
              />
            </td>
          </tr>
          <tr>
            <td className="srno">2</td>
            <td className="item">
              <DatalistInput
                className="item"
                type="text"
                size="20"
                id="item"
                onSelect={(item) => console.log(item.value)}
                items={[
                  { id: "himanshu", value: "himanshu" },
                  { id: "Atul", value: "atul" },
                  { id: "Mint", value: "Mint" },
                  { id: "Strawberry", value: "Strawberry" },
                  { id: "Vanilla", value: "Vanilla" },
                ]}
              />
            </td>
            <td className="qty">
              <input className="qty" type="Number" id="qty" />
            </td>
            <td className="unit">
              <input className="unit" type="Number" id="unit" />
            </td>
            <td className="price">
              <input className="price" type="Number" id="price" />
            </td>
            <td className="amount">
              <input className="amount" type="Number" id="amount" name="rs" 
              value={rs} onChange ={inputField} onBlur ={findTotal}
              // onBlur={findTotal} 
              />
            </td>
          </tr>
          <tr>
            <td className="srno">3</td>
            <td className="item">
              <DatalistInput
                className="item"
                type="text"
                size="20"
                id="item"
                onSelect={(item) => console.log(item.value)}
                items={[
                  { id: "himanshu", value: "himanshu" },
                  { id: "Atul", value: "atul" },
                  { id: "Mint", value: "Mint" },
                  { id: "Strawberry", value: "Strawberry" },
                  { id: "Vanilla", value: "Vanilla" },
                ]}
              />
            </td>
            <td className="qty">
              <input className="qty" type="Number" id="qty" />
            </td>
            <td className="unit">
              <input className="unit" type="Number" id="unit" />
            </td>
            <td className="price">
              <input className="price" type="Number" id="price" />
            </td>
            <td className="amount">
              <input className="amount" type="Number" id="amount" />
            </td>
          </tr>
          <tr>
            <td className="srno">4</td>
            <td className="item">
              <DatalistInput
                className="item"
                type="text"
                size="20"
                id="item"
                onSelect={(item) => console.log(item.value)}
                items={[
                  { id: "himanshu", value: "himanshu" },
                  { id: "Atul", value: "atul" },
                  { id: "Mint", value: "Mint" },
                  { id: "Strawberry", value: "Strawberry" },
                  { id: "Vanilla", value: "Vanilla" },
                ]}
              />
            </td>
            <td className="qty">
              <input className="qty" type="Number" size="20" id="qty" />
            </td>
            <td className="unit">
              <input className="unit" type="Number" id="unit" />
            </td>
            <td className="price">
              <input className="price" type="Number" id="price" />
            </td>
            <td className="amount">
              <input className="amount" type="Number" id="amount" />
            </td>
          </tr>
          <tr>
            <td className="srno">5</td>
            <td className="item">
              <DatalistInput
                className="item"
                type="text"
                size="20"
                id="item"
                onSelect={(item) => console.log(item.value)}
                items={[
                  { id: "himanshu", value: "himanshu" },
                  { id: "Atul", value: "atul" },
                  { id: "Mint", value: "Mint" },
                  { id: "Strawberry", value: "Strawberry" },
                  { id: "Vanilla", value: "Vanilla" },
                ]}
              />
            </td>
            <td className="qty">
              <input className="qty" type="Number" id="qty" />
            </td>
            <td className="unit">
              <input className="unit" type="Number" id="unit" />
            </td>
            <td className="price">
              <input className="price" type="Number" id="price" />
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
            <td className="price">
              <input className="price" type="Number" id="price" />
            </td>
            <td className="amount">
              <input className="amount" type="Number" id="amount" />
            </td>
          </tr>
          <tr>
            <td className="srno">7</td>
            <td className="item">
              <input className="item" type="text" size="20" id="item" />
            </td>
            <td className="qty">
              <input className="qty" type="Number" id="qty" />
            </td>
            <td className="unit">
              <input className="unit" type="Number" id="unit" />
            </td>
            <td className="price">
              <input className="price" type="Number" id="price" />
            </td>
            <td className="amount">
              <input className="amount" type="Number" id="amount" />
            </td>
          </tr>
          <tr>
            <td className="srno">8</td>
            <td className="item">
              <input className="item" type="text" size="20" id="item" />
            </td>
            <td className="qty">
              <input className="qty" type="Number" size="20" id="qty" />
            </td>
            <td className="unit">
              <input className="unit" type="Number" id="unit" />
            </td>
            <td className="price">
              <input className="price" type="Number" id="price" />
            </td>
            <td className="amount">
              <input className="amount" type="Number" id="amount" />
            </td>
          </tr>
          <tr>
            <td className="srno">9</td>
            <td className="item">
              <input className="item" type="text" size="20" id="item" />
            </td>
            <td className="qty">
              <input className="qty" type="Number" id="qty" />
            </td>
            <td className="unit">
              <input className="unit" type="Number" id="unit" />
            </td>
            <td className="price">
              <input className="price" type="Number" id="price" />
            </td>
            <td className="amount">
              <input className="amount" type="Number" id="amount" />
            </td>
          </tr>
          <tr>
            <td className="srno">10</td>
            <td className="item">
              <input className="item" type="text" size="20" id="item" />
            </td>
            <td className="qty">
              <input className="qty" type="Number" id="qty" />
            </td>
            <td className="unit">
              <input className="unit" type="Number" id="unit" />
            </td>
            <td className="price">
              <input className="price" type="Number" id="price" />
            </td>
            <td className="amount">
              <input className="amount" type="Number" id="amount" />
            </td>
          </tr>
          <tr>
            <td className="srno">11</td>
            <td className="item">
              <input className="item" type="text" size="20" id="item" />
            </td>
            <td className="qty">
              <input className="qty" type="Number" id="qty" />
            </td>
            <td className="unit">
              <input className="unit" type="Number" id="unit" />
            </td>
            <td className="price">
              <input className="price" type="Number" id="price" />
            </td>
            <td className="amount">
              <input className="amount" type="Number" id="amount" />
            </td>
          </tr>
          <tr>
            <td className="srno">12</td>
            <td className="item">
              <input className="item" type="text" size="20" id="item" />
            </td>
            <td className="qty">
              <input className="qty" type="Number" size="20" id="qty" />
            </td>
            <td className="unit">
              <input className="unit" type="Number" id="unit" />
            </td>
            <td className="price">
              <input className="price" type="Number" id="price" />
            </td>
            <td className="amount">
              <input className="amount" type="Number" id="amount" />
            </td>
          </tr>
        </tbody>
      </table>
      <span id ="total"></span>
    </div>
  );
};

export default Table;
