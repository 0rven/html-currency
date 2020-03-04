fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);

    let template = document.getElementById('currency-template');
    let mainDiv = document.getElementsByClassName('main')[0];

    for (let currency of data) {

    let currencyDiv = template.cloneNode(true);
    currencyDiv.removeAttribute ('id');
    let txtBlock = currencyDiv.querySelector(".txt");
    let rateBlock = currencyDiv.querySelector(".rate");

    txtBlock.innerText = currency.txt;
    rateBlock.innerText = currency.rate;
    mainDiv.appendChild(currencyDiv);
    }

    mainDiv.removeChild(template);
  });

function convert(elem) {

let rate = elem.querySelector(".rate").innerText;
let txt = elem.querySelector(".txt").innerText;

  console.log(rate);
let sum = document.getElementById('sum').value;
let resultElem = document.getElementById('result');
let currencyNameElem = document.getElementById('currency-name');

if (sum > 0) {
  resultElem.innerText = sum / rate;
  currencyNameElem.innerText = txt;

}

if (sum == '') {
  resultElem.innerText = 'Спочатку введіть суму';
}}
