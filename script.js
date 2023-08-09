$(document).ready(function() {
    let currentValue = '';
    let currentOperator = '';
    let storedValue = '';
  
    function appendNumber(number) {
      currentValue += number;
      updateDisplay();
    }
  
    function appendOperator(operator) {
      if (currentValue !== '') {
        calculate();
      }
      currentOperator = operator;
      storedValue = currentValue;
      currentValue = '';
    }
  
    function calculate() {
      if (currentValue === '' || storedValue === '') {
        return;
      }
      const num1 = parseFloat(storedValue);
      const num2 = parseFloat(currentValue);
      let result = 0;
      switch (currentOperator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        case '^':
          result = Math.pow(num1, num2);
          break;
      }
      currentValue = result.toString();
      currentOperator = '';
      storedValue = '';
      updateDisplay();
    }
  
    function calculatePercentage() {
      if (currentValue !== '') {
        const num = parseFloat(currentValue);
        currentValue = (num / 100).toString();
        updateDisplay();
      }
    }
  
    function calculateSqrt() {
      if (currentValue !== '') {
        const num = parseFloat(currentValue);
        currentValue = Math.sqrt(num).toString();
        updateDisplay();
      }
    }
  
    function clearDisplay() {
      currentValue = '';
      currentOperator = '';
      storedValue = '';
      updateDisplay();
    }
  
    function updateDisplay() {
      $('#display').val(currentValue);
    }
  
    $('.btn').click(function() {
      const value = $(this).text();
      if (value >= '0' && value <= '9') {
        appendNumber(value);
      } else if (value === '+' || value === '-' || value === '*' || value === '/' || value === '^') {
        appendOperator(value);
      } else if (value === '=') {
        calculate();
      } else if (value === '%') {
        calculatePercentage();
      } else if (value === '√') {
        calculateSqrt();
      } else if (value === 'C') {
        clearDisplay();
      }
    });
  });
  