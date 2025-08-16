
// 1️ Your personal API key from OpenWeatherMap
const API_KEY = "94bc8e30873a4bd19e8d0ae6a3963869";
// 2️ Listener for form submission
document.getElementById("weatherForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload when form is submitted

    // 3️ Get city name from input field
    let city = document.getElementById("cityInput").value.trim();
    // 4️ API endpoint URL with dynamic city name and API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    // 5️ Fetch weather data from the API
    fetch(url)
        .then(response => response.json())
        .then(data => {
// 6️ If API returns success (code 200)
            if (data.cod === 200) {
                const temp = data.main.temp;           // Current temperature
                const condition = data.weather[0].main; // Weather condition
                const humidity = data.main.humidity;   // Humidity percentage
                const wind = data.wind.speed;          // Wind speed (m/s)
// 7️ Choose an emoji based on condition
                let emoji = "🌤";
                if (condition.toLowerCase().includes("rain")) emoji = "🌧";
                else if (condition.toLowerCase().includes("cloud")) emoji = "☁️";
                else if (condition.toLowerCase().includes("clear")) emoji = "☀️";
                else if (condition.toLowerCase().includes("snow")) emoji = "❄️";

// 8️ Display the weather information
                document.getElementById("weatherResult").innerHTML = `
                    <h2>${emoji} Weather in ${city}</h2>
                    <p><strong>Temperature:</strong> ${temp} °C</p>
                    <p><strong>Condition:</strong> ${condition}</p>
                    <p><strong>Humidity:</strong> ${humidity}%</p>
                    <p><strong>Wind Speed:</strong> ${wind} m/s</p>
                `;

            }
            else {
                // 9️⃣ If city not found
                document.getElementById("weatherResult").innerHTML = `
                    <p>❌ City not found. Please try again.</p>
                `;
            }
        })
        // 10 Catch any errors (e.g., network issues)
        .catch(error => {
            console.error("Error fetching data:", error);
            document.getElementById("weatherResult").innerHTML = `
                <p>⚠️ There was an error fetching weather data.</p>
            `;
        });
});

