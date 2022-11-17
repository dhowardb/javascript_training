//#1

const firstSolution = (event) => {
  console.log('#1');
  const filteredArrayNumbers = arrayNumbers.filter((number) => number > 5);
  const mappedArrayNumbers = filteredArrayNumbers.map((num) => ({ num: num }));
  const reducedValue = filteredArrayNumbers.reduce(
    (prevValue, currValue) => prevValue * currValue
  );
  console.log(arrayNumbers);
  console.log(filteredArrayNumbers);
  console.log(mappedArrayNumbers);
  console.log(reducedValue);

  afterSolvedEffect(event);
};

//#2

const secondSolution = (event) => {
  console.log('#2');
  const maxNumber = findMax(arrayNumbers);
  console.log(maxNumber);
  afterSolvedEffect(event);
};

const findMax = (array) => (maxNumber = Math.max(...array));

//#3

const thirdSolution = (event) => {
  console.log('#3');
  const [max, min] = findMaxV2(arrayNumbers);
  console.log(max, min);
  const object = findMaxV3(arrayNumbers);
  console.log(object);
  afterSolvedEffect(event);
};

const findMaxV2 = (array) => [Math.max(...array), Math.min(...array)];
const findMaxV3 = (array) => ({
  max: Math.max(...array),
  min: Math.min(...array),
});

//#4

const fourthSolution = (event) => {
  console.log('#4');
  const updatedArray = arraySolution(arrayNumbers);
  console.log(arrayNumbers);
  console.log(updatedArray);
  //via Set
  setSolution(arrayNumbers);
  afterSolvedEffect(event);
};

const arraySolution = (array) => {
  const tmpArray = array.map((any) => any);
  tmpArray.push(1);
  tmpArray.push(3);
  tmpArray.push(17);
  tmpArray.push(15);
  const sortedArray = tmpArray.sort((a, b) => a - b);

  let prevNumber = 0;
  let newArray = [];

  //   const testArray = tmpArray.reduce((prevValue, currValue) => {
  //     prevValue.includes(currValue) ? prevValue : [...prevValue, currValue];
  //   }, []);
  //   console.log(testArray);

  const test = tmpArray.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    []
  );
  console.log(test);
  for (number of sortedArray) {
    if (prevNumber === 0) {
      prevNumber = number;
    } else if (prevNumber === number) {
      continue;
    }
    newArray.push(number);
  }
  console.log(sortedArray);
  return newArray;
};

const setSolution = (numbers) => {
  numbers.push(1);
  numbers.push(3);
  numbers.push(17);
  numbers.push(15);
  const set = new Set(numbers);
  console.log(set);
};
