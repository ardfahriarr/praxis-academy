let MyHeading = document.querySelector("h1");
MyHeading.textContent = "helloww";

let barisdua = document.querySelector("h4");
barisdua.textContent = "try 1";

let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
}

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

// let myHTML = document.querySelector('html');
// myHTML.onclick = function() {
//     alert('Ouch! Stop poking me!');
// };

let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tes.gif') {
      myImage.setAttribute ('src','images/buku.jpg');
    } else {
      myImage.setAttribute ('src','images/tes.gif');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

myButton.onclick = function() {
    setUserName();
}

let total = 0, count = 1;
while (count <= 3) {
  total += count;
  count += 1;
}

// let theNumber = Number(prompt("Pick a number"));
// if (!Number.isNaN(theNumber)) {
//   console.log("Your number is the square root of " + theNumber * theNumber);
// } else {
//   console.log("Hey. Why didn't you give me a number?");
// }

// let num = Number(prompt("Pick a number"));
// if (num < 10) {
//   console.log("Small");
// } else if (num < 100) {
//   console.log("Medium");
// } else {
//   console.log("Large");
// }

// let number = 0;
// while (number <= 12) {
//   console.log(number);
//   number = number + 2;
// }

// let yourName;
// do {
//   yourName = prompt("Who are you?");
// } while (!yourName);
// console.log(yourName);
// alert("halo " + yourName)

// if (false != true) {
//     console.log("That makes sense.");
//     if (1 < 2) {
//       console.log("No surprise there.");
//     }
//   }

for (let number = 0; number <= 12; number = number + 2) {
   console.log(number);
}

// Pyramid Hashtags
for (let number = "#"; number.length <= 12; number += "#") {
   console.log(number);
}

// FizzBuzz
for (let number = 1; number <= 15; number += 1) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log(number+" FizzBuzz")
    } else if (number % 3 == 0) {
        console.log(number+" Fizz")
    } else if (number % 5 == 0) {
        console.log(number+" Buzz")
    } else {
        console.log(number)
    }
  }

//  ChessBoard
for (let i = 1; i <= 8; i += 1) {
	if (i % 2 == 0) {
    	let a = ""
        for (let number = "#"; number.length <= 12;) {
            if (number.length % 2 == 0) {
                number += "#"
            } else {
                number += " "
            }
          a = number
        }
        console.log(a)	
    } else {
    	let a = ""
        for (let number = " "; number.length <= 12;) {
            if (number.length % 2 == 0) {
                number += " "
            } else {
                number += "#"
            }
          a = number
        }
        console.log(a)
    }
}

// Your code here.
let a = 0
let countBs = function(x) {
  for (let i = 0; i <= x.length; i += 1) {
  	if (x[i] == "B")
      a += 1
  }
  return a
}
let p = 0
let countChar = function(x,y) {
  for (let i = 0; i <= x.length; i += 1) {
  	if (x[i] == y)
      p += 1
  }
  return p
}
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

