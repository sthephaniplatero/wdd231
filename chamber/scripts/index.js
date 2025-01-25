const businessData = [
    {
        "name": "Tech Innovations Inc.",
        "address": "1234 Silicon Drive, San Salvador , El Salvador",
        "phone": "+1-800-555-1234",
        "website": "https://www.techinnovations.com",
        "imageFile": "tech.jpg", 
        "membershipLevel": 3,
        "industry": "Technology",
        "foundedYear": 2008
    },
    {
        "name": "Green Energy Solutions",
        "address": "567 Renewable Blvd, San Salvador , El Salvador",
        "phone": "+1-800-555-5678",
        "website": "https://www.greenenergysolutions.com",
        "imageFile": "elec.avif", 
        "membershipLevel": 2,
        "industry": "Energy",
        "foundedYear": 2015
    },
    {
        "name": "Global Fintech Co.",
        "address": "89 Wall Street, San Salvador , El Salvador",
        "phone": "+1-212-555-3456",
        "website": "https://www.globalfintech.com",
        "imageFile": "finance.avif",
        "membershipLevel": 3,
        "industry": "Finance",
        "foundedYear": 2010
    }
];

function loadBusinessSpotlights() {
    const container = document.getElementById('spotlights-container');

    businessData.slice(0, 3).forEach(business => {
        const card = document.createElement('div');
        card.className = 'spotlight-card';

        card.innerHTML = `
            <img src="images/${business.imageFile}" alt="${business.name} Logo" class="spotlight-image">
            <h3>${business.name}</h3>
            <p><strong>Industry:</strong> ${business.industry}</p>
            <p><strong>Founded:</strong> ${business.foundedYear}</p>
            <p><strong>Address:</strong> ${business.address}</p>
            <p><strong>Phone:</strong> ${business.phone}</p>
            <a href="${business.website}" target="_blank" class="spotlight-link">Visit Website</a>
        `;

        container.appendChild(card);
    });
}


document.addEventListener('DOMContentLoaded', loadBusinessSpotlights);

// Wheather API

const apiKey = '5a0dcf4ed7e8058ddc3187a5e416f423';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=San+Salvador&units=imperial&appid=${apiKey}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Wheather
        document.getElementById('temperature').textContent = `${data.main.temp}°F`;
        document.getElementById('condition').textContent = data.weather[0].description;
        document.getElementById('humidity').textContent = `${data.main.humidity}%`;
        document.getElementById('high-temp').textContent = `${data.main.temp_max}°F`;
        document.getElementById('low-temp').textContent = `${data.main.temp_min}°F`;
        
        
        const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
        const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        document.getElementById('sunrise').textContent = sunriseTime;
        document.getElementById('sunset').textContent = sunsetTime;

        // Wheather icon
        const weatherIcon = data.weather[0].icon;
        document.getElementById('weather-icon').src = `https://openweathermap.org/img/wn/${weatherIcon}.png`;

        
        document.getElementById('forecast-today').textContent = `${data.main.temp}°F`;  // Esto es solo un ejemplo
    })
    .catch(error => console.error('Error fetching weather data:', error));