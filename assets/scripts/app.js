const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return +userInput.value;
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(calcNumber, calcDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    (calculationType !== 'ADD' &&
      calculationType !== 'SUBTRACT' &&
      calculationType !== 'MULTIPLY' &&
      calculationType !== 'DIVIDE') ||
    !enteredNumber
  ) {
    return;
  }
  const initialResult = currentResult;
  let mathOperator;

  if (
    calculationType === 'ADD' &&
    calculationType === 'SUBTRACT' &&
    calculationType === 'MULTIPLY' &&
    calculationType === 'DIVIDEE'
  ) {
  }
}
function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  //   currentResult = currentResult + enteredNumber;
  currentResult += enteredNumber;
  createAndWriteOutput('+', initialResult, currentResult);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);

  //   currentResult = currentResult + enteredNumber;
  //   //   currentResult = currentResult + parseInt(+userInput.value);
  //   outputResult(currentResult, calcDescription);
}

// const add = () => {
//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult += enteredNumber;
//   createAndWriteOutput('+', initialResult, currentResult);
//   const logEntry = {};
// };

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createAndWriteOutput('-', initialResult, currentResult);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createAndWriteOutput('*', initialResult, currentResult);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createAndWriteOutput('/', initialResult, currentResult);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

const calculate = (operation) => {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator;
  if (operation === 'ADD') {
    currentResult += enteredNumber;
    operator = '+';
  } else if (operation === 'SUBTRACT') {
    currentResult -= enteredNumber;
    operator = '-';
  } else if (operation === 'MULTIPLY') {
    currentResult *= enteredNumber;
    operator = '*';
  } else if (operation === 'DIVIDE') {
    currentResult /= enteredNumber;
    operator = '/';
  }
  createAndWriteOutput(operator, initialResult, currentResult);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
};

// addBtn.addEventListener('click', add);
// subtractBtn.addEventListener('click', subtract);
// multiplyBtn.addEventListener('click', multiply);
// divideBtn.addEventListener('click', divide);

// addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
// subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
// multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
// divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));

addBtn.addEventListener('click', () => calculate('ADD'));
subtractBtn.addEventListener('click', () => calculate('SUBTRACT'));
multiplyBtn.addEventListener('click', () => calculate('MULTIPLY'));
divideBtn.addEventListener('click', () => calculate('DIVIDE'));
