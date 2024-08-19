console.log('dom-events-lab')
/*-------------------------------- Constants --------------------------------*/
/*-------------------------------- Variables --------------------------------*/
let num1 = null; //declares no value for num1 initially
let num2 = null; //declares no value for num2 initially
let op = null; //declares no value for op initially
let total = null; //declares no value for total initially
/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator'); //this allows you to select/reference anything inside the calculator
const display = document.querySelector('.display'); //this allows you to select/reference the display
/*-------------------------------- Functions --------------------------------*/
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => { //this allows everything under calculator to become an event listener

  if (event.target.classList.contains('number')) { //if you click on any of the number buttons trigger the if statement below
    if (num1 != null && num2 === null){ //if num1 has a value and num2 still has no value 
      display.innerText =''; //then display the value of the button that was clicked 
      num2 = 0 //and set num2 to 0
    }display.innerText += event.target.innerText // the += allows you to click another number button and concatenate to the previous number total
  }

  if (event.target.classList.contains('operator')){ //if you click on any of the operators then trigger the if statement below
    if (num1 === null) { //if num1 has no value then
      num1 = display.innerText // show num1 in the display
      console.log(num1); // print num1
      op = event.target.innerText // gives op the value of the operator that was clicked
    }
    if(event.target.innerText === 'C'){ //if the clear buttton is pressed return everything to their default values
      display.innerText = ''
      num1 = null
      num2 = null
      op = null
      total = null
    }
  }

  if (event.target.classList.contains('equals')){  // if the equals button is clicked then
    num2 = display.innerText //show num2 in the display
    console.log(num2); // print num2
    if (op === '+'){ // do one of the following opertions to num1 and num2
      total = parseInt(num1) + parseInt(num2)
    } else if (op === '-'){
      total = parseInt(num1) - parseInt(num2)
    } else if (op === '*'){
      total = parseInt(num1) * parseInt(num2)
    } else if (op === '/'){
      total = parseInt(num1) / parseInt(num2)
    }
    display.innerText = total //show the answer in the display
  }
});



