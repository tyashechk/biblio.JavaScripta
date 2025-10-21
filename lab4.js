let R = +prompt("Задай радиус: ");
console.log("Радиус: " + R)
alert("Радиус: " + R)

let n1 = 10;
let n2 = 50;
let n3 = 100;

let P1 = Perimitir(n1);
console.log("Периметр 10-угольника: " + P1);

let P2 = Perimitir(n2);
console.log("Периметр 50-угольника: " + P2);

let P3 = Perimitir(n3);
console.log("Периметр 100-угольника: " + P3);

alert("Периметр 10-угольника: " + P1);
alert("Периметр 50-угольника: " + P2);
alert("Периметр 100-угольника: " + P3);

function Perimitir(n) {
    let a = 2 * R * Math.sin(180 / n);
    let P = n * a;
    return P;
}