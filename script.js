
// 1️ Your personal API key from OpenWeatherMap
const API_KEY = "94bc8e30873a4bd19e8d0ae6a3963869";
// 2️ Listener for form submission
document.getElementById("weatherForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload when form is submitted

    // 3️ Get city name from input field
    let city = document.getElementById("cityInput").value.trim();
    // 4️ API endpoint URL with dynamic city name and API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
