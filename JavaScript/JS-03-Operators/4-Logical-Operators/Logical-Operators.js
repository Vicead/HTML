//! *********** LOGICAL OPERATORS**************

//? ************AND OPERATOR***********

//Herşey true olmalı, bir tane false olursa sonucumuz false olur

// let a=true 
// let b=false
// let c=true

// console.log(a&&b&&c);

//Kayıt formmunda ad, soyad, şifre ve telefon numarasını girin. Sadece birini girmezseniz bile kayıt formu onaylanmaz

let ad=true
let soyad=NaN
let sifre=0
let telefon=true 

console.log(ad&&soyad&&sifre&&telefon);

//Eğer içinde  false olan değerler olsa ilk gördüğü false değerini döndürür

//? ******** OR OPERATOR ********

//Herşey fals olsa bile bir tane true, true döndermeye yeter

let inst1=true
let inst2=false
 console.log(inst1||inst2);


let a=false 
let b=""
let c=false 
let d=false 
let e=0

console.log(a||b||c||d||e);

//AND operatörü
//her iki değer de true ise son true değeri döndürür, aksi taktirde ilk false değeri döndürür

//OR operatörü
//değerlerden biri true ise ilk true değeri döndürür, aksi takdirde her ikisi de false is son false değeri döndürür

let x=true
console.log("Not işlemine tabi tutulmuş x:",!x);

let isOpen=true //Siteye giriş yaptım
isOpen=!isOpen //Siteden oturumu kapat butonuna basınca çıkış tapmak için

console.log(1||false); //1
console.log(false||0); //0
console.log(1&&3); //3 
console.log(1&&0); //0
console.log({}&&1); //1
console.log(0||false); //false
console.log(0||true); //true
console.log(1||true); //1
