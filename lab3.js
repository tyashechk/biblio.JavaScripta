console.log("----------------------------------------------------");
let y;
let positivY = [];

for (let x = -4; x <= 4; x += 0.5) {
    if (x <= 0) {
        y = Math.pow(x, 2) - 1;
    } else if (x > 0 && x <= 1.5) {
        y = Math.cos(x);
    } else {
        y = Math.sin(x - 1);
    }
    console.log(" y = " + y + "       x = " + x);
    

    if (y > 0) {
    positivY.push({ x: x, y: y });
    }
}
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
console.log("Положительных значений функции:  " + positivY.length);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
console.log("----------------------------------------------------");
console.log("----------------------------------------------------");

let x = -4;
positivY = [];

while (x <= 4) {
    if (x<=0){
        y = Math.pow(x, 2) - 1;
    } else if (x > 0 && x <= 1.5) {
        y = Math.cos(x);
    } else {
        y = Math.sin(x - 1);
    }
    console.log(" y = " + y + "       x = " + x);
    x += 0.5;
    console.log(" y = " + y + "       x = " + x);
    if (y > 0) {
    positivY.push({ x: x, y: y });
    }
    
}
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
console.log("Положительных значений функции:  " + positivY.length);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
console.log("----------------------------------------------------");
console.log("----------------------------------------------------");

x = -4;
positivY = [];

do {
    if (x<=0) {
        y = Math.pow(x, 2) - 1;
    } else if (x > 0 && x <= 1.5) {
        y = Math.cos(x);
    } else {
        y = Math.sin(x - 1);
    }
    console.log(" y = " + y + "       x = " + x);
    x += 0.5;
    console.log(" y = " + y + "       x = " + x);
        if (y > 0) {
    positivY.push({ x: x, y: y });
    }
    
} while (x <= 4);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
console.log("Положительных значений функции:  " + positivY.length);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
console.log("----------------------------------------------------");
console.log("------------------------GATOVA----------------------");
console.log("----------------------------------------------------");