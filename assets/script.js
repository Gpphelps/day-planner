var currentDay;
// constant for the dark mode/light mode switch
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// Retireves the current system time and date and sets the text of the p element with the id=currentDay to be the current system time and date
setInterval(function() {
    currentDay = moment(); 
    $("#currentDay").text(currentDay.format("MMM Do, YYYY [at] hh:mm:ss"));
}, 1000);



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