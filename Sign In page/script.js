"use strict";
const signUpBtn = document.getElementById("signup");
const signInBtn = document.getElementById("signin");
const moveContainer1 = document.getElementById("container1");
const moveContainer2 = document.getElementById("container2");
const containerSignUp = document.querySelector(".container_signup");
const contaianerSignIn = document.querySelector(".container_signin");

signUpBtn.addEventListener("click", function () {
  moveContainer2.classList.toggle("move_left");
  moveContainer2.classList.remove("hidden");
  moveContainer1.classList.add("hidden");
  contaianerSignIn.classList.add("hidden");
  containerSignUp.classList.remove("hidden");
  containerSignUp.classList.toggle("move_right");
});

signInBtn.addEventListener("click", function () {
  moveContainer1.classList.toggle("move_left");
  moveContainer1.classList.remove("hidden");
  moveContainer2.classList.add("hidden");
  containerSignUp.classList.add("hidden");
  contaianerSignIn.classList.remove("hidden");
  contaianerSignIn.classList.toggle("move_right");
});
