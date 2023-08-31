/* DATA TYPES*/
// Number, String, Boolean, Null, Undefined

const age=35
console.log(age);

//çok büyük sayılar için bigInt veri türü vardır.
let big=123123123123123123123123123123123132123123123123n
console.log(typeof(big));
console.log(big);
/*-             */

console.clear()

// MATH objesi:matematiksel işlemler yapabilmek için fonksiyonlar barındırır.

const pi=Math.PI;
console.log(pi);

// Dairenin çevresini bulan kod bloğu
// dairenin çevre formülü 2*pi*r

let r=6
console.log(2*Math.PI*r);
let result=2*Math.PI*r;
console.log(result);

//Sonucu yuvarlayarak göstermesi için =>round
console.log(Math.round(result));

//Bir üst tamsayıya yuvarlamak için 
let val=37.3
console.log(Math.round(val));
console.log(Math.ceil(val));

//Bir alt tamsayıya yuvarlamak için
console.log(Math.floor(val));

/* -------------------------------------------------------------------------- */
//Math.trunc() ile sadece tamsayı kısmını alabiliriz
console.log(Math.trunc(val));
console.log(Math.trunc(result));

/* -------------------------------------------------------------------------- */
//sayı.toFixed(sayı) Verilen ondalıklı sayıdan ondalıklı kaç basamak yazılacağın
console.log(result);
console.log(result.toFixed(2));

/* -------------------------------------------------------------------------- */

//Math.max: Birden fazla verilen sayılar içinden en büyük sayıyı bulur
console.log(Math.max(3,6,1,8,-23,34,123));
//Math.min: Birden fazla verilen sayılar içinden en küçük sayıyı bulur
console.log(Math.min(4,2,56,2,1,-4));

/* -------------------------------------------------------------------------- */
//RANDOM metodu: rastgele bir sayı üretmek için kullanılır
//randon ile 0-1 arasında bir değer üretilir
//bu metodlar birbirine eklenerek kullanılabilir
let RandomNumber=Math.random()
//*10 ile 0-10 arasında bir değer verilebilir
console.log(RandomNumber);
console.log(RandomNumber*100);
let rNumber=Math.random()*100
console.log(Math.round(rNumber));

/* -------------------------------------------------------------------------- */
//Math.pow: bir sayının belirtilen üssünü verir
//pow(taban,üs)
console.log(Math.pow(5,3));
console.log(5**3);

/* -------------------------------------------------------------------------- */
//Math.sqrt: bir sayının karakökünü bulma 
console.log(Math.sqrt(56));

console.clear();

//! -------------------------------------------------------------------------- */
//!                              STRING DATA TYPE                              */
//! -------------------------------------------------------------------------- */

// let text=prompt("Yaşınızı Girin");1
// console.log(typeof(text));

let text="Javascript"
console.log(text[4]);

/* -------------------------------------------------------------------------- */


//? Escape character ( Kaçış karakterleri) tırnak kullanmak için \'
// \t   tab - 8 karakter ileri atar
// \r	Satır başı (Carriage Return)
// \n	Bir alt satıra iner
// \v	Dikey Tab
// \f	Sayfa ilerleme
// \"	Çift tırnak
// \’	Tek tırnak
// \	Backslash

let text1='Ben Javascript\'in özelliklerini öğreniyorum'
console.log(text1);

let sentence="Seni iki şey anlatr. Hiçbir sey yokken gösterdiğin sabır. Herşey varken sergilediğin tavır."

console.log(sentence);

//? STRING BİRLEŞTİRME
//1. "+" işareti ile birleştrime

let text2="Bu güzel günde javascript öğrenmek "
let text3="ne kadar güzel"
console.log(text2+text3);

let ad="Helen"
let soyad="Kut"
let job="Frontend developer"
console.log("Personelimiz " + ad +" " + soyad + " "+"kurumumuzda"+ " " + job+" " + "olarak çalışmaktadır");

//! Template Liteals => string template => ES6

//backtick ``
//stringleri düzgün bir şekilde yazmamı sağlar

let newText=`Personelimiz ${ad} ${soyad} 

kurumumuzda ${job} 

olarak çalışmaktadır`

console.log(newText);

//3. str1.concat(str2)
console.log(ad.concat(soyad));
/* -------------------------------------------------------------------------- */
document.write("<b><i><mark>", newText)
console.clear();

/* -------------------------------------------------------------------------- */
/*                              BOOLEAN DATA TYPE                             */
/* -------------------------------------------------------------------------- */
//true yada false değerlerini tutar
//daha çok mantıksal karşılaştırmalarda kullanıyoru

let isOpen=true;
let isSignup=false;
let isSmall=4<10;
console.log(isSmall);

//truthy values
//sayular, harfler, karakterler, ..........

//falsy values
// 0, -0, null, undefined, false, NaN, {}, [], ........

let num="34f"
console.log(num/3);

/* -------------------------------------------------------------------------- */
/*                            UNDIFINED DATA TYPE                             */
/* -------------------------------------------------------------------------- */
//undifined:tanımsız
//bir değer tanımlamadığım bir değişkende karşımıza çıkabilir
//bir fonksiyondan bir değer beklerken geri gönderim yapmıyorsa undifined verecektir

let myVal;
console.log(typeof(myVal));
console.log(myVal);

function example(){
    let sum=89+69
    // return sum
}
console.log(example());

/* -------------------------------------------------------------------------- */
/*                               NULL DATA TYPE                               */
/* -------------------------------------------------------------------------- */

let empty=null;
console.log(empty);

console.log(typeof(empty));

/* -------------------------------------------------------------------------- */
/*                           NONPRIMITIVE DATA TYPE                           */
/* -------------------------------------------------------------------------- */
//Buradaki her bir elemana bir referans ile erişilir
// Array, OBject, Funciton
//! **************ARRAY*****************

//Birden fazla değer tutabilen değişiklere array(dizi) denir
let SchoolGrades=[80,70,56,78,98,67,89,78,90]
console.log(SchoolGrades);
console.log(SchoolGrades[3]);

//! *************OBJECT*****************

let obj={name:"Helen",surname:"Kuttery", age:37}
console.log(obj.name);
console.log(obj.age);
console.log(obj.surname);
console.clear();

/* -------------------------------------------------------------------------- */
/*                               TYPE CONVERSION                              */
/* -------------------------------------------------------------------------- */

//? Automaically Type Conversion 
//Js otamatik tip dönüşümünü destekler

let num1=40;
let num2="20";

console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1+num2);

/* -------------------------------------------------------------------------- */
//String Değişkeni number'a dönüştürme

//Number
//ParseInt
//ParseFloat

let num3=Number(num2)

console.log(num1+num3);

let stringToDecimal=34.67

let convert=parseInt(stringToDecimal)
console.log(convert);
let convetFloat=parseFloat(stringToDecimal)
console.log(convetFloat);

/* -------------------------------------------------------------------------- */
// let SchoolNumber=+prompt("Okul numaranızı giriniz:")
console.log(typeof(SchoolNumber));
console.clear();

/* -------------------------------------------------------------------------- */
// NUMBER TO STRING

let birthday=17
console.log(typeof(birthday));
console.log(birthday.toString());
let cvrtNumber=String(birthday)
console.log(typeof(cvrtNumber));
