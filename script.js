
function inputId (id) {
    const totalInput = document.getElementById(id);
    const getValue= totalInput.value;
    const amount = parseFloat (getValue);
    return amount ;
    
}


// butoon working field start from here //

document.getElementById('calculate-button').addEventListener("click", function () {

   const income = inputId ('income-input')

   const clothes = inputId ('clothes-cost');

   const rent = inputId ('rent-cost');

   const food = inputId ('food-cost');

   const others = inputId ('others-cost');


   const totalCost = clothes + rent + food + others;
    /// -----cost calculate ---------///

   const finalBalance = income - totalCost ;
   ///-------- Balance calculate-----///

//                                     //

   /// ----------%&&%-------------///

//------------  error handeling starts here  ------------//
   const expense = document.getElementById ('expense-amount')
   const gettext = parseFloat (expense.innerText);

   const PresentBalance = document.getElementById('balance-amount');
   const mainBalanceInnerText = parseFloat (PresentBalance.innerText);
   
   
   if ( isNaN(income) || isNaN(clothes) || isNaN (rent) || isNaN(food) || isNaN(others) ) {
    alert ("your number isn't valid") ;
}
else if ( income < 0 || clothes < 0 || rent < 0 || food < 0 || others < 0) {
    alert ("plese input an positive number");
}
else if ( finalBalance < 0 ) {
    alert("Your cost is bigger then your Income");
}

else {
    
    expense.innerText = totalCost ;

    PresentBalance.innerText = finalBalance; 

 }
 //-------------  error handling ends here  -------------//
 })    



   ///------------ savings part start from here  --------------///

 document.getElementById ('saving-button').addEventListener ("click", function () {


    const get = document.getElementById('save-amount');
    const getInrText = get.innerText ;
    const convertNumber = parseFloat (getInrText);


    const savingsPerchant = inputId ('saving-input')
    const income = inputId ('income-input')

//------------  error handling starts here  --------------//
  if ( savingsPerchant > 0 && income > savingsPerchant ){
    const perchant =( income / 100 ) * savingsPerchant ;
    get.innerText = perchant ;
  }

   else if ( savingsPerchant > income ) {
      alert ( "Your saving amount is bigger then your income")
  }
  
   else if ( savingsPerchant < 0 ) {
      alert ('input a positve number')
  }

   else {
      alert ("please input a valid number and check again the value with attention")
  }
  //------------  error handling ends here  --------------//



    const getshowblnc = document.getElementById("balance-amount");
    const getiamountinnertext = getshowblnc.innerText ;
    const convertshowblncamount = parseFloat (getiamountinnertext) ;


    const getSavingsAmount = document.getElementById("save-amount");
    const getAmountText = getSavingsAmount.innerText ;
    const convertsaveamount = parseFloat (getAmountText) ;

    const finalBalance = convertshowblncamount - convertsaveamount   ;

    const getRemaining = document.getElementById("remaining-balance");
    const remainingText = getRemaining.innerText ;
    const converremaining = parseFloat (remainingText) ;

    if(finalBalance < 0) {
        alert("sorry! your saving amount is greater than your balance after all costs")
    }
    else{
        getRemaining.innerText = finalBalance ;
    }



 })

