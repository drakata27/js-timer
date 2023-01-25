const btn = document.querySelector(".confirm-btn");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const timer = new Date(tempYear, tempMonth, tempDay, 0, 0, 0);

const hours = timer.getHours();
const mins = timer.getMinutes();

btn.addEventListener("click", () => {
  let time = document.getElementById("time").value;
  console.log(time);
});

//tbc
