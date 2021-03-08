// This function runs everytime the page loads and is responsible for retrieving the user's input from local storage and displaying it to the proper textarea 
$(document).ready(function () {
    var keys = Object.keys(localStorage);
    for (let i = 0; i < keys.length; i++) {
        var value = localStorage.getItem(keys[i]);
        var userAppiontment = $("#" + keys[i]).find("textarea");
        userAppiontment.val(value);
    }
});

// jQuery functions that fires on click of the save buttons that stores the user's input from the sibling text area to the value in local storage and the id of the parent row as the key value in local storage 
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
var calandarBlock8= $("#8am");
var calandarBlock9= $("#9am");
var calandarBlock10= $("#10am");
var calandarBlock11= $("#11am");
var calandarBlock12= $("#12pm");
var calandarBlock1= $("#1pm");
var calandarBlock2= $("#2pm");
var calandarBlock3= $("#3pm");
var calandarBlock4= $("#4pm");
var calandarBlock5= $("#5pm");

// Retireves the current system time and date and sets the element with the id=currentDay to be the current system time and date updates every second
setInterval(function() {
    var currentDay = moment(); 
    $("#currentDate").text(currentDay.format("dddd,  MMMM Mo, YYYY [at] hh:mm:ss a"));

    // if loops that checks to see what hour it currently is in military (24 hour) time and adds a class to the timeblock depending on whether the given time block is after, during, or before the current hour. The values for "H" can be 0-24.
    if ((moment().format("H")) > 8 ) {
        $(calandarBlock8).addClass("past");
    } 
    if ((moment().format("H")) == 8) {
        $(calandarBlock8).addClass("present");
    } 
    if ((moment().format("H")) < 8) {
        $(calandarBlock8).addClass("future");
    }

    if ((moment().format("H")) > 9 ) {
        $(calandarBlock9).addClass("past");
    } 
    if ((moment().format("H")) == 9) {
        $(calandarBlock9).addClass("present");
    } 
    if ((moment().format("H")) < 9) {
        $(calandarBlock9).addClass("future");
    }

    if ((moment().format("H")) > 10 ) {
        $(calandarBlock10).addClass("past");
    } 
    if ((moment().format("H")) == 10) {
        $(calandarBlock10).addClass("present");
    } 
    if ((moment().format("H")) < 10) {
        $(calandarBlock10).addClass("future");
    }

    if ((moment().format("H")) > 11 ) {
        $(calandarBlock11).addClass("past");
    } 
    if ((moment().format("H")) == 11) {
        $(calandarBlock11).addClass("present");
    } 
    if ((moment().format("H")) < 11) {
        $(calandarBlock11).addClass("future");
    }

    if ((moment().format("H")) > 12 ) {
        $(calandarBlock12).addClass("past");
    } 
    if ((moment().format("H")) == 12) {
        $(calandarBlock12).addClass("present");
    } 
    if ((moment().format("H")) < 12) {
        $(calandarBlock12).addClass("future");
    }

    if ((moment().format("H")) > 13 ) {
        $(calandarBlock1).addClass("past");
    } 
    if ((moment().format("H")) == 13) {
        $(calandarBlock1).addClass("present");
    } 
    if ((moment().format("H")) < 13) {
        $(calandarBlock1).addClass("future");
    }

    if ((moment().format("H")) > 14 ) {
        $(calandarBlock2).addClass("past");
    } 
    if ((moment().format("H")) == 14) {
        $(calandarBlock2).addClass("present");
    } 
    if ((moment().format("H")) < 14) {
        $(calandarBlock2).addClass("future");
    }

    if ((moment().format("H")) > 15 ) {
        $(calandarBlock3).addClass("past");
    } 
    if ((moment().format("H")) == 15) {
        $(calandarBlock3).addClass("present");
    } 
    if ((moment().format("H")) < 15) {
        $(calandarBlock3).addClass("future");
    }

    if ((moment().format("H")) > 16 ) {
        $(calandarBlock4).addClass("past");
    } 
    if ((moment().format("H")) == 16) {
        $(calandarBlock4).addClass("present");
    } 
    if ((moment().format("H")) < 16) {
        $(calandarBlock4).addClass("future");
    }

    if ((moment().format("H")) > 16 ) {
        $(calandarBlock4).addClass("past");
    } 
    if ((moment().format("H")) == 16) {
        $(calandarBlock4).addClass("present");
    } 
    if ((moment().format("H")) < 16) {
        $(calandarBlock4).addClass("future");
    }

    if ((moment().format("H")) > 17 ) {
        $(calandarBlock5).addClass("past");
    } 
    if ((moment().format("H")) == 17) {
        $(calandarBlock5).addClass("present");
    } 
    if ((moment().format("H")) < 17) {
        $(calandarBlock5).addClass("future");
    }
}, 1000);

// Constant for the dark mode/light mode switch which is checkbox styled to look like a toggle switch
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

//Changes the webpages visual theme between dark and light mode and saves the current theme to the user's local storage
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("switchText").textContent= "Toggle Light Mode";
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById("switchText").textContent= "Toggle Dark Mode";
        localStorage.setItem('theme', 'light');
    }    
}

// Constant that is set to be the value of the current theme from local storage
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// If loops that check the currentTheme constant  and sets the data-theme of the webpage to be the currentTheme upon loading of the webpage
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// Event listner for the dark mode/light mode toggle switch
toggleSwitch.addEventListener('change', switchTheme, false);

    
