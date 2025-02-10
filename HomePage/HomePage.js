let nyhetstrøm = [];
let getNyhetsTittel = "";
let getNyhetsBeskrivelse = "";
let getNyhetsContainer = document.getElementById("nyhetStromContainer");



function showAllNews(){
    let html1 ="";
    console.log(nyhetstrøm.length)
    for (let i = nyhetstrøm.length-1; i >= 0; i--) {
        html1 += addHtmlNews(i);
        console.log(i)
    }
    getNyhetsContainer.innerHTML = html1;
}

function addHtmlNews(i){
    let news = nyhetstrøm[i];
     return /*HTML*/ `
        <div class="nyhetStrømBox">
            <div class="nyhetsTittelIBox">${news.nyhetsTittel}</div>
            <div class="nyhetsBeskrivelseIBox">${news.nyhetsBeskrivelse}</div>
            <div class="datoIBox">${news.dato}</div>
        </div>
    `;
    
}

function leggTilNyhet(){
    const date = new Date();
    nyhetstrøm.push({
        nyhetsTittel: getNyhetsTittel,
        nyhetsBeskrivelse: getNyhetsBeskrivelse,
        dato: date
    });
    showAllNews();
};