function createTaxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }
  return calculateTax;
}

//this is fine but we can create a factory function
// const tax1 = calculateTax(50, 0.1);
// const tax2 = calculateTax(50, 0.2);

//using factory function
const calculateVatAmount = createTaxCalculator(0.19);
const calculateIncomeTaxAmount = createTaxCalculator(0.25);

console.log(calculateVatAmount(100));
console.log(calculateVatAmount(200));

function powerOf(x, n) {
  let result = 1;
  for (i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

console.log(powerOf(2, 3));

//via recursion
function powerOf(x, n) {
  if (n === 1) {
    return x;
  }
  return x * powerOf(x, n - 1); //x =2 n=2
}

console.log(powerOf(2, 3));

//shortest
function powerOf(x, n) {
  return n === 1 ? x : x * powerOf(x, n - 1);
}

console.log(powerOf(2, 3));

//advanced recursion

const myself = {
  name: "Max",
  friends: [
    {
      name: "Manuel",
      friends: [
        {
          name: "Chris",
          friends: [
            {
              name: "Hari",
            },
            {
              name: "Amilia",
            },
          ],
        },
      ],
    },
    {
      name: "Julia",
    },
  ],
};

function printFriendNames(person) {
  //   for (const friends of person.friends) {
  //     for (const friendsFriends of friends.friends) {
  //         for()
  //     }
  //   }
  // we dont know how many for loops is needed
  // advantage of recursion
}

function getFriendNames(person) {
  //   const collectedNames = [];
  //   const collectedNames = person === myself ? [person.name] : [];
  const collectedNames = person.name === "Max" ? [person.name] : [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    collectedNames.push(friend.name);
    collectedNames.push(...getFriendNames(friend));
  }
  return collectedNames;
}

console.log(getFriendNames(myself));
