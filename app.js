function getInputValue(inputId) {
    const Input = document.getElementById(inputId);
    const amountText = Input.value;
    // const incomeAmount = parseFloat(incomeInput).value;
    const amount = parseFloat(amountText);
     // clear incomeInput
    // incomeInput.value = "";
    return amount;

}

function savingAmount(percentage) {
    const incomeAmount = getInputValue("income-input");
    const sav
}

document.getElementById("calculate-button").addEventListener("click", function () {
    const incomeAmount = getInputValue("income-input")

    // get income without expense
    let justBalance = document.getElementById("balance-text");
    // console.log(justBalance);
    const justBalanceText = justBalance.innerText;
    justBalance.innerText = incomeAmount;

    // clear incomeInput
    // incomeInput.value = "";
})

document.getElementById("calculate-button").addEventListener("click", function () {
    // food
    const foodCost = getInputValue("food-input")
    // rent 
    const rentCost = getInputValue("rent-input")
    // clothes
    const clothesCost = getInputValue("clothes-input");
    // others
    const otherCost = getInputValue("others-input");

    // update expense total
    const expenseTotal = document.getElementById("total-expenses-text");
    const expenseTotalText = expenseTotal.innerText;
 // expenseTotal.innerText = foodFloat + rentFloat + clothesFloat + othersFloat;
    expenseTotal.innerText = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost) + parseFloat(otherCost);

    // update balance after payment of total expenses
    const balanceTotal = document.getElementById("income-input");
    const balanceTotalText = parseFloat(balanceTotal).value;
    // getInputValue()
    console.log(balanceTotalText);
    balanceTotal.innerText =  parseFloat(balanceTotalText) - parseFloat(expenseTotal);

    // clear food total input
    // foodCost.value = "";
})