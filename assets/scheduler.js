var activities = document.querySelector("textarea");
const data = JSON.parse(localStorage.getItem("day-schedule")) || {};

// when page loads
// find all .time-block elements
$(".time-block").each(function () {
  console.log(this);
  const id = $(this).attr("id");
  // see if you have any data in local storage for each text area
  if (data[id]) {
    // place text
    console.log(data[id]);
  }
  // apply the class for if the time block is current, in the past, or in the future
});

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
});

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

var currentDay = function userInput() {
  var userInput = JSON.parse(localStorage.getItem("day-schedule"));
  if (userInput !== null) {
    document.querySelector(".container").textContent =
      userInput + " Ya got this: ";
  }
};
