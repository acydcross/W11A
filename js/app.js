var headerElement = document.getElementById('headerEvent');

headerElement.addEventListener('click', function() {
    headerElement.style.color = "red";
});

var bodyElement = document.getElementById('body');

bodyElement.addEventListener('keypress', function(eventDetails) {
    if(eventDetails.key == " ") {
        console.log(eventDetails)
        bodyElement.style.backgroundColor = "green";
    }
});

var hoverElement = document.getElementById('headerEvent');

hoverElement.addEventListener('mouseover', function() {
    hoverElement.style.fontFamily = 'Italic';
    hoverElement.style.color = 'yellow';
})