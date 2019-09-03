try{
    let MyHeading = document.querySelector("h1")

    // Do While Looping
    var i = 0;
    do {
        i += 1;
        console.log(i)
        MyHeading.textContent = ("Hasilnya adalah ")+i;
    } while (i < 5);

    // While Looping
    // var n = 0;
    // var x = 0;
    // while (n < 3) {
    //     n++;
    //     x += n;
    //     console.log(x)
    //     MyHeading.textContent = ("Hasilnya adalah ")+x;
    // }

    // Breaking to label
    // var x = 0;
    // var z = 0;
    // labelCancelLoops: while (true) {
    //     console.log('Outer loops: ' + x);
    //     x += 1;
    //     z = 1;
    //     while (true) {
    //         console.log('Inner loops: ' + z);
    //         z += 1;
    //         if (z === 10 && x === 10) {
    //         break labelCancelLoops;
    //         } else if (z === 10) {
    //         break;
    //         }
    //     }
    // }

} catch(e) {
    MyHeading.textContent = e;
}
