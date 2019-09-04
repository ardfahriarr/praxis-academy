let myButton1 = document.querySelector('button.celcius');
let myButton2 = document.querySelector('button.fahren');
let myHeading1 = document.querySelector('p.celcius');
let myHeading2 = document.querySelector('p.fahren');

function celsiusToFahrenheit(celcius) {
    let temp1 = (celcius*9)/5 + 32
    myHeading1.textContent = celcius+"°C is equal to "+temp1+"°F";
}

function fahrenheitToCelsius(fahren) {
    let temp2 = ((fahren - 32)*5)/9
    myHeading2.textContent = fahren+ "°F is equal to "+temp2+"°C"; 
}

myButton1.onclick = function() {
    let celcius = prompt("How hot it is?");
    if (celcius != null && celcius != 0) {
        celsiusToFahrenheit(celcius)
    } else {
        alert("Ulang aja ya, ga sinkron nih")
        donothing()
    }
}

myButton2.onclick = function() {
    let fahren = prompt("How hot it is?");
    if (fahren != null && fahren != 0) {
        fahrenheitToCelsius(fahren)
    } else {
        alert("Ulang aja ya, ga sinkron nih")
        donothing()
    }
}

function donothing() {

}