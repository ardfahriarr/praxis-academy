// Note : Tidak bisa dijalankan secara bersamaan, hilangkan comment mark untuk running
let MyHeading = document.querySelector("h1")
try{
    // nomor 1
    // let whichbigger = function(x,y) {
    //     if (x > y) MyHeading.textContent = ("angka pertama (")+x+(") lebih besar")
    //     else MyHeading.textContent = ("angka kedua (")+y+(") lebih besar")
    // } 
    // let a = prompt("masukkan angka pertama :")
    // let b = prompt("masukkan angka kedua :")
    // if (p != 0 && q != 0) {
    //     whichbigger(p,q)
    // } else {
    //     alert("duarr")
    // }

    // Nomor 2
    // let signproduct = function(x,y,z) {
    //     q = x * y * z
    //     if (q < 0) alert("tandanya adalah -")
    //     else alert("tandanya adalah +")
    // } 
    // let a = prompt("masukkan angka pertama :")
    // let b = prompt("masukkan angka kedua :")
    // let c = prompt("masukkan angka ketiga :")
    // if (a != 0 && b != 0 && c != 0) {
    //     signproduct(a,b,c)
    // } else {
    //     alert("duarr")
    // }

    // Nomor 3
    // let sortingwoy = function(x,y,z) {
    //     let arr = [x,y,z]
    //     arr.sort(function(a,b){return b-a})
    //     alert("urutannya adalah = "+arr)
    // } 
    // let a = prompt("masukkan angka pertama :")
    // let b = prompt("masukkan angka kedua :")
    // let c = prompt("masukkan angka ketiga :")
    // if (a != 0 && b != 0 && c != 0) {
    //     sortingwoy(a,b,c)
    // } else {
    //     alert("duarr")
    // }

    // Nomor 4
    // let arr = []
    // for (i = 0; i <= 4; i++){
    //     arr[i] = prompt("Masukkan angka ke")
    // }
    // alert("Angka terbesar adalah "+Math.max.apply(null, arr))

    // Nomor 5
    // for (let number = 1; number <= 15; number += 1) {
    //     if (number % 2 == 0) {
    //         console.log(number+" is even")
    //     } else {
    //         console.log(number+" is ood")
    //     }
    //   }

    // Nomor 6
    // let students = []
    // for (let i = 0; i <= 4; i += 1) {
    //     students [i] = []
    //     for (let j = 0; j <= 1; j += 1){
    //         students [i][j] = prompt("char")
    //     }
    // }
    // var Avgmarks = 0;
    // for (var i=0; i < students.length; i++) {
    //     Avgmarks += parseInt(students[i][1])
    //     var avg = (Avgmarks/students.length);
    // }
    // console.log("Average grade: " + (Avgmarks)/students.length);
    //     if (avg < 60){
    //         console.log("Grade : F");      
    //     } else if (avg < 70) {
    //         console.log("Grade : D"); 
    //     } else if (avg < 80) {
    //         console.log("Grade : C"); 
    //     } else if (avg < 90) {
    //         console.log("Grade : B"); 
    //     } else if (avg < 100) {
    //         console.log("Grade : A"); 
    // }

    // Nomor 7
    // for (let number = 1; number <= 15; number += 1) {
    //     if (number % 3 == 0 && number % 5 == 0) {
    //         console.log(number+" FizzBuzz")
    //     } else if (number % 3 == 0) {
    //         console.log(number+" Fizz")
    //     } else if (number % 5 == 0) {
    //         console.log(number+" Buzz")
    //     } else {
    //         console.log(number)
    //     }
    //   }

    // Nomor 8
    // function happy_number(num) 
    // {
    //     var m, n ;
    //     var c = [] ;
    //     while(num != 1 && c[num] !== true) 
    //     {
    //         c[num] = true ;
    //         m = 0 ;
    //         while (num > 0) {
    //             n = num % 10 ;
    //             m += n * n ;
    //             num = (num  - n) / 10 ;
    //         }
    //         num = m ;
    //     }
    //     return (num == 1) ;
    // }
    // var cnt = 5;
    // var num = 1;
    // var f5 = ''; 
    // while(cnt-- > 0) 
    // {
    //     while(!happy_number(num))
    //         num++ ;
    // f5 = f5+(num + ", ") ;
    //     num++ ;
    // }
    // console.log('First 5 happy numbers are : '+f5);
    // let number = prompt("input angka woi")
    // if (number != 0){
    //     happy_number(number)
    // }

    // Nomor 9
    // function three_digit_armstrong_number() 
    // {
    // for (var i = 1; i < 10; ++i) 
    // {
    // for (var j = 0; j < 10; ++j) 
    //     {
    //         for (var k = 0; k < 10; ++k)
    //         {
    //         var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
    //         var plus = (i * 100 + j * 10 +  k);
    //         if (pow == plus) 
    //         {     
    //             console.log(pow);
    //             }
    //         }
    //     }
    //     }
    // }
    // three_digit_armstrong_number();

    // Nomor 10
    // for (let number = "*"; number.length <= 5; number += "*") {
    //     console.log(number);
    // }

    // Nomor 11
    // var a = prompt("Angka pertama")
    // var b = prompt("Angka kedua")
    // var gcd;
    // while (a!=b)
    // {
    //     if (a>b)
    //     {
    //         a = a -b;
    //     }
    //     else
    //     {
    //         b = b - a;
    //     }
    // }
    // gcd = a;
    // console.log(gcd);

    // Nomor 12
    var sum = 0;
    for (var x = 0; x < 1000; x++)
    {
        if (x % 3 === 0 || x % 5 === 0)
        {
        sum += x;
        }
    }
    console.log(sum);
    
} catch(e) {
    console.log(e.name)
    console.log(e.message)
}
