let y
for (let x = -4; x <= 4; x += 0.5) {
    if (x <= 0) {
        y = Math.pow(x, 2) - 1;
        console.log(" y = " + y + " x = " + x);
    } else if (x > 0 && x <= 1.5) {
        y = Math.cos(x);
        console.log(" y = " + y + " x = " + x);
    } else if (x > 1.5) {
        y = Math.sin(x - 1);
        console.log(" y = " + y + " x = " + x);
    }
}
console.log("--------------------------");
let x = -4

while (x <= 4) {
    y = Math.pow(x, 2) - 1;
    console.log(" y = " + y + " x = " + x);
    if (x > 0 && x <= 1.5) {
        y = Math.cos(x);
        console.log(" y = " + y + " x = " + x);
    } else if (x > 1.5) {
        y = Math.sin(x - 1);
        console.log(" y = " + y + " x = " + x);
    }
    x += 0.5;
}
console.log("--------------------------");
x = -4

do {
    y = Math.pow(x, 2) - 1;
    x += 0.5;
    console.log(" y = " + y + " x = " + x);
} while (x <= 4) {
    y = Math.pow(x, 2) - 1;
    console.log(" y = " + y + " x = " + x);
    if (x > 0 && x <= 1.5) {
        y = Math.cos(x);
        console.log(" y = " + y + " x = " + x);
    } else if (x > 1.5) {
        y = Math.sin(x - 1);
        console.log(" y = " + y + " x = " + x);
    }
    x += 0.5;
}