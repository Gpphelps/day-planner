var currentDay;
// Retireves the current system time and date and sets the text of the p element with the id=currentDay to be the current system time and date
setInterval(function() {
    currentDay = moment(); 
    $("#currentDay").text(currentDay.format("MMM Do, YYYY [at] hh:mm:ss"));
}, 1000);