"use strict";
let choosenNumber;
const button = document.querySelectorAll("button[value]");
const submitButton = document.querySelector('button[type="submit"]');
const ratingItems = document.querySelector(".rating-item");
const image = document.querySelector(".img-star");
const textItem = document.querySelector(".text-item");
const h2 = document.querySelector("h2");
const pTag = document.querySelector("p");
const newEl = document.createElement("p");
const container = document.querySelector(".container");
const newImage = document.createElement("img");
const body = document.querySelector("body");
newImage.src = "images/illustration-thank-you.svg";

// get value without eventlistener for each btn
const checkClickArea = (e) => {
  if (!e.target.closest("button[value]")) {
    return (choosenNumber = undefined);
  }
  choosenNumber = e.target.value;
  parseInt(choosenNumber);
};

document.addEventListener("click", checkClickArea);

const pressedSubmit = () => {
  if (choosenNumber === undefined) {
    return alert("Please select a number!");
  }
  submitButton.remove();
  ratingItems.remove();
  image.remove();
  textItem.classList.add("centerText");
  h2.innerText = "Thank you!";
  pTag.innerText = `We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!`;
  newEl.innerText = `You selected ${choosenNumber} out of 5`;
  container.classList.add("centerElements");
  newEl.classList.add("centerText", "primaryColor");
  container.insertAdjacentElement("afterbegin", newEl);
  newImage.classList.add("thankYouIllustration");
  container.insertAdjacentElement("afterbegin", newImage);
};

submitButton.addEventListener("click", pressedSubmit);
