class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person {
  name = 'Max';

  constructor() {
    // super();
    this.age = 30;
  }

  // greet = () => {
  //   console.log(
  //     'Hi! I am ' + this.name + ' and I am ' + this.age + ' years old.'
  //   );
  // };
  greet() {
    console.log(
      'Hi! I am ' + this.name + ' and I am ' + this.age + ' years old.'
    );
  }
}

// const person = new Person();

// const buttonElement = document.querySelector('button');
// buttonElement.addEventListener('click', person.greet.bind(person));

// function Person() {
//   this.name = 'Max';
//   this.age = 30;

//   this.greet = function () {
//     console.log(
//       'Hi! I am ' + this.name + ' and I am ' + this.age + ' years old.'
//     );
//   };
//   // this.greet = () => {
//   //     console.log('Hi! I am ' + this.name + ' and I am ' + this.age + ' years old.');
//   // }
// }

// Person.describe = function () {
//   console.log('Creating persons..');
// };

// //overwrites the prototype or default object
// // Person.prototype = {
// //   printAge() {
// //     console.log(this.age);
// //   },
// // };
// //Instead of above use this //this yields a constructor // since it adds new object
// Person.prototype.printAge = function () {
//   console.log(this.age);
// };

// const person = new Person();
// person.greet();
// console.log(person.toString()); // does not throw error due to method exists globally or in prototype
// console.log(person.__proto__ === Person.prototype); //true Person(global class)
// console.log(person.__proto__); //true Person(global class)
// console.log(person);
// person.printAge();
// const p2 = new person.__proto__.constructor(); //only useful if you dont have direct access to your constructor
// console.log(p2);
// console.log(Object);
// console.dir(Object);
// // console.log(person.toStr()); // error due to toStr does not exists globally or in prototype
// console.log(Object.prototype); //fallback value of CONSTRUCTOR Functions by default or any OBJECT
// console.log(Object.prototype.__proto__);

const course = {
  title: 'JavaScript',
  rating: 5,
};

// console.log(course.PrintRating());  //error due to method does not exist
console.log(course.__proto__);
console.log(Object.getPrototypeOf(course)); // same as course.__proto__
Object.setPrototypeOf(course, {
  // ...Object.getPrototypeOf(course), //use to get all properties //but can be omit due to prototype chain
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});

console.log(course);
course.printRating();

const student = Object.create(
  {
    printProgress: function () {
      console.log(this.progress);
    },
  },
  {
    name: {
      configurable: true,
      enumerable: true,
      value: 'Max',
      writable: true,
    },
  }
);

// student.name = 'Max';

Object.defineProperty(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 0.8,
  writable: true,
});

console.log(student);
