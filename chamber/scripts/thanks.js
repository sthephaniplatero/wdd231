const currentUrl = window.location.href;

// Divide the url into two halves
const everything = currentUrl.split('?');

// Grab just the second half
let formData = everything[1].split("&");

function show(cup) {
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split("=")[1];
            result = result.replace("%40", "@");
            result = result.replace("%2B", "+");
        }
    });
    return result;
}

const showInfo = document.querySelector("#results");
showInfo.innerHTML = `
    <p>Thanks ${show("first_name")} ${show("last_name")}</p>
    <p>Your Organization Title is: ${show("org_title")}</p>
    <p>Your Email: ${show("email")}</p>
    <p>Your Mobile: ${show("mobile")}</p>
    <p>Your Organization Name: ${show("organization")}</p>
    <p>The selected membership is: ${show("membership")}</p>
    <p>The description of the Organization: ${show("description")}</p>
    
`;

document.getElementById('timestamp').value = new Date().toISOString();

function toggleModal(id) {
    const modal = document.getElementById(id);
    modal.classList.toggle('show');
}