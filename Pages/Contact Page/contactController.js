// document.addEventListener("DOMContentLoaded", () => {
//     const contactForm = document.getElementById("contact-form");

//     if (!contactForm) {
//         console.error("❌ Contact form not found. Check if the form ID is correct.");
//         return;
//     }

//     contactForm.addEventListener("submit", (event) => {
//         event.preventDefault();
//         console.log("Contact form submitted!");
//     });
// });

function setupContactFormListener() {
    const contactForm = document.getElementById("contact-form");

    if (!contactForm) {
        console.error("❌ Contact form not found. Check if the form ID is correct.");
        return;
    }

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

       
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("form-message");

   
        if (!name || !email || !subject || !message) {
            formMessage.innerHTML = "⚠️ Vennligst fyll ut alle feltene.";
            formMessage.style.color = "red";
            return;
        }

        console.log("✅ Contact form submitted!", { name, email, subject, message });

      
        formMessage.innerHTML = "✅ Din melding har blitt sendt!";
        formMessage.style.color = "green";

       
        contactForm.reset();
    });
}