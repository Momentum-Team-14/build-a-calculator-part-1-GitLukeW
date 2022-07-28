//Query Selectors
const calculator = document.querySelector('.calculator') //<---The whole calculator
const keys = document.querySelector('.ckeys') //<---The keys
const display = document.querySelector('.cdisplay') //<---The output box
let start = document.querySelector('.start');  


// Event Listeners
keys.addEventListener('click', event => {
    if (!event.target.closest('button')) return //<-- so the border does not click
  
    //setting up the const
    const key = event.target
    const keyValue = key.textContent
    const displayValue = display.textContent
    const { type } = key.dataset
    const { previousKeyType } = calculator.dataset
  
    
    //Changing the display of the input
    if (type === 'number') {
      if (
        displayValue === '0' ||
        previousKeyType === 'op'
      ) { display.textContent = keyValue
      } else {
        display.textContent = displayValue + keyValue
      }
    }
   
    //The math key function
    if (type === 'op') {
      const opKeys = keys.querySelectorAll('[data-type="op"]')
      opKeys.forEach(el => { el.dataset.state = '' })
      key.dataset.state = 'selected'
  
      calculator.dataset.firstNumber = displayValue
      calculator.dataset.op = key.dataset.key
    }
  
    //The equal button
    if (type === 'equal') {
      const firstNumber = calculator.dataset.firstNumber
      const op = calculator.dataset.op
      const secondNumber = displayValue
      display.textContent = calculate(firstNumber, op, secondNumber)
      console.log(display.textContent)
    }

    //The C button (clear)
    if (type === 'clear') {
      display.textContent = '0'
      delete calculator.dataset.firstNumber
      delete calculator.dataset.operator
    }
  
    calculator.dataset.previousKeyType = type
  })
  
  //Performing the calculation
  function calculate (firstNumber, op, secondNumber) {
    firstNumber = parseInt(firstNumber)
    secondNumber = parseInt(secondNumber)
  
    if (op === 'plus') return firstNumber + secondNumber
    if (op === 'minus') return firstNumber - secondNumber
    if (op === 'times') return firstNumber * secondNumber
    if (op === 'divide') return firstNumber / secondNumber
  }

  //The first click modal
  start.addEventListener('click', function () {

  document.querySelector(".pstart").style.display = 'none';
  document.querySelector('.startingp').style.display = 'none';
  calculator.style.display = 'block';
  //add the video event then timer to display none
});


// document.querySelector(".pstart").style.display = 'none';
//   document.querySelector('.startingp').style.display = 'none';

//   document.querySelector(".pstart").style.display = 'none';
//   document.querySelector('.startingp').style.display = 'none';

// setTimeout(function () {
//   document.getElementById("fortune").innerHTML = fortunes[randomNumber];
// }, 5500);