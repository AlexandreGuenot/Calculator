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