// beign with setting the current date and time in the header jumbotron
setInterval(function () {
    var today = new Date(); // get the current date as a variable 'today'
  
    // selects the <p> html element w/ id currentDay to insert and call formatDate function
    document.getElementById("currentDay").innerHTML = formatDate(new Date()); 
  }, 1000);
  // create variables for function to return readable date to be used in innerHTML
  function formatDate(today) {
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
  
    return `${month}/${date}/${year} ${hour}:${minutes}:${seconds}`;

}
// create function to gauge current time-block and update page header message (used as test for input row colors)
function updateBackground() {
  var hour = (new Date()).getHours(),   // get new date/time/hours
    greeting = document.querySelector(".greet");   // select html element class 
  if (hour < 11) { // compair current hour less than 10am
    greeting.innerText = "WAKE UP AND CODE"; // display greet in html
  } else if (hour < 20) { // compair current hour less than 6pm
    greeting.innerText ="GET CODING!"; // if so display next greet
  } else { 
    greeting.innerText = "get Some sleep"; // if not then diplay last greet
  } 
}
setInterval(updateBackground, 1000 * 60); // set time miliseconds == 1min
updateBackground(); // call function

// todo why ??

// function updateSaveBox() {                 //create function to change row text-area color based on time
//   var hour = (new Date()).gethours(),      //get new date/time/hours
//     if (hour < 6) {                        //if hours less than 5am 
//       $("#earlyHours").addClass("past");   // select id of element and add class of past
//     } else if (hour >= 6 && hour < 10) {   // if hour greater or equal to 5am and less than 9pm
//       $("#midHours").addClass("present");  // select id of element and add class of present
//     } else if (hour < 17) {                // if hour less than 5pm
//       $("#lateHours").addClass("future");  // select id of element and add class of present
//     }
// }

// setInterval(updateSaveBox, 1000 * 60);     // set time miliseconds == 1min
// updateSaveBox(); // call function

var activities = document.querySelector("textarea");  // select text-area of html
const data = JSON.parse(localStorage.getItem("day-schedule")) || {}; // retreive save local storage to empty object?

$(".saveBtn").on("click", function (event) { // listen for save button to click
  event.preventDefault();                    // stop page reload
                                                                  
  const val = $(this).siblings("textarea").eq(0).val().trim(); // retreive value from text area
  
  const id = $(this).parent().attr("id"); // retreive the id from the parent
  
  data[id] = val; // add it to our data object
 
  localStorage.setItem("day-schedule", JSON.stringify(data));  // save to local storage
  
  // todo WHY THO
  //  if(localStorage.getItem('day-schedule') || JSON.parse(localStorage.getItem('day-schedule')).length === 0){
  //  append('textarea', JSON.stringify(data));
  });



  
// reference for trying to figure out local storage persistance 
// function renderMessage() {
//   var savedInfo = JSON.parse(localStorage.getItem("infoEntered"));
//   if (savedInfo !== null) {
//     document.querySelector(".message").textContent = savedInfo.hour + 
//     " received a/an " + savedInfo.userInfo
//   }
// }