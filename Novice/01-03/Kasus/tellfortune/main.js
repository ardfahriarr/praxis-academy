let myButton = document.querySelector('button');
let myHeading = document.querySelector('h4');

function tellfortune(a,b,c,d) {
    alert("bimsalabim")
    if (a != null && b != null && c != null && d != null && a != 0 && b != 0 && c != 0 && d != 0) {
        myHeading.textContent = "You'll be a "+d+" in "+c+", and married to "+b+" with "+a+" kids";
        alert("Hope u enjoy my work, haha")
    } else {
        alert("Ulang aja ya, ga sinkron nih")
        donothing()
    }
}

myButton.onclick = function() {
    let anak = prompt("How many child that you want?");
    let istri = prompt("What is your partner's name?");
    let tempat = prompt("Tell me one place that you think you'll enjoy to work there");
    let ngapa = prompt("And what you'll gonna do there?");
    tellfortune(anak,istri,tempat,ngapa);
}

function donothing() {

}