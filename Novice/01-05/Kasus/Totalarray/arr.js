let myButton = document.querySelector('button');
let myHeading = document.querySelector('p.output');

myButton.onclick = function() {
    var ver = parseInt(document.getElementById('ver').value)
    var hor = parseInt(document.getElementById('hor').value)
    countmatrix(ver,hor)
}

function countmatrix(x,y) {
    if (!x && !y) {
        alert("Tidak ada inputan")
    } else {
        var mA = [[]]
        var mB = [[]]
        var hasil = [[]]
        for(let i = 0; i <= x-1; i++){
            mA[i] = []
            for(let j = 0; j <= y-1; j++) {
                mA[i][j] = prompt("Masukkan angka")
            }
        }
        for(let i = 0; i <= x-1; i++){
            mB[i] = []
            for(let j = 0; j <= y-1; j++) {
                mB[i][j] = prompt("Masukkan angka")
            }
        }
        for(let i = 0; i <= x-1; i++){
            hasil[i] = []
            for(let j = 0; j <= y-1; j++) {
                hasil[i][j] = parseInt(mB[i][j]) + parseInt(mA[i][j])
            }
        }
        for(let i = 0; i <= x-1; i++){
            let pTag= document.getElementById('tableA');
            pTag.innerHTML += '<br>'
            for(let j = 0; j <= y-1; j++) {
                pTag.innerHTML += (mA[i][j]) + '&nbsp'
            }
        }
        let plustag = document.getElementById('plustag')
        plustag.innerHTML += '<b>+</b>'
        for(let i = 0; i <= x-1; i++){
            let pTag= document.getElementById('tableB');
            pTag.innerHTML += '<br>'
            for(let j = 0; j <= y-1; j++) {
                pTag.innerHTML += (mB[i][j]) + '&nbsp'
            }
        }
        let equaltag = document.getElementById('equaltag')
        equaltag.innerHTML += '<b>=</b>'
        for(let i = 0; i <= x-1; i++){
            let pTag= document.getElementById('tablehasil');
            pTag.innerHTML += '<br>'
            for(let j = 0; j <= y-1; j++) {
                pTag.innerHTML += (hasil[i][j]) + '&nbsp'
            }
        }
    }
}

