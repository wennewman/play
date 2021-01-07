header = document.querySelector('header');
const section = document.querySelector('section');

let requestURL = 'https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/wennewman/play/main/loans.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.setRequestHeader('Access-Control-Allow-Origin', requestURL);
request.responseType = 'json';
request.send();
console.log(`request: ${request}`);
console.log(`requestURL: ${requestURL}`);

request.onload = function() {
    const loans = request.response;
    populateHeader(loans);
    showLenders(loans);
}

function populateHeader(obj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = obj['loanType'];
    const h2LowRate = document.createElement('h2');
    h2LowRate.textContent = `Lowest interest rate: ${obj['bestRate']}`;
    const h2HighRate = document.createElement('h2');
    h2HighRate.textContent = `Highest interest rate: ${obj['worstRate']}`
    header.appendChild(myH1);
    header.appendChild(h2LowRate);
    header.appendChild(h2HighRate);
}

function showLenders(obj) {
    const lenders = obj['Lenders'];
    for (let i = 0; i < lenders.length; i++) {
        const myArticle = document.createElement('article');
        const lenderHead = document.createElement('h3');
        const paraOne = document.createElement('p');
        const paraTwo = document.createElement('p');
        const paraThree = document.createElement('p');
        const paraFour = document.createElement('p');
        const paraFive = document.createElement('p');
        
        lenderHead.textContent = lenders[i].Name;
        paraOne.textContent = `Advertised interest rate: ${lenders[i].advertisedRate}`;
        paraTwo.textContent = `Comparison rate: ${lenders[i].comparisonRate}`;
        paraThree.textContent = `Unsecured: ${lenders[i].Unsecured}`;
        paraFour.textContent = `Application fee: ${lenders[i].applicationFee}`;
        paraFive.textContent = `Fee structure: ${lenders[i].feeStructure}`;

        myArticle.appendChild(lenderHead);
        myArticle.appendChild(paraOne);
        myArticle.appendChild(paraTwo);
        myArticle.appendChild(paraThree);
        myArticle.appendChild(paraFour);
        myArticle.appendChild(paraFive);
        
        section.appendChild(myArticle);
    }

}