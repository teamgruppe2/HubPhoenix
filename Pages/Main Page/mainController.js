// import { mainPageView } from "./mainView.js";

// document.addEventListener("DOMContentLoaded", () => {
//     const app = document.getElementById("main");
//     if (app) {
//         updateView("MainPage");
//     } else {
//         console.error("Element with id 'app' not found");
//     }
// });

import { mainPageView } from "./mainView.js";

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("main"); 
    if (app) {
        updateView("MainPage"); 
    } else {
        console.error("Element with id 'main' not found"); 
    }
});