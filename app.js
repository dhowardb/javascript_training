const numbers = [1, 2, 3]; //best approach
console.log(numbers);

const numbersV2 = new Array(1, 2, 3); //via objects/class with constructors
console.log(numbersV2);
const numbersTest = new Array(5); //blank array but with length 5
console.log(numbersTest);
const numberV3 = Array.of(1, 2, 3);
console.log(numberV3);
const numberV4 = Array.from('Hi!'); //splits into 'H' 'i' '!'
console.log(numberV4);

//converts array like into arrayfrom

const listItems = document.querySelectorAll('li');
console.log(listItems);

const listItemsArray = Array.from(listItems);
console.log(listItemsArray);

const personalData = [30, 'Max', { moreDetails: [] }];

const analyticsData = [
  [1, 3, 5],
  [2, 4, 6],
];

console.log(analyticsData);

for (const data of analyticsData) {
  console.log(data);
  for (const dataPoints of data) {
    console.log(dataPoints);
  }
}

const hobbies = ['Cooking', 'Sports'];
const pushedValue = hobbies.push('Reading'); //append last index
const unshiftValue = hobbies.unshift('Coding'); //add on first index OR move to right
const poppedValue = hobbies.pop(); //remove last index
hobbies.shift(); //moves to left

console.log(hobbies);
// console.log(pushedValue);
// console.log(unshiftValue);
// console.log(unshiftValue);

hobbies.splice(1, 0, 'Good Food');
console.log(hobbies);

hobbies.splice(1, 1);
console.log(hobbies);

const removeElements = hobbies.splice(-1, 1);
console.log(hobbies);

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults;
// const storedResultsSlice = testResults.slice();
// const testResultsRange = testResults.slice(0, 2);
// const testResultRange2 = testResults.slice(2);

const storedResults = testResults.concat([3.99, 2]);
// const storedResults = testResults.push([3.99, 2]);
testResults.push(5.91);

console.log(testResults, storedResults);
console.log(testResults.indexOf(1.5));
// console.log(testResults, storedResultsSlice);
// console.log(testResultsRange);
// console.log(testResultRange2);

console.log(testResults.includes(10.99));

const personData = [{ name: 'Max' }, { name: 'Manuel' }];
console.log(personData.indexOf({ name: 'Manuel' })); //returns -1

//use find for objects if not indexOf as an alternative
const manuel = personData.find((person, idx, persons) => {
  return person.name === 'Manuel';
});

console.log(manuel.name);

const maxIndex = personData.findIndex((person, idx, persons) => {
  return person.name === 'Max';
});
console.log(maxIndex);
