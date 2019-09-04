let myButton = document.querySelector('button');
let myHeading = document.querySelector('p.coba');

function calculateSupply(x,y) {
    if (x != null && x != 0 && y != null && y != 0) {
        let usia = 100
        let total = (y * 365) * (usia - x)
        myHeading.textContent = "You will need "+total+" of cucumber until the ripe old age of "+usia;
        alert("Here it is the result")
    } else {
        alert("Ulang aja ya, ga sinkron nih")
        donothing()
    }
}

myButton.onclick = function() {
    let umur = prompt("How old is you?");
    let consume = prompt("How many cucumber that you eat for day");
    calculateSupply(umur, consume);
}

function donothing() {

}