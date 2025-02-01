document.addEventListener("DOMContentLoaded", () => {
    const OpenButton1 = document.querySelector("#OpenButton1");
    const OpenButton2 = document.querySelector("#OpenButton2");
    const OpenButton3 = document.querySelector("#OpenButton3");
    const OpenButton4 = document.querySelector("#OpenButton4");
    const dialogBox = document.querySelector("#dialogBox");
    const closeButton = document.querySelector("#closeButton");
    const dialogBoxText = document.querySelector("#dialogBoxText");
    const dialogBoxBackdrop = document.querySelector("#dialogBoxBackdrop");

    // Abrir el cuadro de diálogo con el contenido correspondiente
    if (OpenButton1) {
        OpenButton1.addEventListener("click", () => {
            dialogBox.classList.add('show');
            dialogBoxBackdrop.classList.add('show');
            dialogBoxText.innerHTML = `Level: Free<br> Cost: Free<br> Benefits:<br> - Access to basic events.<br> - Newsletter subscription.`;
        });
    }

    if (OpenButton2) {
        OpenButton2.addEventListener("click", () => {
            dialogBox.classList.add('show');
            dialogBoxBackdrop.classList.add('show');
            dialogBoxText.innerHTML = `Level: Bronze<br> Cost: $50<br> Benefits:<br> - Access to basic events.<br> - Newsletter subscription.<br> - Discounts on selected events.`;
        });
    }

    if (OpenButton3) {
        OpenButton3.addEventListener("click", () => {
            dialogBox.classList.add('show');
            dialogBoxBackdrop.classList.add('show');
            dialogBoxText.innerHTML = `Level: Silver<br> Cost: $100<br> Benefits:<br> - Access to basic events.<br> - Newsletter subscription.<br> - Training sessions.<br> - Advertising opportunities.`;
        });
    }

    if (OpenButton4) {
        OpenButton4.addEventListener("click", () => {
            dialogBox.classList.add('show');
            dialogBoxBackdrop.classList.add('show');
            dialogBoxText.innerHTML = `Level: Gold<br> Cost: $200<br> Benefits:<br> - Access to basic events.<br> - Newsletter subscription.<br> - Exclusive training sessions.<br> - Premium advertising.<br> - VIP networking events.`;
        });
    }

    // Cerrar el cuadro de diálogo
    if (closeButton) {
        closeButton.addEventListener("click", () => {
            dialogBox.classList.remove('show');
            dialogBoxBackdrop.classList.remove('show');
        });
    }
});