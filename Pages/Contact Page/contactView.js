// function loadContactUsView() {
//     const mainContent = document.getElementById('main');
    
//     mainContent.innerHTML = `
//         <h2>Kontakt oss</h2>
//         <form id="contact-form">
//             <label for="name">Navn:</label><br>
//             <input type="text" id="name" name="name" required><br><br>

//             <label for="email">E-post:</label><br>
//             <input type="email" id="email" name="email" required><br><br>

//             <label for="subject">Emne:</label><br>
//             <input type="text" id="subject" name="subject" required><br><br>

//             <label for="message">Melding:</label><br>
//             <textarea id="message" name="message" required></textarea><br><br>

//             <button type="submit">Send</button>
//         </form>
//         <p id="form-message"></p>
//     `;
// }

function loadContactUsView() {
    const mainContent = document.getElementById('main');

    mainContent.innerHTML = `
        <h2>Kontakt oss</h2>
        <br>
        
        <p>
        <i class="fas fa-phone-alt" style="font-size: 24px; margin-right: 10px; vertical-align: middle;"></i>
        Tlf. +47 00 00 00 00
        </p>
        <br>
        <p>
        <i class="fas fa-envelope" style="font-size: 24px; margin-right: 10px; vertical-align: middle;"></i>
        E-post: eksempel@hubphonix.no
        </p>
        <br>
        <p>Besøk oss på vår adresse:</p>
        <p>  Phønixbrygga 3, 1606 Fredrikstad</p>
        <br>

         <iframe src="https://storage.googleapis.com/maps-solutions-l57q8yo90e/locator-plus/2l99/locator-plus.html"
         width="550px" height="350px"
         style="border:0;"
         loading"lazy">
         </iframe>
       

        <p>Eller send oss en melding, så svarer vi så snart vi kan!</p>
        <br>
        <form id="contact-form">
            <label for="name">Navn:</label><br>
            <input type="text" id="name" name="name" required><br><br>

            <label for="email">E-post:</label><br>
            <input type="email" id="email" name="email" required><br><br>

            <label for="subject">Emne:</label><br>
            <input type="text" id="subject" name="subject" required><br><br>

            <label for="message">Melding:</label><br>
            <textarea id="message" name="message" required></textarea><br><br>

            <button type="submit">Send</button>
        </form>
        <br>
        <p id="form-message"></p>
    `;

    setupContactFormListener(); 
}
