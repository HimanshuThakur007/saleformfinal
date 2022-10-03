import React from 'react'

const Date = () => {

//    // Validates that the input string is a valid date formatted as "mm/dd/yyyy"
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
//     if(year < 1000 || year > 3000 || month === 0 || month > 12)
//         return false;

//     var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

//     // leap years
//     if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0))
//         monthLength[1] = 29;

//     // Check the range of the day
//     return day > 0 && day <= monthLength[month - 1];
// };


   // document.getElementById(function () {
   //      document.getElementById('#datepicker1').datepicker();
   //  });
// -----------------------------------------------------------------------

// var date = new Date();
// var day = date.getDate();
// var Month = date.getMonth() + 1;
// var year = date.getFullYear();
// var updatedDate = `${day}/${Month}/${year}`


// const dateHandler = (startDate) => {
//    if(startDate === .1 || startDate === .2){
//      switch (startDate){
//        case .1:
//          updatedDate = `${day}/${"0"+1}/${year}`
//          // Month = january;
//          break;
//          case .2:
//          updatedDate = `${day}/${"0"+2}/${year}`
//          // Month = january;
//          break;
//          default:
//       break;
//      }
//    }
//  }
//  console.log(dateHandler(.1))
//  // console.log(dateHandler(.2))
//  console.log(day);
// console.log(Month);
// console.log(year);
// console.log(updatedDate)
 
 // const db = () =>{
 
 // for (let i = 1; i<=12;i++){
 //   var d = 3
 //   if(i===d){
 //       console.log("h");
 //       return;
 //   }else {
 //       console.log("a")
 //   }
 // }
 // }
 
 // console.log(db(3))
 
 


// ------------------------------------------------------------------------
  return (
    <div>
        <div className="container">
   <div className="row">
      <div className='col-sm-6'>
         <div className="form-group">
            <div className='input-group date' id='datepicker1'>
               <input type='text' className="form-control"/>
               <span className="input-group-addon">
               <span className="glyphicon glyphicon-calendar"></span>
               </span>
            </div>
         </div>
      </div>
      {/* <script type="text/javascript"> */}
       
      {/* </script> */}
   </div>
</div>
    </div>
  )
}

export default Date

// ----------------

// Validates that the input string is a valid date formatted as "mm/dd/yyyy"
// function isValidDate(dateString)
// {
//     // First check for the pattern
//     if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
//         return false;

//     // Parse the date parts to integers
//     var parts = dateString.split("/");
//     var day = parseInt(parts[1], 10);
//     var month = parseInt(parts[0], 10);
//     var year = parseInt(parts[2], 10);

//     // Check the ranges of month and year
//     if(year < 1000 || year > 3000 || month == 0 || month > 12)
//         return false;

//     var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

//     // Adjust for leap years
//     if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
//         monthLength[1] = 29;

//     // Check the range of the day
//     return day > 0 && day <= monthLength[month - 1];
// };

//--------------------