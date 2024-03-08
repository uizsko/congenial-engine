let currentCurrency = 0;

let targetCurrency = 0;




document.getElementById("rad1").addEventListener("change", function () {
    currentCurrency = 1;
});

document.getElementById("rad2").addEventListener("change", function () {
    currentCurrency = 2;
});

document.getElementById("rad3").addEventListener("change", function () {
    currentCurrency = 3;
});

document.getElementById("rad4").addEventListener("change", function () {

    targetCurrency = 4;
});

document.getElementById("rad5").addEventListener("change", function () {
    targetCurrency = 5;
});

document.getElementById("rad6").addEventListener("change", function () {
    targetCurrency = 6;
});





let result = 0;

function getValue() {
    let value = document.getElementById("userValue").value;
    //usd to usd
    if (currentCurrency == 1 && targetCurrency == 4) {
        document.getElementById("result").innerHTML = value;
        //usd to eur
    } else if (currentCurrency == 1 && targetCurrency == 5) {
        document.getElementById('result').innerHTML = value * 0.92;
        //usd to uah                        
    } else if (currentCurrency == 1 && targetCurrency == 6) {
        document.getElementById('result').innerHTML = value * 38.48;
        //eur to usd
    } else if (currentCurrency == 2 && targetCurrency == 4) {
        document.getElementById('result').innerHTML = value * 1.08;
        //eur to eur
    } else if (currentCurrency == 2 && targetCurrency == 5) {
        document.getElementById('result').innerHTML = value;
        //eur to uah
    } else if (currentCurrency == 2 && targetCurrency == 6) {
        document.getElementById('result').innerHTML = value * 41.60;
        //uah to usd
    } else if (currentCurrency == 3 && targetCurrency == 4) {
        document.getElementById('result').innerHTML = value * 0.026;
        //uah to eur
    } else if (currentCurrency == 3 && targetCurrency == 5) {
        document.getElementById('result').innerHTML = value * 0.024;
        //uah to uah
    } else if (currentCurrency == 3 && targetCurrency == 6) {
        document.getElementById('result').innerHTML = value;
    }


}



