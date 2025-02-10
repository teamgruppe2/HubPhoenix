// // controller.js

// function updateView(page) {
//     console.log("Navigating to: " + page);
    
//     const mainContent = document.getElementById('main');

//     if (page === 'MainPage') {
//         mainContent.innerHTML = '<h2>Welcome to the Main Page</h2>';
//     } else if (page === 'ContactPage') {
//         loadContactUsView();  
//     } else if (page === 'NewsletterPage') {
//         loadNewsletterView();  
//     } else {
//         mainContent.innerHTML = '<h2>Page not found</h2>';
//     }
// }

function updateView(page) {
    console.log("Navigating to: " + page);
    
    model.app.currentPage = page;

    const mainContent = document.getElementById('main');

    switch (page) {
        case "MainPage":
            loadMainPageView();
            break;
        case "ContactPage":
            loadContactUsView(); 
            break;
        case "NewsletterPage":
            loadNewsletterView();
            break;
        default:
            mainContent.innerHTML = '<h2>404 - Page Not Found</h2>';
    }
}