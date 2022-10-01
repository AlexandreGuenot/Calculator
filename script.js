const resultDisplay  = document.querySelector('#resultDisplay')
const digitsDisplay = document.getElementById("digits");
const buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
    button.addEventListener('click', ()=> {
      resultDisplay.innerHTML = button.innerHTML;
    })
})
function addition(theArray) {
    return theArray.reduce((total,item) => total+item,0);
}
function substract(theArray) {
    return theArray.reduce((total,item) => total-item,0);
}
function multiply(myArray) {
    return myArray.length ? myArray.reduce((total, item) => total * item)
    : 0;
  };
function divide(myArray) {
    return myArray.length ? myArray.reduce((total, item) => total / item)
    : 0;
  };
function operate(operator, firstNumber, secondNumber) {
    result =  operator([firstNumber, secondNumber])
    return result
}
/* Displayer for the digits 1 to 9 */
function digitsDisplayer() {
  digitsDisplay.style.setProperty('--grid-rows', 3);
  digitsDisplay.style.setProperty('--grid-cols', 3);
  for (c = 0; c < 9; c++) {
    let cell = document.createElement("button");
    cell.innerText = (9-c);
    /* The Digit is shown on the display result container  */
    cell.addEventListener('click', ()=> {
      resultDisplay.innerHTML = cell.innerText;
    })
    digitsDisplay.appendChild(cell).className = "grid-item";
  };
};
digitsDisplayer()



