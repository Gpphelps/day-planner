// This function runs everytime the page loads and is responsible for retrieving the user's input from local storage and displaying it to the proper textarea 
$(document).ready(function () {
    var keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
        var value = localStorage.getItem(keys[i]);
        var userAppiontment = $("#" + keys[i]).find("textarea");
        userAppiontment.val(value);
    }
});

// Retireves the current system time and date and sets the element with the id=currentDay to be the current system time and date
setInterval(function() {
    var currentDay = moment(); 
    $("#currentDate").text(currentDay.format("dddd,  MMMM Mo, YYYY [at] hh:mm:ss a"));
}, 1000);

// jQuery functions that fires on a click of the save buttons that stores the user's input from the sibling text area to the value in local storage and the id of the parent row as the key value in local storage 
$(".saveBtn").on("click", function () {
    var value = $(this).siblings(".userInput").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
});

$(".btn5").on("click", function () {
    var value = $(this).siblings(".userInput5").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
});



// Reference for DOM elements needed to change color of the userInput based upon time
var calandarBlock8= $("#userInput8");
var calandarBlock9= $("#userInput9");
var calandarBlock10= $("#userInput10");
var calandarBlock11= $("#userInput11");
var calandarBlock12= $("#userInput12");
var calandarBlock1= $("#userInput1");
var calandarBlock2= $("#userInput2");
var calandarBlock3= $("#userInput3");
var calandarBlock4= $("#userInput4");
var calandarBlock5= $("#userInput5");

// Function to change clanadar blocks different colors
// checkTime(function() {

// }, 1000);













// Constant for the dark mode/light mode switch
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

//Changes the webpages visual theme between dark and light mode
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("switchText").textContent= "Toggle Light Mode";
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById("switchText").textContent= "Toggle Dark Mode";
    }    
}
// Event listner for the dark mode/light mode toggle switch
toggleSwitch.addEventListener('change', switchTheme, false);
