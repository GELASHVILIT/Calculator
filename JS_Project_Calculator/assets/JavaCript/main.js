const displayNumber = document.querySelectorAll(".number");
const displayOperation = document.querySelectorAll(".operation");
const displayEquals = document.querySelector("#equals");
const displayClear = document.querySelector("#clear");
const displayDelete = document.querySelector("#delete");
const currentOperandTextElement = document.querySelector("#current");

const calculator = new Calculator(currentOperandTextElement);

displayNumber.forEach(button => {
    button.addEventListener("click", () => {
        calculator.displayScreen(button.innerText);
        calculator.updateDisplay();
    })
})

displayOperation.forEach(button => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})

displayDelete.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })

displayEquals.addEventListener("click", button => {
    calculator.compute();
    calculator.updateDisplay();
})

displayClear.addEventListener("click", button => {
    calculator.clear();
    calculator.updateDisplay();
})