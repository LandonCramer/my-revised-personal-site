//add event listener for mouseover event
var h1Element = document.getElementById('landon');

h1Element.addEventListener('mouseover', function() {
    h1Element.style.fontSize = "40px";
});

h1Element.addEventListener('mouseout', function() {
    h1Element.style.fontSize = "24px";
});