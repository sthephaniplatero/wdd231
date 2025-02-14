document.addEventListener("DOMContentLoaded", () => {
    const OpenButton1 = document.querySelector("#OpenButton1");
    const OpenButton2 = document.querySelector("#OpenButton2");
    const OpenButton3 = document.querySelector("#OpenButton3");
    const dialogBox = document.querySelector("#dialogBox");
    const closeButton = document.querySelector("#closeButton");
    const dialogBoxText = document.querySelector("#dialogBoxText");
    const dialogBoxBackdrop = document.querySelector("#dialogBoxBackdrop");

    function showDialog(content) {
        if (dialogBoxText) {
            dialogBoxText.innerHTML = content; 
        }
        if (dialogBox) {
            dialogBox.classList.add('show');
            dialogBox.style.display = "flex"; 
        }
        if (dialogBoxBackdrop) {
            dialogBoxBackdrop.classList.add('show');
            dialogBoxBackdrop.style.display = "block";
        }
    }

    if (OpenButton1) {
        OpenButton1.addEventListener("click", () => {
            showDialog(`Essential Plan<br> 💰 $25/month
             <br> ✅ Initial nutritional assessment
             <br> ✅ Personalized meal plan
             <br> ✅ 1 monthly follow-up consultation
             <br> ✅ Healthy habit recommendations`);
        });
    }

    if (OpenButton2) {
        OpenButton2.addEventListener("click", () => {
            showDialog(`Plus Plan<br> 💰 $35/month
            <br> ✅ Everything in the Essential Plan
            <br> ✅ 2 follow-up consultations per month
            <br> ✅ Grocery shopping guidance
            <br> ✅ Personalized adjustments based on progress`);
        });
    }

    if (OpenButton3) {
        OpenButton3.addEventListener("click", () => {
            showDialog(`Premium Plan<br> 💰 $50/month
           <br>✅ Everything in the Plus Plan
           <br>✅ 4 follow-up consultations (weekly)
           <br>✅ Meal planning for workouts
           <br>✅ Body composition evaluation
           <br>✅ WhatsApp support for quick questions`);
        });
    }

    // Cerrar el cuadro de diálogo
    if (closeButton) {
        closeButton.addEventListener("click", () => {
            if (dialogBox) {
                dialogBox.classList.remove('show');
                dialogBox.style.display = "none";
            }
            if (dialogBoxBackdrop) {
                dialogBoxBackdrop.classList.remove('show');
                dialogBoxBackdrop.style.display = "none";
            }
        });
    }
});