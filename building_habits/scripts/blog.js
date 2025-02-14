import { articles } from "../data/articles.mjs";

function generateCards() {
    const container = document.getElementById("articles-container");
    container.innerHTML = ""; // Limpiar el contenedor antes de agregar nuevos elementos

    articles.forEach(article => { // Corregir el nombre de la variable a 'article'
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
            <h2>${article.title}</h2>
            <figure>
                <img src="${article.image_url}" alt="Image of ${article.title}" onerror="this.onerror=null;this.src='https://via.placeholder.com/150';">
            </figure>
            <author>${article.author}</author>
            <p>${article.general_idea}</p> <!-- Corregir la referencia a 'article.general_idea' -->
            <a href="${article.learn_more_url}
| " class="learn-more-button">Learn More</a>>
        `;
        container.appendChild(cardElement);
    });
}

document.addEventListener("DOMContentLoaded", generateCards);