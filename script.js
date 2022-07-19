"use strict";
let passValue = document.querySelectorAll(".error")[0].value;
let confirmValue = document.querySelectorAll(".error")[1].value;
let button = document.querySelector("button");
let pass = document.querySelectorAll(".error")[0];

button.addEventListener("click", function (passValue, confirmValue) {
  if (passValue !== confirmValue) {
    pass.setCustomValidity("Passwords do not match.");
  }
});
