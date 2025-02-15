function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}


document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar-message");
    const lastVisit = localStorage.getItem("lastVisit");

    const now = new Date().getTime(); // Current timestamp

    if (!lastVisit) {
        // First visit
        sidebar.innerText = "Welcome! Let us know if you have any questions.";
    } else {
        const lastVisitTime = parseInt(lastVisit, 10);
        const timeDifference = now - lastVisitTime;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert ms to days

        if (daysDifference < 1) {
            sidebar.innerText = "Back so soon! Awesome!";
        } else {
            sidebar.innerText = `You last visited ${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago.`;
        }
    }

    // Store the current visit time in localStorage
    localStorage.setItem("lastVisit", now);
});

const words = ["About Me", " Karen Rodas", ];
let index = 0;

function changeWord() {
    const wordElement = document.getElementById("word");
    if (wordElement) {  
        wordElement.textContent = words[index];
        index = (index + 1) % words.length;
    }
}

setInterval(changeWord, 2000);
setInterval(changeWord, 2000);
