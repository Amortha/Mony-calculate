document.getElementById('Calculate').addEventListener('click',function(){
    // food input 
 const foodinput = document.getElementById('food-input');
 const newfoodamounttext =foodinput.value;
 const newfoodamount = parseInt(newfoodamounttext);

// Rent 
 const rentinput = document.getElementById('rent-input');
 const newrentinputtext = rentinput.value;
 const newrentamount = parseInt(newrentinputtext)
 const foodrenttotal = newfoodamount + newrentamount;

//  clothes 
const clothesinput = document.getElementById('clothes-input');
const newclothestext = clothesinput.value ;
const newclothesamount = parseInt(newclothestext)
const foodrentcloth = foodrenttotal + newclothesamount

// update total-Expenses
const totalExpenses = document.getElementById('total-Expense')
const previostotalExpensestext = totalExpenses.innerText;
const previostotalExpensesamount = parseInt(previostotalExpensestext);
const newExpenses = previostotalExpensesamount +foodrentcloth ;

totalExpenses.innerText= newExpenses;
})