const ids = new Set(['Hi', 'from', 'Set']);

ids.add(2); //wont add, since not accepting duplicates
ids.delete('HiTest'); //no error just ignored

// ids.delete('Hi');
//for safety but not needed
if (ids.has('Hi')) {
  ids.delete('Hi');
}

const iterable = ids.entries(); //returns iterables
console.log(iterable);

for (const entry of ids.entries()) {
  //   console.log(entry);
  //to return without dups
  console.log(entry[0]);
}

//or for all entries
// for (const entry of ids.values()) {
//   console.log(entry);
// }

console.log(ids[1]); //undefined no access to indexing due to being SET(no index-based)
console.log(ids);
console.log(ids.has(1)); //true

const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };

//map does not affect original array
const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);
const personPersonalData = new Map([
  [person1, 'Male'],
  [person2, 'Female'],
]);
//to get Data
console.log(personData.get(person1));
//to set Data
personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

// for (const entry of personData.entries()) {
//   console.log(entry);
// }

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

// console.log(person1, personData);
// console.log(personPersonalData);

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}

console.log(personData.size);
