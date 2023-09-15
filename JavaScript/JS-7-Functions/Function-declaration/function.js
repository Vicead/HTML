/* -------------------------------------------------------------- */
/*          //!  ********** FUNCTIONS *********                          */
/* -------------------------------------------------------------- */
//? Bir fonksiyon belirli bir görevi(tek bir görev için tek fonksiyon olması daha iyidir) gerçekleştirmek için tasarlanmış,
//? yeniden kullanılabilir, 
//? test etmesi kolaydır

//! Fonksiyon tanımlama yöntemleri
// Function Declaration (Fonksiyon Bildirimi):
// Function Expression (Fonksiyon İfadesi):
// Arrow Function (Ok Fonksiyonları):
// Function Constructor (Fonksiyon Oluşturucusu):
// Immediately Invoked Function Expression (IIFE) (Hemen Çağrılan Fonksiyon İfadesi):

//! * --------Function-Declaration----------------------------*/ 
// 1-Fonksiyonlar   function anahtar kelimesi ile tanımlanır
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? fonksiyonun çalışması için çağırmak gereklidir.Çağırılmadığında işleme alınmaz.Bu çağırma işlemine invoke yada call denir.

// function isim(){
//     yapılacaklar
// }

console.log("*******FUNCTIONS*********");
//! Deger göndermeden bütün işlemleri fonksiyon  içinde yapıp bitirdiğimiz fonksiyon

function topla(){
    let x=50;
    let y=89;
    let toplam=x+y;
    console.log(toplam);
}
topla()  //! invoke,call

//Hoisting: fonksiyonun çağrıldıktan sonra yazılması, JS hoisting destekleyen bir dildir.

//? 4- Geriye bir değer döndermek için return anahtar kelimesini kullanırız. 
// Geriye bir değer döndermezse yani return anahtar kelimesini unutursak undefined olur

function toplama(){
    let x=60;
    let y=90;
    let toplam=x+y
    return toplam
}

console.log(toplama()); 
let sonuc=toplama()
console.log(sonuc);

/* --------------------------------------------------------- */
// Girilen sayı tek mi çift olduğunu ana programa döndüren fonksiyon
function checkEvenOdd(number){  
    let result = number % 2===0 ? "even" : "odd";
    return result;
}
console.log(checkEvenOdd(67));
console.log(checkEvenOdd(60));
console.log(checkEvenOdd(11243356546456));

/* ------------------------------------------------------------------- */
/* -------FONKSİYONLARDA PARAMETRE KULLANIMI--------------- */
// Fonksiyonu bir defa yazıp defalarca kullanmak için  parametre alırlar
// Eğer bir fonksiyon parametre alıyorsa , o aldığı parametre,değeriyle ve  özellikleriyle gelir.

// Parametreli fonksiyon - bu sayede tekrar tekrar kullanılabilir.

//?   function fonksiyonadi(parametre1,parametre2, ...){   Parametre yada argüman denir
//      yapılacak işlemler
//   return ile oluşturlan sonucu geri gönder
//   }


function sum( num1,num2 ){
    return num1+num2
}
console.log(sum(34,56));
console.log(sum(78,98));
console.log(sum(70,23));
console.log(sum(45,67));
console.log(sum("Merhaba","DE07"));

// parametrelere (argument) varsayılan bir değer de atanabilir

function fullName(firstname,lastname=""){
    return `${firstname}  ${lastname} isimli kişi personelimizdir.`
}
//! Default değer "" olduğu için soyad gönderilmediğinde "" olarak görüntülenecek
console.log(fullName("Saban","Ferik"));  
/* -------------------------------------------------------------------------- */
//Kullanıcıdan adını doğum yılını alıp fonksiyonda yaşını  hesaplayan programı fonksiyonlar ile yapalım

function calculateAge(name,birth){
const now=new Date().getFullYear()
console.log(now);
return `${name} isimli kişinin yaşı ${now-birth}`
}

let name="Sema"
let year=1986
console.log(calculateAge(name,year));

console.clear()
//* Fonksiyona iki sayı gönderen bu sayılardan 1.sini ikinci sayı kadar üssünü alan program
// 1. taban, 2.sayı üs

let num=5
let pow=8

function calculatePower(n,p){
    return n**p
}

console.log(calculatePower(num,pow));

/* ------------------------------------------------------- */
// arguments  anahtar kelimesi çok fazla değişken olduğunda o değişkenlerin tamamını ifade
function sumAll(){
console.log(arguments);
let sum=0;
for (let i=0; i<arguments.length;i++){
    if (arguments[i] %2===0 ){
        console.log(`${arguments[i]} bir çift sayıdır`);
    }
    else{
        console.log(`${arguments[i]} bir tek sayıdır`);
    }
}

console.log(arguments[5] );
return sum
}
let result=sumAll(34,67,89,45,23,12,67,89)
if (result>500){
    console.log(`Sonucunuz  500 den büyük daha fazla sayı eklemeyin`);
}
else{
    console.log(`Sonucunuz 500 den küçük olduğu için sayı eklemeye devam edin`);
}

console.clear();
/* -------------------------------------------------------------------------- */
//Anonymous function=>isimsiz fonksiyon

const greeting=function(name){
    console.log(`Merhaba ${name}`);
}
greeting("Nalan")
console.log(typeof(greeting));
/* -------------------------------------------------------------------------- */

//!Self invoking function: Kendi kendini çağıran fonksiyon 

//Parantezler içinde yazılıyor ardından bir parantez daha açılıp kapanıp değer gönderiliyor sonuna;işrati unutmayın

(function(){console.log("Merhaba");}); //Boş parantez fonksiyonun bir defa uygulamasını sağlar
(function(n){return console.log(`Self invoking ile sonuç:${n*4}`);})(4);
/* -------------------------------------------------------------------------- */

// ******
// ******
// ******

function drawRenctangle(col,row){
    let star=``
    for(let i=0;i<row;i++){
        for(let j=0;j<col;j++){
            star+=`*`;
        }
        star+=`\n`;
    }
    return star
}
console.log(drawRenctangle(6,3));
