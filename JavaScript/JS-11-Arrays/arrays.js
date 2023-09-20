// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanımlama
//* ---------------------------------------------------------

//1.Yöntem (array literal) tercih edilen yöntem

const yaslar=[30,29,45,27,12]
console.log(yaslar);

//hata diziyi tamamiyle tek seferde değiştiremeyiz
// yaslar=[4,5,6,7]

//2.Yöntem (array constructor)

const cars=new Array("BMW","Mercedes","Volvo")
console.log(cars);

//10 elemanlı bir dizi tanımlayalım

const sayilar=new Array(10)
console.log(sayilar);
sayilar[4]=234
sayilar[9]="Ayse"
console.log(sayilar);

console.log("*******************************");

const birth=1979

const isimler=["Ömer","Şaban","Hasan",2023 - birth, "Cihan", true, yaslar]
console.log(isimler);

isimler[5]=false
isimler[7]=58
console.log(isimler);
console.log(isimler[6][2]);
console.log(isimler[isimler.length-2][yaslar.length-3]);

console.log(--isimler[6][2]);
console.log(isimler[6][2]);

/* -------------------------------------------------------------------------- */
/*                    DİZİYİ DEĞİŞTİREN METODLAR (MUTATOR)                    */
/* -------------------------------------------------------------------------- */

//*pop() dizinin son elemanını siler, yazdırırsak sildiği elemanı döndürür

const meyveler=["Elma","Erik","Armut","Muz","Kivi"]

meyveler.pop()
console.log(meyveler);
console.log(meyveler.pop());

//*shift() dizinin ilk elemanını siler, yazdırırsak sildiği elemanı döndürür

meyveler.shift()
console.log(meyveler);

//*push() dizinin sonuna eleman ekler, yazdırırsak dizinin güncel eleman sayısını döndürür

console.log(meyveler.push("Çilek","Kavun","Karpuz"));
console.log(meyveler);

//*unshift()  dizinin başına eleman ekler, yazdırırsak güncel eleman sayısını döndürür

console.log(meyveler.unshift("Ayva"));
console.log(meyveler);

//*reverse() dizinin tamamını ters çevirir

meyveler.reverse()
console.log(meyveler);

console.log(meyveler[3].split("").reverse().join(""));

console.log(meyveler);

//*splice() 1. parametre dizinin eleman ekleyeceğimiz index ini belirtir
//*2. parametre=0 ise belirttiğim index teki elemanı sağa ittir, artık orada yeni yazdığım olsun
//*2.parametre=1 ise belirttiğim index teki elemanı sil üstüne yaz

meyveler.splice(2,0, "Mango")
meyveler.splice(1,1, "Ananas")
meyveler.splice(3,1,)
console.log(meyveler);

//*sort(), string ifadelerde alfabetik sıralar(ascıı değerlerine göre)
//* sort metodu diziyi iterasyona uğratır ve parametre olarak aldığı arrow fonksiyonunu (a-b>0 önce b yi yaz gibi) dizinin her bir elemanına uygular. Bu sayade küçük sayılar ile büyük sayıları yer değişirerek sıralama işlemini gerçleştirir.

meyveler.sort()
console.log(meyveler);

const number=[3,5,1,35,10,22,55,77,231]

console.log(number.sort());

number.sort((a,b)=>a-b)
console.log(number);

/* -------------------------------------------------------------------------- */
/*                DİZİ ERİŞİM METODLARI (diziyi değiştirmezler)               */
/* -------------------------------------------------------------------------- */

const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5, "6"];

//* includes*******

console.log(sayilar1.includes("5")); //false
console.log(sayilar1.includes(5)); //true

//*** */ indexOf(), lastIndexOf()*****

console.log(sayilar1.indexOf("2"));//3
console.log(sayilar1.indexOf(2, 3)); //5  3. indexten sonraki 2 yi bul
console.log(sayilar1.lastIndexOf(5)); //77

//*********** */Örnek
//* kullanıcıdan sayı isteyin girilen sayının hem string hem number hali sayılar dizisinde var mı araştır varsa indexini döndür
// const sayilar1 = [3, 5, 2, "2", "uc", 2, "bes", 5, "6"];

// // const varMi=false

// const sayiString=prompt("lütfen bir sayı giriniz")
// const sayiNumber=+sayiString
// if(sayilar1.includes(sayiString)){
//     console.log("aradığınız sayının string hali dizide var ve indexi:",sayilar1.indexOf(sayiString));
//     // varMi=true
// }else console.log("aradığınız sayı dizide yok");

// if(sayilar1.includes(sayiNumber)){
//     console.log("aradığınız sayının number hali dizide var ve indexi:",sayilar1.indexOf(sayiNumber))
//     // varMi=true
// }else console.log("aradığınız sayı dizide yok");

// // if(varMi==false){
// //     console.log("aradığınız sayı hiç bir şekilde dizide yok");
// // }


//* join()
//*-----------------------------------------------------------
//? join, dizinin elamanlari birlestirip string hale cevirir.join("x")=>varolan virgül+boşluk sil, elemanların aralarına x koy(mesela join parantezinde boşluk yerine 2 varsa her eleman arasına 2 koy demek) 
//* split(" ")=>string i boşluklardan ayırır,boşlukları silip virgül+boşluk yapar ve yeni dizi döndürür.orijinal diziyi değiştirmez

console.log(sayilar1.join(" "));
console.log(sayilar1.join("A"));
console.log(meyveler[3].split("").reverse().join(""));

//* toString()
//*-----------------------------------------------------------
//? toString fonksiyonu sadece dizinin elemanlarinin aralarina
//? (virgul) koyarak birlestirir ve string yapar.

console.log(sayilar1.toString());


//*************slice */

const arabalar=["bmw","mercedes","audi","ferrari","lamborgini"]

console.log(arabalar.slice(3));
console.log(arabalar.slice(1,3));


//***** */ concat****

const kisiler=["özlem","esra", "nihal", "fatih","hüseyin"]
const rakamlar=[1,2,3,4,5,6]
console.log(kisiler.concat(rakamlar))

const birleşik=kisiler.concat(rakamlar,true,"esra","ferhat",["murat","Muhammed"],[["a","b","c","d"]])
console.log(birleşik);

//* every()
//*-----------------------------------------------------------
//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const yas=[18,23,35,44,56,89,15]

console.log(yas.every((a)=>a>=18));//false

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna (bizim yazdığımız fonksiyon) gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

console.log(yas.some((a)=>a>70));//true
console.log(yas.some((a)=>a<10));//false

