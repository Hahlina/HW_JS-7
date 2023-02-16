`use strict`;

//! Values
const inputDate = document.querySelector(".date1");
const inputDate2 = document.querySelector(".date2");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const resultTask1 = document.querySelector(".resultTask1");
const resultTask2 = document.querySelector(".resultTask2");
const resultTask3 = document.querySelector(".resultTask3");

//!CLen input
function cleanInput(input) {
  input.value = "";
}

//! Task2
let convertInDay = 86400000;
btn1.addEventListener("click", () => {
  let time = Math.floor(Date.now() / convertInDay);
  resultTask1.textContent = time + " hours";
});

//! Task3
btn2.addEventListener("click", () => {
  let enterDate = inputDate.value;
  if (enterDate) {
    brithday(enterDate);
  } else alert("Enter your birthday!");

  cleanInput(inputDate);
});

function brithday(date) {
  let today = new Date();
  let birthday = new Date(date);
  birthday.setFullYear(today.getFullYear());
  if (today > birthday) {
    birthday.setFullYear(today.getFullYear() + 1);
  }
  let daysOfBrithday = Math.floor((birthday - today) / convertInDay);
  resultTask2.textContent = `До вашого дня народження залишилося ${daysOfBrithday} 🎂 днів`;
}

//! Task 4
btn3.addEventListener("click", () => {
  let enterday = inputDate2.value;
  if (enterday) {
    weekendDays(enterday);
  } else alert("Enter your birthday!");

  cleanInput(inputDate2);
});
function weekendDays(day) {
  let weekend = new Date(day);
  if (weekend.getDay() === 0 || weekend.getDay() === 6) {
    resultTask3.textContent = "Вітаю Вас, сьогодні вихідний)";
  } else resultTask3.textContent = "Нажаль, вам потрібно іти працювати";
}
