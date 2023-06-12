// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  dayjs().format('h:mm A  ')
  console.log(dayjs());
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  const save = button.addEventListener("click", saveTask);
  save.appendChild
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  const currentTime = [
    {
      time: dayjs().hour(9)
    },
    {
      time: dayjs().hour(10)
    },
    {
      time: dayjs().hour(11)
    },
    {
      time: dayjs().hour(12)
    },
    {
      time: dayjs().hour(13)
    },
    {
      time: dayjs().hour(14)
    },
    {
      time: dayjs().hour(15)
    },
    {
      time: dayjs().hour(16)
    }
  ]
  const TimeDisplay = document.getElementById("hour") 
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  const taskData = window.localStorage
  // TODO: Add code to display the current date in the header of the page.
  function currentDate(){
    const today = dayjs() {
      document.getElementById('currentDay').innerHTML=today
    };
  }

});

currentDate();
