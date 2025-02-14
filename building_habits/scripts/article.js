import { articles } from "../data/articles.mjs"; 

function loadArticle() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const articleTitle = decodeURIComponent(urlParams.get("id")); 


    if (article) {
        
        const content = document.getElementById("article-content");
        content.innerHTML = `
            <h2>${article.title}</h2>
            <figure>
                <img src="${article.image_url}" alt="Image of ${article.title}" 
                     onerror="this.onerror=null;this.src='https://via.placeholder.com/150';">
            </figure>
            <p><strong>Author:</strong> ${article.author}</p>
            <p><strong>Category:</strong> ${article.category}</p>
            <p><strong>General Idea:</strong> ${article.general_idea}</p>

            <!-- Botón "Learn More" con la URL dinámica -->
            <a href="${article.learn_more_url}" target="_blank" rel="noopener noreferrer">
                <button style="padding: 10px 15px; background-color: #007BFF; color: white; border: none; cursor: pointer;">
                    Learn More
                </button>
            </a>
        `;
    } else {
        // Si no se encuentra el artículo, mostrar un mensaje de error
        document.getElementById("article-content").innerHTML = "<p>Article not found.</p>";
    }
}

// Ejecutar la función cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", loadArticle);