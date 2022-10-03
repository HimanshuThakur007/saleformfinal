import { React, useState, useEffect, useRef } from "react";
// import DatalistInput  from 'react-datalist-input';
import Table from "./Table";
// import GridTable from "./GridTable";
import LegendTag from "./LegendTag";
import SummaryForm from "./SummaryForm";
import "./SaleForms.css";
import SummaryTable from "./SummaryTable";
import Button from "../UI/Button";
import ImageButton from "../UI/ImageButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SaleForm = () => {
  const [startDate, setStartDate] = useState("");
  // const [dateInput, setDateInput] = useState()

  // const handel =(date, updatedDate)=>{
  //   setDateInput()
  // }




//  const validatedate = ()=> (inputText, DateFormat) { 
//     // format dd/mm/yyyy 
//     var invalid = "";
//     var dt = "";
//     var mn = "";
//     var yr = "";
//     var k;
//     var delm = DateFormat.includes("/") ? "/" : ( DateFormat.includes("-") ? "-" : ( DateFormat.includes(".") ? "." : "" ) ) ;
//     var f1 = inputText.split(delm);
//     var f2 = DateFormat.split(delm);
//     for(k=0;k<=2;k++) { 
//         dt = dt + (f2[parseInt(k)]==="dd" ? f1[parseInt(k)] : "");
//         mn = mn + (f2[parseInt(k)]==="mm" ? f1[parseInt(k)] : "");
//         yr = yr + (f2[parseInt(k)]==="yyyy" ? f1[parseInt(k)] : "");
//     }
//     var mn_days = "0-31-" + (yr % 4 === 0 ? 29 : 28) + "-31-30-31-30-31-31-30-31-30-31";
//     var days = mn_days.split("-");
//     if (f1.length!==3 ||
//     mn.length>2 ||
//     dt.length>2 ||
//     yr.length!==4 ||
//     !(parseInt(mn)>=1 && parseInt(mn)<=12) ||
//     !(parseInt(yr)>=parseInt(1900) && parseInt(yr)<=parseInt(2100)) ||
//     !(parseInt(dt)>=1 && parseInt(dt)<=parseInt(days[parseInt(mn)]))) {
//         invalid = "true";
//     }
//     alert( ( invalid==="true" ? "Invalid Date" : "Valid Date")  );
// }




///-------working date function--------------//


// console.log(validatedate(2))
var date = new Date();
var day = date.getDate();
var Month = date.getMonth() + 1;
var year = date.getFullYear();
var updatedDate = `${day}/${Month}/${year}`

//  Handel the Month -------------------------------------------------------------------------------------------------------

const dateHandler = (startDate) => {
  if(startDate === .1 || startDate === .2 || startDate === .3 || startDate === .4 || startDate === .5 || startDate === .6 || startDate === .7 || startDate === .7 || startDate === .8 || startDate === .9 || startDate === .9 
    || startDate === 10 || startDate === 11 || startDate === 12){
    switch (startDate){
      case .1:
        updatedDate = `${day}/${"0"+1}/${year}`
        // Month = january;
        break;
        case .2:
        updatedDate = `${day}/${"0"+2}/${year}`
        // Month = feb;
        break;
        case .3:
        updatedDate = `${day}/${"0"+3}/${year}`
        // Month = March;
        break;
        case .4:
        updatedDate = `${day}/${"0"+4}/${year}`
        // Month = April;
        break;
        case .5:
        updatedDate = `${day}/${"0"+5}/${year}`
        // Month = may;
        break;
        case .6:
        updatedDate = `${day}/${"0"+6}/${year}`
        // Month = june;
        break;
        case .7:
        updatedDate = `${day}/${"0"+7}/${year}`
        // Month = july;
        break;
        case .8:
        updatedDate = `${day}/${"0"+8}/${year}`
        // Month = Aug;
        break;
        case .9:
        updatedDate = `${day}/${"0"+9}/${year}`
        // Month = sep;
        break;
        case 10:
        updatedDate = `${day}/${10}/${year}`
        // Month = oct;
        break;
        case 11:
        updatedDate = `${day}/${11}/${year}`
        // Month = nov;
        break;
        case 12:
        updatedDate = `${day}/${12}/${year}`
        // Month = dec;
        break;
        default: 
        new Date()
     break;
    }
  }
}
console.log(dateHandler(.2))

