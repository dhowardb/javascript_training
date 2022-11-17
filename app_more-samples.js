const prices = [10.99, 5.99, 3.99, 6.59];

const tax = 0.19;
// const taxAdjustedPrices = [];

// for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }

// console.log(taxAdjustedPrices);

//alternative for for of loop
// taxAdjustedPrices.splice(0);
// prices.forEach((price, index, prices) => {
//   const priceObj = { index: index, taxAdjustedPrices: price * (1 + tax) }; //much easier to create object since we also handle INDEX compare to for loop
//   //   taxAdjustedPrices.push(price * (1 + tax));
//   taxAdjustedPrices.push(priceObj);
// });
// console.log(taxAdjustedPrices);

//alternative for forEach
//map creates a new return object and not changes anything on the original array
const taxAdjustedPrices = prices.map((price, index, prices) => {
  const priceObj = { index: index, taxAdjustedPrices: price * (1 + tax) }; //much easier to create object since we also handle INDEX compare to for loop
  //   taxAdjustedPrices.push(price * (1 + tax));
  return priceObj;
});
console.log(prices, taxAdjustedPrices);

// const sortedPrices = prices.sort(); //converts string therefore need to add logic
// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });

//via MDN or note
const sortedPrices = prices.sort((a, b) => a - b);

console.log(sortedPrices);
console.log(sortedPrices.reverse()); // better to just update your sorted logic, 1st cond returns -1 last condition returns 1
const reverseSortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});
console.log(reverseSortedPrices);

const filteredArray = prices.filter((price, index, prices) => {
  return price > 6;
});

const filteredArrayV2 = prices.filter((price) => price > 6);

console.log(filteredArray);

let sum = 0;
const sumArray = prices.map((price) => {
  sum += price;
  return price;
});

console.log(sum, sumArray);

//or ignore return object for sum if no need return
sum = 0;
prices.map((price) => (sum += price));
console.log(prices, sum);

sum = 0;
prices.forEach((price) => (sum += price));
console.log(prices, sum);

//prevValue = initial set by you => 0
//curValue 1st value of array => price
const sumReduce = prices.reduce((prevValue, curValue, curIndex, prices) => {
  return prevValue + curValue;
}, 0);

const sumReduceV2 = prices.reduce(
  (prevValue, curValue) => prevValue + curValue,
  0
);
console.log(sumReduce, sumReduceV2);

//test samples

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

const count = fruitBasket.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, {});

console.log(count);

const arrayData = [];
const data = 'new york;10.99;2000';
const transformedData = data.split(';');
for (const data of transformedData) {
  arrayData.push(data);
}
const testArrayData = [...transformedData];
const newTestArrayData = testArrayData.map((data) => +data);
const test = transformedData.map((data) => +data);
console.log(newTestArrayData);
const arrayConvertedData = arrayData.map((data) => +data);
// arrayData[1] = +arrayData[1];
// const transformData = data.map((data) => +data);
console.log(transformedData, arrayData, arrayConvertedData);

const nameFragments = ['Howard', 'DH'];
const name = nameFragments.join(' ');
console.log(name);

const copiedNameFragments = [...nameFragments];
nameFragments.push('Mr'); //this wont be added on the spread since not referencing
console.log(copiedNameFragments);

//finding Mininimum values of an array
console.log(Math.min(prices)); // => Nan
console.log(Math.min([prices])); // =>Nan
console.log(Math.min(...prices)); // => 3.99    ->used this

const persons = [
  { name: 'Max', age: 30, hobbies: ['Code', 'Study'] },
  { name: 'Manuel', age: '31', hobbies: [] },
];

const copiedPersons = [...persons];
//if you want to add new objects created

//created to not be affected by outside changes due to referencing
const copiedPersonsV2 = persons.map((person) => ({
  //brackets no need since map returns array, add parenthesis'()' if you want to return objects
  name: person.name,
  age: person.age,
  //   hobbies: person.hobbies,
  hobbies: [...person.hobbies],
}));
persons.push({ name: 'Anna', age: 29 });
persons[0].age = 99; //affects existing objects but not new objects due to addressing
//working since this is the address of the same memory with same reference

console.log(persons, copiedPersons, copiedPersonsV2);

const nameData = ['Howard', 'DH', 'Mr', 30];
// const firstName = nameData[0];
// const lastName = nameData[1];

//use this instead of manually via deconstructuring
const [firstName, lastName, ...otherInformation] = nameData; //rest operator get all remaining that are not stored to a parameter
console.log(firstName, lastName, otherInformation);
