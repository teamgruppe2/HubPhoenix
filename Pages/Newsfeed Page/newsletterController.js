
function submitToNewsletter() {
    const newsletterForm = document.getElementById("newsletter-form");

    if (!newsletterForm) {
        console.error("❌ Newsletter form not found. Check if the form ID is correct.");
        return;
    }

    newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();  
        console.log("Newsletter form submitted!");

        const email = document.getElementById("newsletter-email").value.trim();
        
        
        const formMessage = document.getElementById("newsletter-message");

       
        if (!email) {
            formMessage.innerHTML = "⚠️ Vennligst oppgi en e-postadresse.";  
            formMessage.style.color = "red";
            return;
        }

        
        console.log("✅ Newsletter subscription successful!", email);

      
        formMessage.innerHTML = "✅Takk for at du abonnerer!";  
        formMessage.style.color = "green";  
        
      
        newsletterForm.reset();
    });
}
