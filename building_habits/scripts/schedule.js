document.getElementById("appointment-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value;

    // Simple validation (can be enhanced)
    if (name && email && date && time) {
        // Display confirmation message
        document.getElementById("confirmation-message").style.display = "block";

        // Optionally, clear the form
        document.getElementById("appointment-form").reset();
    } else {
        alert("Please fill out all required fields.");
    }
});