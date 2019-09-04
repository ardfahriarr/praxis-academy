const square = function(x) {
    return x * x;
};
console.log(square(12));

const makeNoise = function() {
    alert("Pling!");
}; 
makeNoise();

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power(2, 10));

let x = 10
if(true) {
    let y = 20
    var z = 30
    console.log(x + y + z)
}

const halve = function(n) {
    return n / 2
}
let n = 10

function square(x) {
    return x * x;
}

console.log("The future says:", future());
function future() {
  return "You'll never have flying cars";
}

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
};