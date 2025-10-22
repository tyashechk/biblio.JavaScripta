let x = +prompt("введите x")
let y = +prompt("введите y")
const pi = Math.PI;
let t = Math.cos(pi / 7) * Math.pow((Math.sin(x)),2) / ((2.7*(x - pi)))
console.log(t);
alert("результат:  " + t)
t = Math.round(t);
console.log(t);
alert("результат,округленный до целых: " + t);