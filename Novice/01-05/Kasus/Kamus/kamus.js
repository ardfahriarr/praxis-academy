let buttoncari = document.getElementById('cari');
let buttonhapus = document.getElementById('hapus');
let buttontambah = document.getElementById('tambah');
let myHeading = document.querySelector('p.output');

let kamus = new Map();

kamus.set('red','merah')

function translate(search) {
    if(!search) {
        alert("Tidak ada inputan")
    } else {
        let hasil = kamus.get(search)
        if (!hasil) {
            alert('Kata tidak ada')
            addvocab(search)
        } else {
            alert("Kata yang kamu inputkan berarti '"+kamus.get(search)+"'");
        }
    }
}

function addvocab(search) {
    prompt('Tambahkan kata ini ke dalam library?',search)
    if (!search) {
        alert('Penambahan kata dibatalkan')
    } else {
        let arti = prompt('Tambahkan artinya')
        if (!arti) {
            alert('Penambahan kata dibatalkan')
        } else {
            kamus.set(search,arti)
        }
    }
}

function deletekata(search) {
    if(!search) {
        alert("Tidak ada inputan")
    } else {
        kamus.delete(search)
        alert('Kata '+search+' telah dihapus')
    }
}

buttoncari.onclick = function() {
    var search = document.getElementById('search').value;
    translate(search)
}

buttonhapus.onclick = function() {
    var search = document.getElementById('delete').value;
    deletekata(search)
}

buttontambah.onclick = function() {
    var search = document.getElementById('add').value;
    addvocab(search)
}