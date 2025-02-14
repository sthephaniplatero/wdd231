import { places } from "../data/places.mjs";


function generateCards() {
    const container = document.getElementById("places-container");
    container.innerHTML = ""; 

    places.forEach(place => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
            <h2>${place.title}</h2>
            <figure>
                <img src="${place.photo_url}" alt="Image of ${place.name}" onerror="this.onerror=null;this.src='https://via.placeholder.com/150';">
            </figure>
            <address>${place.address}</address>
            <p>${place.description}</p>
            <p><strong>Cost:</strong> ${place.cost}</p>
            <button onclick="alert('More about ${place.name}')">Learn More</button>
        `;
        container.appendChild(cardElement);
    });
}

document.addEventListener("DOMContentLoaded", generateCards);