// month end---------------------------------------------------------------------
 
// day Handler start----------------------------------------------------------

// const dayHandler = (startDate) =>{
//   switch (startDate) {
//     case .1: case .3: case .5:
//     case .7: case .8: case 10:
//     case 12:
//         day = 31;
//         break;
//     case .4: case .6:
//     case .9: case 11:
//         day = 30;
//         break;
//     case .2:
//         if (((year % 4 === 0) && 
//              !(year % 100 === 0))
//              || (year % 400 === 0))
//           day = 29;
//         else
//             day = 28;
//         break;
//     default:
//       new Date()
//      break;
//   }
//  }
//  console.log(dayHandler(32))

// let dayHandler = (Month, year) =>{
 
//   return new Date(year, Month, 0).getDate();

// }

// console.log(dayHandler(2020, 1))

const dayHandler = (Month, year) =>{
  var dayHandler;
  switch (Month) {
    case 1:
      dayHandler = 31
      break;
      case 2:
        if (((year % 4 === 0) && 
             !(year % 100 === 0))
             || (year % 400 === 0))
             dayHandler = 29;
        else
         dayHandler = 28;
        break;

        default:
          break;

  }
}

console.log(dayHandler(1, 2020))

// end day Handler-----------------------------------------------------------------

// const monthHandler = ()=>{
//    // ranges of month and year
//     if(year < 2021 || year > 2023 || Month === 0 || Month > 12)
//         return updatedDate}

//     var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
//     // leap years
//     if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
//         monthLength[1] = 29;

// //     // Check the range of the day
//     return day > 0 && day <= monthLength[Month - 1];
// }
// console.log(monthHandler(27))
// console.log(dateHandler(.2))

// const db = () =>{

// for (let i = 1 ; i<=12; i++){
//   var d = ".1"+i;
//   if(i === d){
//       updatedDate =  `${day}/${d}/${year}`
//       break;
//   }else {
//       // updatedDate = new Date()
//      console.log("d")
//       break;
//   }
// }
// }

// console.log(db(13))


// console.log(day);
// console.log(Month);
// console.log(year);
console.log(updatedDate);
// console.log(startDate)

//------------------------------------------------------------------------------




//     //  date formatted as "mm/dd/yyyy"
// const isValidDate = (dateString) =>
// {
//     // F for the pattern
//     if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
//         return false;

//     //  date to integers
//     var parts = dateString.split("/");
//     var day = parseInt(parts[1], 10);
//     var month = parseInt(parts[0], 10);
//     var year = parseInt(parts[2], 10);

//     // ranges of month and year
//     if(year < 2021 || year > 2023 || month === 0 || month > 12)
//         return false;

//     var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

//     // leap years
//     if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
//         monthLength[1] = 29;

//     // Check the range of the day
//     return day > 0 && day <= monthLength[month - 1];
    
// };
// console.log(isValidDate(26-10-2011))

  // const defaultValue = {
  //   year:2022,
  //   // month:09,
  //   // day:05
  // }

  // const defaultFrom = {
  //   year:2020,
  //   month: 1,
  //   day: 1,
  // }

  // const defaultTo = {
  //   year:2023,
  //   month:1,
  //   day:1
  // }

  // const defaultRange = {
  //   from: defaultFrom,
  //   to: defaultTo,
  // }

  const [inputValue, setInputValue] = useState({
    series: "",
    vehicle: "",
    sale: "",
    party: "",
    Mat: "",
    narration: "",
  });

  const { series, vehicle, sale, party, narration, Mat } = inputValue;

  const handleInputField = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveHandler = (e) => {
    e.preventDefault();
    const data = inputValue;

    setInputValue((prevState) => ({
      ...prevState,
      series: " ",
      vehicle: " ",
      sale: " ",
      party: " ",
      narration: " ",
      Mat: " ",
      startDate: "",
    }));

    console.log(data);
  };

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const dateFormat = (updatedDate) => {
  // //  if (startDate !== )
  // var d = new Date()
  // d.setStartDate(d.getFullYear() - 3);
  dateHandler(updatedDate)
    setStartDate(updatedDate);
    // console.log(setStartDate(date))
  };

  
