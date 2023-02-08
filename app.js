// button to set the selectedTime
const btn = document.querySelector(".start-btn");

//Heading that will change and show the time
const timerInfoHeading = document.querySelector(".timer-info-heading");

// deadline div that contains the deadline-format blocks
const deadline = document.querySelector(".deadline");

// these items are the div blocks that contain the time
const items = document.querySelectorAll(".deadline-format h4");

//Temporary values that hold the current year, month and day
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

let tempHours = tempDate.getHours;
let tempMinutes = tempDate.getMinutes;
let tempSeconds = tempDate.getSeconds;
let isRunning = false;
let isClicked = false;
tempHours = 0;
// initialisation of timer constant
let timer = new Date(tempYear, tempMonth, tempDay, tempHours, 0, 0);

// This is the time in the future that will be reached by the timer
const selectedTime = timer.getTime();

//Function to get the time that remains to reach the selectedTime

function getRemainingTime() {
  //constant with the present time
  const now = new Date().getTime();

  //constant that holds the time difference between the selected time and the present time
  const t = selectedTime - now;

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hr
  // transforming the values in ms to one day, hour and min
  // values in miliseconds
  // const oneDay = 24 * 60 * 60 * 1000;
  // const oneHour = 60 * 60 * 1000;
  // const oneMinute = 60 * 1000;

  // const oneDay = 24 * 60 * 60 * 1000;
  // const oneHour = 60 * 60 * 1000;
  // const oneMinute = 60 * 1000;
  // const oneSecond = 1000;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = tempHours + 60 * 60 * 1000;
  const oneMinute = tempMinutes + 60 * 1000;
  const oneSecond = tempSeconds + 1000;

  //calculate the values by getting the remainder of t and dividing it by the corresponding variable
  // tempHours = Math.floor((t % oneDay) / oneHour);
  // tempMinutes = Math.floor((t % oneHour) / oneMinute);
  // tempSeconds = Math.floor((t % oneMinute) / oneSecond);

  tempSeconds--;
  updateInterfaceTime();

  // create array the holds the hours, minutes and second
  const values = [tempHours, tempMinutes, tempSeconds];

  // function to format the items
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }

  // iterating through the items blocks and changing the inner html
  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  // changes the heading when the timer has finished
  // if (t < 0) {
  //   clearInterval(countdown);
  //   deadline.innerHTML = `
  //     <!-- hours -->
  //     <div class="deadline-format">
  //       <div>
  //         <h4 class="hours">00</h4>
  //         <span>Hours</span>
  //       </div>
  //     </div>
  //     <!-- end of hours -->
  //     <!-- minutes -->
  //     <div class="deadline-format">
  //       <div>
  //         <h4 class="minutes">00</h4>
  //         <span>Minutes</span>
  //       </div>
  //     </div>
  //     <!-- end of minutes -->
  //     <!-- seconds -->
  //     <div class="deadline-format">
  //       <div>
  //         <h4 class="seconds">00</h4>
  //         <span>Seconds</span>
  //       </div>
  //     </div>
  //      <!-- end of seconds -->`;

  //   //   // window.alert("Timer has expired");
  // }
}
// let countdown = setInterval(getRemainingTime, 1000);
// //set initial values
// getRemainingTime();

//countdown variable

//Testing
let countdown;

btn.addEventListener("click", () => {
  isClicked = true;

  countdown = setInterval(getRemainingTime, 1000);

  tempHours = document.getElementById("h").value;
  timer.setHours(tempHours);

  tempMinutes = document.getElementById("m").value;
  timer.setMinutes(tempMinutes);

  tempSeconds = document.getElementById("s").value;
  timer.setSeconds(tempSeconds);

  //set initial values
  getRemainingTime();
  // if (!isRunning) {
  //   clearInterval(countdown);
  // }
});

function updateInterfaceTime() {
  if (tempSeconds < 0) {
    tempSeconds = 59;
    tempMinutes--;
  }

  if (tempMinutes < 0) {
    tempMinutes = 59;
    tempHours--;
  }

  if (tempHours < 0) {
    tempSeconds = 0;
    tempMinutes = 0;
    tempHours = 0;

    clearInterval(countdown);
  }
}
