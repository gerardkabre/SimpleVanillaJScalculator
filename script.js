var app = (function() {
    
  let value = "",
    intValue = 0,
    operation = "",
    result = 0,
    numbers,
    displayNumber,
    addOperator,
    equalsOperator;

  function init() {
    selectElements();
    addEventListeners();
  }

  function selectElements() {
    numbers = document.querySelectorAll(".number");
    operators = document.querySelectorAll(".operator");
    equalsOperator = document.querySelector("#equals");
    displayNumber = document.querySelector("#display");
    clearData = document.querySelector("#clear");
  }
  
  function addEventListeners() {
    numbers.forEach(x => x.addEventListener("click", numberHandler));
    operators.forEach(x => x.addEventListener("click", operatorsHandler));
    equalsOperator.addEventListener("click", equalsHandler);
    clearData.addEventListener("click", clearHandler);
  }
  // handlers from the EventListeners 
  function numberHandler(event) {
    if (displayNumber.textContent == result) {
      intValue = result;
      result = 0;
      value = "";
    }
    value = value + event.target.id;
    displayNumber.textContent = value;
  }

  function operatorsHandler(event) {
    intValue = parseInt(value);
    operation = event.target.id;
    value = "";
  }

  function clearHandler(event) {
    result = 0;
    displayNumber.textContent = result;
    operation = "";
  }

  function equalsHandler(event) {
    switch (operation) {
      case "plus":
        result = intValue + parseInt(value);
        break;
      case "less":
        result = intValue - parseInt(value);
        break;
      case "multiply":
        result = intValue * parseInt(value);
        break;
      case "divide":
        result = intValue / parseInt(value);
        break;
    }
    displayNumber.textContent = result;
    operation = "";
  }

  return { init: init };

})();

app.init();

