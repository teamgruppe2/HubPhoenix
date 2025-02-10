export function mainPageView() {
    const app = document.getElementById("main"); // Ensure correct element
    if (!app) {
        console.error("Element with id 'main' not found.");
        return;
    }

    app.innerHTML = /*HTML*/`
        <h2>Velkommen til Hub Phønix</h2>
        <article>
            <p>Shankle pork loin ball tip shank, chislic tail tenderloin boudin ribeye porchetta meatball kielbasa sirloin. Shankle bresaola meatball, landjaeger rump flank andouille capicola sirloin. Kielbasa pork belly tail cupim, pork chop chuck sausage alcatra landjaeger chicken. Biltong cupim sirloin, turkey capicola rump porchetta meatball leberkas. Alcatra chuck kielbasa porchetta buffalo spare ribs short ribs capicola burgdoggen turducken jowl leberkas ham.</p>
        </article>
    `;
}
