// This function creates a star element and adds it to the body of the document
function stars(){
    console.log('Function stars is called'); // Log when the function is called
    const e = document.createElement("div"); // Create a new div element
    e.setAttribute("class", "star"); // Set the class of the element to "star"
    e.style.left = Math.random() * +innerWidth + "px"; // Randomly position the star on the x-axis

    let size = Math.random() * 12; // Random size for the star
    let duration = Math.random() * 3; // Random duration for the star animation

    e.style.fontSize = 20 + "px"; // Set the font size of the star
    e.style.animationDuration = 2 + duration + "s"; // Set the duration of the star animation

    document.body.appendChild(e); // Add the star element to the body of the document

    // Remove the star element from the body after 5 seconds
    setTimeout(function(){
        document.body.removeChild(e);
    }, 5000);
}

// Call the stars function every 100ms after a delay of 2600ms
setTimeout(function(){
    setInterval(function(){
        stars();
    }, 100);
}, 2600); 

// This function updates the time and date in the document
function updateTimeAndDate() {
    const now = new Date(); // Get the current date and time
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    let options = { timeZone: "Asia/Aqtobe", hour: '2-digit', minute:'2-digit', second:'2-digit' };
    let time = now.toLocaleTimeString('ru-RU', options); // Get the current time in the specified time zone
    const date = days[now.getDay()] + ", " + now.getDate() + " " + months[now.getMonth()] + " " + now.getFullYear(); // Format the date

    document.getElementById('time').innerHTML = time; // Update the time in the document
    document.getElementById('date').innerHTML = date; // Update the date in the document
}

// Update the time and date every second
setInterval(updateTimeAndDate, 1000);

// This code block adds an event listener to the search box
document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('google_search'); // Get the search box element
    searchBox.addEventListener('keypress', function(e) {
        const key = e.which || e.keyCode;
        if (key === 13) { // If the Enter key is pressed
            // Redirect to Google search with the search box value as the query
            window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(searchBox.value);
        }
    });
});

const c = document.createElement("div"); 
    c.setAttribute("class", "copyright"); 
    c.textContent = `© 2024 stargest`; 
    document.body.appendChild(c);
