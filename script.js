//    start from here   ///

function inputId (typeValue) {
    const totalInput = document.getElementById(typeValue);
    const getValue= totalInput.value;
    const amount = parseFloat (getValue);
    return amount ;
    
}


// button working field start from here //

document.getElementById('calculate-button').addEventListener("click", function () {

   const income = inputId ('income-input')

   const clothes = inputId ('clothes-input');

   const rent = inputId ('rent-input');

   const food = inputId ('food-input');

   const others = inputId ('others-input');

   const totalCost = food + rent + clothes + others;
    /// -----cost calculate ---------///

   const remainingBalance = income - totalCost ;
   ///-------- Balance calculate-----///

   
  
//-------------- error handeling ---------------///
   const expense = document.getElementById ('total-expenses-text')
   const expenseFloat = parseFloat (expense.innerText);

   const PresentValance = document.getElementById('balance-text');
   const innertext = parseFloat (PresentValance.innerText);
   
   
   if(isNaN(income) || isNaN(clothes) || isNaN (rent) || isNaN(food)){
    alert ("Please! give a valid value / number") ;
}
    else if(income < 0 || clothes < 0 || rent < 0 || food < 0){
    alert ("plese! input a positive value");
}
    else if(remainingBalance < 0){
    alert("Your cost is bigger then your Income");
}

    else{
    
    expense.innerText = totalCost ;

    PresentValance.innerText = remainingBalance; 

 }
   ///---------- error handling and making website more special end here -----------///


 })    



   ///------------ saving amount counting start from here--------------///

 document.getElementById ('saving-button').addEventListener ("click", function () {


    const get = document.getElementById('saving-text');
    const getInText = get.innerText ;
    const convertNumber = parseFloat (getInText);


    const savingperchant = inputId ('saving-button')
    const income = inputId ('income-input')

 
  if ( savingperchant > 0 && income > savingperchant ){
    const perchant =( income / 100 ) * savingperchant ;
    get.innerText = perchant ;
  }

   else if ( savingperchant > income ) {
      alert ( "Your saving amount is bigger then your Income")
  }
  
  else if ( savingperchant < 0 ) {
      alert ('input a positve number')
  }

  else {
      alert ("please! give a valid number and check again")
  }

    const getShowingBalance = document.getElementById("balance-text");
    const getAmountInnerText = getShowingBalance.innerText ;
    const convertShowBalanceAmount = parseFloat (getAmountInnerText) ;


    const getSaveAmount = document.getElementById("saving-text");
    const getAmountText = getSaveAmount.innerText ;
    const convertSaveAmount = parseFloat (getAmountText) ;

    const mainBalance = convertShowBalanceAmount - convertSaveAmount   ;

    const getRemaining = document.getElementById("remaining-balance-text");
    const remainingText = getRemaining.innerText ;
    const convertRemaining = parseFloat (remainingText) ;

    getRemaining.innerText = mainBalance ;



 })

