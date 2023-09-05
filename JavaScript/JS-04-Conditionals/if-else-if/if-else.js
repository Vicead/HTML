//! ******** CONDITIONALS ************

// Şart cümleleri farklı şartlar için karar verebilmek için kullanılır
// Normalda Javascript te bir kod bloğu yukarıdan aşağıya doğtu çalışır ama bu durumu değiştiren birkaç durum olur vardır bunlardan biri şart(karar) yapılarıdır.
// şart durumları çalışma akışını değiştirir : Şart doğruysa o doğru alana girer doğru değilse diğer alana girer.

// Şart durumlarını aşağıdaki durumlarda yapabiliriz

// if
// if else
// if - else if - else
// switch-case
// ternary operators

//? if bir şart durumundaki şartın doğru olup olmadığının kontrol edildiği satırdır
//? if li satırdaki şart durumu kontrol edildikten sonra doğru olma durumunda ne yapılması gerektiğibir blokta , şart durumu doğru değilse yapılacaklar diğer blokta (else bloğunda) belirtilir.

/*
if ( şart )
{ 
    şart durumu doğru ise bu blok çalıştırılır
}
else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/

let val = 30;

if (val > 10) {
  console.log("Sayı 10dan büyüktür");
} else if (val === 10) {
  console.log("Sayı 10a eşittir");
} else {
  console.log("Sayı 10dan küçüktür");
}

/* -------------------------------------------------------------------------- */
//Sayı tek mi çift mi kontrolünü yapan kod bloğu
// let number=+prompt("Bir sayı giriniz:")

// if(number%2===0){
//     console.log(`Girdiğiniz ${number} sayısı çift sayıdır`);
// }
// else{
//     console.log(`Girdiğiniz ${number} sayısı tek sayıdır`);
// }

//! Birden fazla şartın olduğu durumlar da ise if -else if -else bloğu kullanılabilir.

//Bir öğrencinin aldığı nota göre harf karşılığını yazan program

// 20-44:F
// 45-54:D 
// 55-69:C 
// 70-84:B 
// 85-100:A 

let grade=90

if(grade>=20 && grade<=44){
    console.log(`F`);
}
else if(grade>=45 && grade<=54){
    console.log(`D`);
}
else if(grade>=55 && grade<=69){
    console.log(`C`);
}
else if(grade>=70 && grade<=84){
    console.log(`B`);
}
else if(grade>=85 && grade<=100){
    console.log(`A`);
}
else if(grade<0){
    console.log(`0-100 arasında bir değer giriniz`);
}
else if(grade<20){
    console.log(`Bu notla hala harfi mi soruyorsun`);
}
else{
    console.log(`Geçersiz giriş yaptınız`);
}

/* -------------------------------------------------------------------------- */
//Sunny:Take a sunglasses
//Rainy:Take an umbrella
//Cloudy:Go for a walk
//Else:Stay at home and study JS

let weather=prompt("Enter the weather").toUpperCase()

if(weather===`SUNNY`){
    console.log(`Take a sunglasses`);
}
else if(weather===`RAINY`){
    console.log(`Take an umbrella`);
}
else if(weather===`CLOUDY`){
    console.log(`Go for a walk`);
}
else{
    console.log(`Stay at home and study JS`);
}