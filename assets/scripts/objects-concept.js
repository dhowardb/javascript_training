const movieList = document.getElementById('movie-list');

// movieList.style.backgroundColor = 'red'; // or can be used
// movieList.style['backgroundColor'] = 'red';
movieList.style['background-color'] = 'red'; // if string is used we can used non translated or original names
movieList.style.display = 'block';

const userChosenKeyName = 'level';

const person = {
  //   name: 'Max',
  'first name': 'Max',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  // userChosenKeyName: userChosenKeyName,
  //   userChosenKeyName: 'newKeyName',
  [userChosenKeyName]: 'newKeyName', //used this if we want to set property from outside variables
  greet: () => {
    alert('Hi there!');
  },
};

person.isAdmin = true;
delete person.age; // or set to undefined to remove the property(dont use undefined)
//setting the person.age = null will clear the value but not remove the property

const keyName = 'first name';

console.log(person['first name']);
console.log(person[keyName]);

console.log(person);

// person.greet();