// const dateHandler = ()=>{
//   startDate = new Date(),
//   month = startDate.split(".")[0];
//   year = startDate.getYear();
//   day = startDate.getDay();
//   updatedDate = ` `
// }

  // const formatDate = Moment().format('DD-MM-YYYY')

  // const mydate =()=> {
  //   //alert("");
  //   document.getElementById("dt").hidden = false;
  //   document.getElementById("ndt").hidden = true;
  // }

  // const mydate1 =()=> {
  //   d = new Date(document.getElementById("dt").value);
  //   dt = d.getDate();
  //   mn = d.getMonth();
  //   mn++;
  //   yy = d.getFullYear();
  //   document.getElementById("ndt").value = dt + "/" + mn + "/" + yy
  //   document.getElementById("ndt").hidden = false;
  //   document.getElementById("dt").hidden = true;
  // }

  // handleEnter key for shift focus to another input field:used on onKeyDown()

  const handleEnter = (e) => {
    if (e.keyCode === 13 || e.keyCode === 40) {
      const form = e.target.form;
      const Index = [...form].indexOf(e.target);
      form.elements[Index + 1].focus();
      e.preventDefault();
    }
  };

  // keyupHandler key for shift focus to upper input field from lower field:used on onKeyUp()

  const keyupHandler = (e) => {
    if (e.keyCode === 38) {
      const form = e.target.form;
      const index = [...form].indexOf(e.target);
      form.elements[index - 1].focus();
      e.preventDefault();
    }
  };

  // --------------------
  // const dateHandler = ()=>{
  //   start date
  // }

  //----------------------
  // console.log(startDate)

  return (
    <>
      <div className="container-fluid acc-ct">
        <div className="Heading-top d-flex justify-content-center pt-2 pb-2">
          <h5 className="head-txt px-4"> Add Sales Voucher</h5>
        </div>
        <form>
          <div className="row">
            <div className="col-7">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-lg-end justify-content-sm-center">
                  <label>Series</label>
                  <input
                    tabIndex={1}
                    className="textColor"
                    type="text"
                    name="series"
                    id="series"
                    value={series}
                   
                    onChange={handleInputField}
                    onKeyDown={handleEnter}
                    ref={inputRef}
                  />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-lg-end justify-content-sm-center">
                  <label>Date</label>
                  <DatePicker
                    tabIndex={2}
                    className="react-datepicker-ignore-onclickoutside"
                    type="text"
                    name="startDate"
                    id="startDate"
                    // dateFormat="dd/MM/yyyy"
                    dateFormat="dd/MM/yyyy"
                    // onBlur={isValidDate}
                    // value={startDate}
                    // onChange={setStartDate}
                    onChange={dateFormat}
                    selected={startDate}
                    // value = {dateInput}
                    // date ={formatDate}
                    onKeyDown={handleEnter}
                    onKeyUp={keyupHandler}
                    // changeYear= "true"
                    // controls={['date']}
                    // minDate = {new Date("1/1/2020")}
                    maxDate={new Date("1/3/2023")}
                    // defaultValue={new Date("foo")}
                    //  strictMode = {isDisabled}
                  />

                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-lg-end justify-content-sm-center ">
                  <label>Vch No.</label>
                  <input
                    tabIndex={3}
                    className="textColor"
                    type="text"
                    name="vehicle"
                    id="vehicle"
                    value={vehicle}
                    onChange={handleInputField}
                    onKeyDown={handleEnter}
                    onKeyUp={keyupHandler}
                  />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-lg-end justify-content-sm-center ">
                  <label>Sale Type</label>
                  <input
                    className="textColor"
                    type="text"
                    name="sale"
                    id="sale"
                    tabIndex={4}
                    value={sale}
                    onChange={handleInputField}
                    onKeyDown={handleEnter}
                    onKeyUp={keyupHandler}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              {/* <div className="col-5"></div> */}
              <div className="col-lg-7 col-md-12 col-sm-12 pt-0">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-3 d-flex justify-content-center">
                    <label className="party">Party</label>
                  </div>
                  {/* <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-left"> */}
                    <input
                      className="textColor"
                      type="text"
                      name="party"
                      id="party"
                      tabIndex={5}
                      value={party}
                      onChange={handleInputField}
                      onKeyDown={handleEnter}
                      onKeyUp={keyupHandler}
                    />
                  {/* </div> */}
                  <div className="col-lg-3 col-md-6 col-sm-6 d-flex justify-content-left">
                    <label className="Mat">Mat Center</label>
                  </div>
                  {/* <div className="col-lg-3 col-md-6 col-sm-10 d-flex justify-content-center"> */}
                    <input
                      className="textColor"
                      type="text"
                      name="Mat"
                      id="Mat"
                      tabIndex={6}
                      value={Mat}
                      onChange={handleInputField}
                      onKeyDown={handleEnter}
                      onKeyUp={keyupHandler}
                    />
                  {/* </div> */}
                </div>
              </div>
              
              <div className="col-12 pt-0">
                <div className="row">
                  <div className="col-lg-1 col-md-6 col-sm-6 d-flex justify-content-left">
                    <label className="narration">Narration</label>
                  </div>
                  {/* <div className="col-lg-7 col-md-7 col d-flex justify-content-center"> */}
                    <input
                      className="textColor"
                      type="text"
                      name="narration"
                      id="narration"
                      tabIndex={7}
                      value={narration}
                      onChange={handleInputField}
                      onKeyDown={handleEnter}
                      onKeyUp={keyupHandler}
                    />
                    <div className="col-11"></div>
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </form>
        <br />
        <div className="row">
          <div className="col-12">
            <div className="row ">
              {/* <GridTable onKeyDown = {handleEnter}/> */}
              <div className="col-lg-8 col-md-8 col-sm-12 order-0">
                <Table />
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 order-1 legend">
                <LegendTag title="Item Info" textarea=" " />
              </div>
              <div className="col-1 order-3"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 button">
            <div className="row apply">
              <div className="col-4 apply ">
                <Button title="Apply Tax (F4)" />
              </div>
              <div className="col-3">
                <label className="apply"> 0.00</label>
              </div>
              <div className="col-3">
                <label className="taxp">0.00 </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row summary">
              <div className="col-3">
                <SummaryForm />
              </div>

              <div className="col-4">
                <SummaryTable />
                <label className="rateItem">0.00</label>
              </div>

              <div className="col-3 legendtag">
                <LegendTag
                  className="voucher"
                  title="Voucher Info"
                  textarea=" "
                />
              </div>
              <div className="col-12 btng">
                <div className="row btngrp">
                  <div className="col-2 vch">
                    <Button title="Vch. Detail" />
                  </div>
                  <div className="col-2 master">
                    <Button title="Master Detail" />
                  </div>
                  <div className="col-2 party">
                    <Button title="Party Dash Board" />
                  </div>
                  <div className="col-2 vch_image">
                    <ImageButton title="VCH Image" />
                  </div>
                  <div className="col-2 acc_image">
                    <ImageButton title="Acc Image" />
                  </div>
                  <div className="col-2 acc_image">
                    <ImageButton title="Item Image" />
                  </div>
                  <div className="col-2 Hold">
                    <Button title="Hold Vch." />
                  </div>
                  <div className="col-2 update">
                    <Button title="Update Discount" />
                  </div>
                  <div className="col-2 check">
                    <Button title="Check Scheme" />
                  </div>
                  <div className="col-2 quit">
                    <Button title="Quit" />
                  </div>
                  <div className="col-2 save">
                    <Button onClick={saveHandler} title="Save" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SaleForm;
