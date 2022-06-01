"use strict";
let choosenNumber;

let getNumber = (e) => {
  choosenNumber = e.target.value;
  console.log(choosenNumber);
};

const button = document.querySelectorAll("button[value]");
button.forEach((item) => {
  item.addEventListener("click", getNumber);
});

let pressedSubmit = () => {
  console.log("test");
};

const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener("click", pressedSubmit);
