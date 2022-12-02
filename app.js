const arr1 = ["Max", "Manuel", "Anna"];

const arr2 = ["Max", "Manuel"];

const array1 = [1, 2, 3, 4, 5];

const array2 = [1, 2, 3];

const diff1 = arr1.filter((value) => {
  console.log(value);
  !arr2.includes(value);
});

const diff2 = arr2.filter((value) => !arr1.includes(value));

const getDiff = (a, b) => {
  return a.filter((value) => !b.includes(value));
};

const getDifference = (array1, array2) => {
  return getDiff(array1, array2).concat(getDiff(array2, array1));
};

console.log(getDifference(array1, array2));

console.log(getDifference(arr1, arr2));

//or via 3rd party lib
const otherDiff = _.difference(array1, array2);
console.log(otherDiff);
