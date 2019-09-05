let myButton = document.querySelector('button');
let myHeading = document.querySelector('p.output');

function isemail(mail) {
    if(!mail) {
        alert("Tidak ada inputan")
    } else {
        var words = mail.split('@');
        if (!words[1]) {
            alert("Isn't an email")
        } else {
            var name = words[0]
            var domain = words[1]
            var isdomain = domain.split('.')
            if (!isdomain[1]) {
                alert("Isn't an email")
            } else {
                alert("Halo, username adalah "+name+", domain anda adalah "+domain)
            }
        }
    }
}

myButton.onclick = function() {
    var mail = document.getElementById('mail').value;
    isemail(mail)
}