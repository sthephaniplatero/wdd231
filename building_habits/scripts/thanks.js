const currentUrl = window.location.href;

// Divide the url into two halves
const everything = currentUrl.split('?');

// Grab just the second half
let formData = everything[1].split("&");

function show(cup) {
    let result = "";
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = decodeURIComponent(element.split("=")[1]); 
        }
    });
    return result;
}

const showInfo = document.querySelector("#results");
showInfo.innerHTML = `
    <p>Thanks ${show("first_name")} ${show("last_name")}</p>
    <p>Your Email: ${show("email")}</p>
    <p>Your Mobile: ${show("mobile")}</p>
    <p>Your plan is: ${show("membership")}</p>
    <p>Your appoinment date is: ${show("appointment_date")}</p>
    <p>Your appoinment time is: ${show("appointment_time")}</p>
`;

document.getElementById('timestamp').value = new Date().toISOString();

function toggleModal(id) {
    const modal = document.getElementById(id);
    modal.classList.toggle('show');
}