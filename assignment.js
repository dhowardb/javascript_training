// function sayHello(name) {
//   console.log('Hi ' + name);
// }

//#1
console.log('#1');
const sayHello = (name) => console.log('Hi ' + name);

sayHello('banini');

//#2
console.log('#2');
const sayHello1 = (greet, name) => console.log(greet + ' ' + name);

const sayHello2 = () => console.log('Hi banini');

const sayHello3 = (name) => 'Hi ' + name;

sayHello1('Hi', 'banini');
sayHello2();
console.log(sayHello3('banini'));

//#3
console.log('#3');
const sayHello_03 = (name, greet = 'Hi! ') => greet + name;

const greet03 = sayHello_03('banini');
console.log(greet03);

//#4
console.log('#4');

const checkCallBack = (input) =>
  console.log(`Callback reached for input ${input}` + 'blank');

const checkInput = (callBack, ...inputs) => {
  for (const input of inputs) {
    if (!input) {
      callBack(input);
      continue;
    }
    console.log(input);
  }
};

checkInput(checkCallBack, 'test', 'test2', 'test3', 'test4');
checkInput(checkCallBack, 'testnew1', 'testnew2', '', 'testnew3', '');
checkInput(
  function (strings) {
    const input = JSON.stringify(strings);
    console.log(`Callback reached empty ${input}`);
  },
  'new1',
  'new2',
  'new3',
  '',
  'new5'
);
checkInput(
  (input) => {
    console.log(
      `Callback reached because of empty string ${JSON.stringify(input)}`
    );
  },
  'input1',
  'input2',
  ''
);

const arrayTest = ['input1', 'input2', ''];
for (const array of arrayTest) {
  console.log(array);
}

const checkIfAllNotEmpty = (callBack, ...args) => {
  let isEmpty = true;
  for (const input of args) {
    if (!input) {
      isEmpty = false;
      break;
    }
  }
  if (isEmpty) {
    callBack();
  }
};

checkIfAllNotEmpty(() => console.log('All are not Empty'), '');
checkIfAllNotEmpty(
  () => console.log('All are not Empty'),
  'string1',
  'string2',
  'string3',
  ''
);
