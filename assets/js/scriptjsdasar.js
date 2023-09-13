// Code Structure 
console.log("Hello World"); alert("Hello World");

console.log("Hello World")
alert("Hello World")

// Javascript Variables
var nama = "Putri";
let id = 123;
const alamat = "Bandung";

console.log(nama);
console.log(id);
console.log(alamat);

// Data Type Number
let o = 25;
o = 30;

let inf = 100 / 0;
console.log(inf);

// atau
console.log(Infinity);

console.log("Arkatama" + 1);
console.log("Multi Solusindo" + (2 * 5));
console.log(NaN * 3);

// Data Type Begint
const bigInt = 1234567890123456780276583649687970697453427859087n;
console.log(bigInt);

// atau contoh lainnya
const r = 123456789010283654582962894619264831650837086018301290n;
const s = 123456789010283654582962894619264831650837086018301290n;

const sum = r + s;

console.log(sum);

// Data Type String
const nama1 = "Putri";
const nama2 = 'Deylin';
const nama3 = `Nazla`;

console.log(nama1)
console.log(nama2)
console.log(nama3)

// Data Type Boolean
let isLoggedIn = true;
let isAdmin = false;

let isGreater = 10 > 5;
let isLess = 10 < 5;

// Data Type Null
let girlfriend = null;

console.log(girlfriend);
console.log(typeof girlfriend);

// Data Type Undefined
let name;
console.log(name);
console.log(typeof name);

// Data Type Symbol
let karyawan = Symbol('PutriDey');
console.log(karyawan);
console.log(karyawan.description);

// Data Type Object
let employee = {
    name: "Putri",
    age: 22,
    job: "Web Developer",
    isMarried: false,
    hobies: ["Sports", "Cooking"],
};

console.log(`Her name is ${employee.name} and she is ${employee.age} years old.`);

// Type Conversion String
value = String(5);
alert(typeof 5);

// Type Conversion Numeric
alert("6" / "2");

let str = "123";
alert(typeof str);

let num = Number(str);

alert(typeof num);

// Type Conversion Boolean
alert(Boolean(1)); //true
alert(Boolean(0)); // false

alert(Boolean("hello")); //true
alert(Boolean("")); // false

// Aritmethic Operator
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// Assingment Operator
let angka = 2;
console.log(angka);

angka += 5;
console.log(angka);

// Comparison Operator
let c = 4;
let d = 5;

console.log(c == d);
console.log(c < d);
console.log(c > d);
console.log(c !== d);

// Logical Operator
let e = true;
let f = false;

console.log(e && f);
console.log(e || f);
console.log(!e);

// Bitwise Operator
let g = 00111100;
let h = 00001101;

console.log(g & h);
console.log(g | h);
console.log(g ^ h);
console.log(~g);

// Ternary Operator
let i = 1;
let j = 1;

console.log(i == j ? "yes" : "no");

// Pop up : Alert
alert("Selamat datang di Arkatama");
alert("Sekarang tanggal: " + new Date());

// Pop up : Prompt
let response = prompt("Apakah kamu mau nonton akhir pekan ini?");
alert("Jawabannya adalah " + response);

// Pop up : Confirm
let respon = confirm("Mau dinner malam ini?");
alert("Jawabannya: " + respon);

// Conditional : If
let resp = prompt("1 + 1 =");
if (resp == 2) {
    alert("Correct!");
}

// Conditional : If-Else
let res = prompt("1 + 2 =");
if (res == 3) {
    alert("Correct!");
} else {
    alert("Wrong!");
}

// Conditional : Else-If
let rspn = prompt("1 + 3 =");
if (rspn == 4) {
    alert("Correct!");
} else if (rspn < 4) {
    alert("Too low!");
} else {
    alert("Too high!");
}

// Conditional : Switch
let color = "red";

switch (color) {
    case "red":
        alert("I love red!");
        break;
    case "blue":
        alert("I love blue!");
        break;
    default:
        alert("I don't know what color it is!")
        break;
}

// Loop : For
for (let k = 0; k < 5; k++) {
    console.log(`Iterasi for ke ${k}`);
}

// Loop : Do... While
let l = 1;

do {
    console.log(`Iterasi do... while ke ${l}`);
    l += 1;
} while (l < 6);

// Loop : While
let m = 0;

while (m < 5) {
    console.log(`Iterasi while ke ${m}`);
    m++;
}

// Loop Control : Break
for (let n = 0; n < 5; n++) {
    if (n == 3) {
        break;
    }
    console.log(`Iterasi break ke ${n}`);
}

// Loop Control : Continue
for (let p = 0; p < 5; p++) {
    if (p == 3) {
        continue;
    }
    console.log(`Iterasi continue ke ${p}`);
}

