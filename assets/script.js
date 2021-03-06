// Retireves the current system time and date and sets the text element with the id=currentDay to be the current system time and date
setInterval(function() {
    var currentDay = moment(); 
    $("#currentDate").text(currentDay.format("dddd,  MMMM Mo, YYYY [at] hh:mm:ss a"));
}, 1000);





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

