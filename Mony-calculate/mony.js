function getInputValue(inputId){
    const inputTotal = document.getElementById(inputId + '-total');
    const inputTotalText = inputTotal.value;
    const inputTotalAmount = parseInt(inputTotalText);
    return inputTotalAmount;
}
// calculate button
document.getElementById('calculating-btn').addEventListener('click', () => {
    // income total
    const incomeTotalAmount = getInputValue('income');
    if (incomeTotalAmount > 0){
    
    }
    else{
        alert('chack your empty Income and  plz your input Month Income')
    }
 
    // Food 
    const foodExpAmount = getInputValue('foodexp');
  
    // Rent 
    const rentExpAmount = getInputValue('rentexp');
   
    // Clothes expense
    const clothExpAmount = getInputValue('clothexp');

    // total expenses
    const totalExp = document.getElementById('expense-total');
    if (foodExpAmount > 0 && rentExpAmount > 0 && clothExpAmount > 0) {
        totalExp.innerText = foodExpAmount + rentExpAmount + clothExpAmount;
    }
    const totalExpAmount = parseInt(totalExp.innerText);
    // update balance
    const balance = document.getElementById('balance-total');
    if (incomeTotalAmount > 0 && totalExpAmount > 0) {
        balance.innerText = incomeTotalAmount - totalExpAmount;
    } 
});
    // save Blance 
document.getElementById('save-button').addEventListener('click', () => {
    
    // balance
    const balanceText = document.getElementById('balance-total');
    const balanceAmount = parseInt(balanceText.innerText);
    console.log(balanceAmount);

    // saving balance
    const saveBalanceText = document.getElementById('saved-amount');
    const saveBalance = parseInt(saveBalanceText.innerText);
    console.log(saveBalance);

    const parcent = getInputValue('parcent');
    const incomeTotalAmount = getInputValue('income');
   
    //  parcent
    const findOutPercent = (incomeTotalAmount / 100) * parcent;
    
    // update  parcent
    const saveMoney = document.getElementById('saved-amount');
    saveMoney.innerText = findOutPercent;
    const saveMoneyAmount = parseInt(saveMoney.innerText);
    const remindingBalance = document.getElementById('remaining-balance');
    const remindingBalanceAmount = balanceAmount - saveMoneyAmount;
    remindingBalance.innerText = remindingBalanceAmount;
});