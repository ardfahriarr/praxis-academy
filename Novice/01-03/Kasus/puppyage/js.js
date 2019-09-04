let myButton = document.querySelector('button');
let myHeading = document.querySelector('h4');

function calculatedogage(a) {
    if (a != null && a != 0 ) {
        NN = a * 7
        myHeading.textContent = "Your doggie is "+NN+" years old in dog years!";
        alert("Here it is, your dog age!")
    } else {
        alert("Ulang aja ya, ga sinkron nih")
        donothing()
    }
}

myButton.onclick = function() {
    let umur = prompt("How old is your dog?");
    calculatedogage(umur);
}

function donothing() {

}