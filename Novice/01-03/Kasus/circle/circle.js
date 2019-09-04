let myButton = document.querySelector('button');
let myHeading1 = document.querySelector('p.keliling');
let myHeading2 = document.querySelector('p.luas');

function calcCircumfrence(radius) {
    let keliling = Math.PI * 2 * radius
    myHeading1.textContent = "The circumference is "+keliling+" and";
}

function calcArea(radius) {
    let luas = Math.PI * radius * radius
    myHeading2.textContent = "The area is "+luas; 
}

myButton.onclick = function() {
    let radius = prompt("Tell me the radius!");
    if (radius != null && radius != 0) {
        calcCircumfrence(radius)
        calcArea(radius)
    } else {
        alert("Ulang aja ya, ga sinkron nih")
        donothing()
    }
}

function donothing() {

}