let myButton = document.querySelector('button');
let myHeading = document.querySelector('p.output');

function isplate(plat) {
    if(!plat) {
        alert("Tidak ada inputan")
    } else {
        var regx = /[A-Za-z]{1,2}[0-9]{1,4}[A-Za-z]{1,3}/g
        var find = plat.match(regx)
        if (!find) {
            alert("Nopol "+plat+" BUKAN plat nomor Indonesia")
        } else {
            if (plat == find) {
                alert("Nopol "+plat+" adalah plat nomor Indonesia")
            } else {
                alert("Nopol "+plat+" BUKAN plat nomor Indonesia")
            }
        }
    }
}

myButton.onclick = function() {
    var plat = document.getElementById('plat').value;
    isplate(plat)
}