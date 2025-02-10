// newsletterView.js 

function loadNewsletterView() {
    
    app.innerHTML = `
        <h2>Nyhetsbrev</h2>
        <br>
        <p>Abonner på vårt nyhetsbrev for å følge med oss!</p>
        <br>
        <form id="newsletter-form">
            <label for="newsletter-email">E-post:</label><br>
            <input type="email" id="newsletter-email" name="email" required><br><br>

            <button type="submit" onclick="submitToNewsletter()">Abonner</button>
        </form>
        <br>
        <p id="newsletter-message"></p>
    `;
}
