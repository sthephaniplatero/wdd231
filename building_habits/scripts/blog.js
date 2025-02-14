// script.js
function toggleContent(articleId) {
    const content = document.getElementById(`content-${articleId}`);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}