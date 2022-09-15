const successClassName = "success";
const errorClassName = "error";

document.querySelector("[name = name]").addEventListener("input", function () {
  this.value;
  const nameAndSurname = /^[A-Z][a-z]*(-|\s)[A-Z][a-z]*$/;
  if (nameAndSurname.test(this.value)) {
    document.getElementById("check-name").classList.add(successClassName);
    document.getElementById("check-name").classList.remove(errorClassName);
  } else {
    document.getElementById("check-name").classList.remove(successClassName);
    document.getElementById("check-name").classList.add(errorClassName);
  }
});

document.querySelector("[name = phone]").addEventListener("input", function () {
  this.value;
  const phoneNumber = /^(?:\+38)?(0\d{9})$/;
  if (phoneNumber.test(this.value)) {
    document.getElementById("check-phone").classList.add(successClassName);
    document.getElementById("check-phone").classList.remove(errorClassName);
  } else {
    document.getElementById("check-phone").classList.remove(successClassName);
    document.getElementById("check-phone").classList.add(errorClassName);
  }
});

document.querySelector("[name = phone]").addEventListener("input", function () {
  this.value;
  const phoneNumber = /^(?:\+38)?(0\d{9})$/;
  if (phoneNumber.test(this.value)) {
    document.getElementById("check-phone").classList.add(successClassName);
    document.getElementById("check-phone").classList.remove(errorClassName);
  } else {
    document.getElementById("check-phone").classList.remove(successClassName);
    document.getElementById("check-phone").classList.add(errorClassName);
  }
});

document.querySelector("[name = email]").addEventListener("input", function () {
  this.value;
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.test(this.value)) {
    document.getElementById("check-email").classList.add(successClassName);
    document.getElementById("check-email").classList.remove(errorClassName);
  } else {
    document.getElementById("check-email").classList.remove(successClassName);
    document.getElementById("check-email").classList.add(errorClassName);
  }
});

document.querySelector("[name = card]").addEventListener("input", function () {
  this.value;
  const card =
    /^5[1-5][0-9]{14}|^(222[1-9]|22[3-9]\\d|2[3-6]\\d{2}|27[0-1]\\d|2720)[0-9]{12}$/;
  if (card.test(this.value)) {
    document.getElementById("check-card").classList.add(successClassName);
    document.getElementById("check-card").classList.remove(errorClassName);
  } else {
    document.getElementById("check-card").classList.remove(successClassName);
    document.getElementById("check-card").classList.add(errorClassName);
  }
});

const form = document.querySelector("#order-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    document
      .getElementById("check-name")
      .classList.contains(successClassName) &&
    document
      .getElementById("check-phone")
      .classList.contains(successClassName) &&
    document
      .getElementById("check-email")
      .classList.contains(successClassName) &&
    document.getElementById("check-card").classList.contains(successClassName)
  ) {
    return console.log("Submited");
  }
  return console.log("error");
});
