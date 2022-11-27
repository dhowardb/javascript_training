// const button = document.querySelector("button");
// const buttons = document.querySelectorAll("button");

const buttonClickHandler = (event) => {
  // event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log("Another button clicked!");
};

// button.addEventListener("click", buttonClickHandler);

//dont use this due to referencing/addressing
// button.addEventListener("click", () => {
//   console.log("test");
// });

//same with bind due to creating new object
// button.addEventListener("click", buttonClickHandler.bind(this));

//for bind we need to use something like this
// const boundFn = buttonClickHandler.bind(this);

// button.addEventListener("click", boundFn);
// button.removeEventListener("click", boundFn);

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
//   // button.removeEventListener("click", () => {
//   //   console.log("test");
//   // });
//   // button.removeEventListener("click", buttonClickHandler.bind(this));
// }, 2000);

// for (const button of buttons) {
//   button.addEventListener("click", buttonClickHandler);
// }

// buttons.forEach((button) => {
//   button.addEventListener("mouseenter", buttonClickHandler);
// });

// window.addEventListener("scroll", (event) => {
//   console.log(event);
// });

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

const button = document.querySelector("button");
const div = document.querySelector("div");

// document.querySelector("body").addEventListener("click", (event) => {
//   console.log("CLICKED BODY!");
// });
div.addEventListener("click", (event) => {
  console.log("CLICKED DIV!");
  console.log(event);
});

button.addEventListener("click", function (event) {
  event.stopPropagation();

  console.log("CLICKED BUTTON!");
  console.log(event);
  console.log(this);
});

const listItems = document.querySelectorAll("li");

// for (const listItem of listItems) {
//   listItem.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");
//   });
// }

//delegate an alternative to multiple event listeners
const list = document.querySelector("ul");

const submit = document.getElementById("submit");
submit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event, "submitting...");
});

list.addEventListener("click", (event) => {
  event.target.closest("li").classList.toggle("highlight");
  // form.submit(); //difference is that preventDefault is not invoke
  // button.click();
  submit.click();
});
