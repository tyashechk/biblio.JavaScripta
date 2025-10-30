console.log("----------------------------------------------------");

let array = [
    //   0   1   2   3   4            __i__
    [1, 15, 24, 8, 17], // 0         |  
    [23, 7, 16, 5, 14], // 1         j
    [20, 4, 13, 22, 6], // 2         |
    [12, 21, 10, 19,3], // 3
    [9,  18, 2, 11, 25] // 4
];
console.log(array);
//------------------------------------------------
let str1 = 0; let stl1 = 0; let diag1 = 0;
let str2 = 0; let stl2 = 0; let diag2 = 0;
let str3 = 0; let stl3 = 0;
let str4 = 0; let stl4 = 0;
let str5 = 0; let stl5 = 0;
//------------------------------------------------
let i; let j;
for (i = 0; i < array.length; i++) {
    for (j = 0; j < array[i].length; j++) {
//------------------------------------------------
        if (i == j) {
            diag1 += array[i][j];
        }
        if (i + j == array.length - 1) {
            diag2 += array[i][j];
        }
//------------------------------------------------
        if (j == 0) {
            str1 += array[i][j]
        }
        if (j == 1) {
            str2 += array[i][j]
        }
        if (j == 2) {
            str3 += array[i][j]
        }
        if (j == 3) {
            str4 += array[i][j]
        }
        if (j == 4) {
            str5 += array[i][j]
        }
//------------------------------------------------
        if (i == 0) {
            stl1 += array[i][j]
        }
        if (i == 1) {
            stl2 += array[i][j]
        }
        if (i == 2) {
            stl3 += array[i][j]
        }
        if (i == 3) {
            stl4 += array[i][j]
        }
        if (i == 4) {
            stl5 += array[i][j]
        }

    }
}



console.log("Сумма первой строки      : " + str1);
console.log("Сумма второй строки:       " + str2);
console.log("Сумма третьей строки:      " + str3);
console.log("Сумма четвертой строки:    " + str4);
console.log("Сумма пятой строки:        " + str5);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
console.log("Сумма первого столбца    : " + stl1);
console.log("Сумма второго столбца:     " + stl2);
console.log("Сумма третьего столбца:    " + stl3);
console.log("Сумма четвертого столбца:  " + stl4);
console.log("Сумма пятого столбца:      " + stl5);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
console.log("Сумма первой диагонали:    " + diag1);
console.log("Сумма второй диагонали:    " + diag2);
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
if (str1 === str2 && 
    str2 === str3 && 
    str3 === str4 && 
    str4 === str5 && 
    str5 === stl1 && 
    stl1 === stl2 && 
    stl2 === stl3 && 
    stl3 === stl4 && 
    stl4 === stl5 && 
    stl5 === diag1 && 
    diag1 === diag2) {
    console.log("Всё совпало!!! Матрица является магическим квадратом >3");
} else {
    console.log("Суммы не совпали, матрица не является магическим квадратом :(");
}
console.log("- - - - - - - - - - - - - - - - - - - - - - - - - - -");
console.log("--------------------конец!!-------------------------");
console.log("----------------------------------------------------");
console.log("----------------------------------------------------");