setInterval(function () {
    var today = new Date();
  
    document.getElementById("currentDay").innerHTML = formatDate(new Date());
  }, 1000);
  
  function formatDate(today) {
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var date = today.getDate();
    var hour = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
  
    return `${month}/${date}/${year} ${hour}:${minutes}:${seconds}`;

}

function updateBackground() {
  var hour = (new Date()).getHours(),   
    greeting = document.querySelector(".hello");    
  if (hour < 11) {
    greeting.innerText = "WAKE UP AND CODE";
  } else if (hour < 20) {
    greeting.innerText ="GET CODING!";
  } else {
    greeting.innerText = "get Some sleep";
  } 
}
setInterval(updateBackground, 1000 * 60);
updateBackground();

// todo why ??
// function updateSaveBox() {
//   var hour = (new Date()).gethours(),
//     if (hour > 5) {
//       $("#earlyHours").addClass("past");
//     } else if (hour >= 5 && hour < 10) {
//       $("#midHours").addClass("present");
//     } else if (now < 5) {
//       $("#lateHours").addClass("future");
//     }
// }

// setInterval(updateSaveBox, 1000 * 60);
// updateSaveBox();

var activities = document.querySelector("textarea");
const data = JSON.parse(localStorage.getItem("day-schedule")) || {};

$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  // retreive value from text area
  const val = $(this).siblings("textarea").eq(0).val().trim();
  // retreive the id from the parent
  const id = $(this).parent().attr("id");
  // add it to our data object
  data[id] = val;
  // save to local storage
  localStorage.setItem("day-schedule", JSON.stringify(data));
  
  // todo WHY THO
  //  if(localStorage.getItem('day-schedule') || JSON.parse(localStorage.getItem('day-schedule')).length === 0){
  //  append('textarea', JSON.stringify(data));
  });


// function renderMessage() {
//   var savedInfo = JSON.parse(localStorage.getItem("infoEntered"));
//   if (savedInfo !== null) {
//     document.querySelector(".message").textContent = savedInfo.hour + 
//     " received a/an " + savedInfo.userInfo
//   }
// }