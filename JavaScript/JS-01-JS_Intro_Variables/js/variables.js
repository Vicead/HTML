//  JAVASCRIPT DEĞİŞKENLER

// Değişken bir değer tutar ve çağırıldığında o değer işleme girer
// CONST : constatn :sabit 

const degiskenAdi="Javascript";
console.log(degiskenAdi,"çok kullanışlı bir dil");

let sayi=45;
console.log(sayi+45);

var cumle="Bu bir var ile oluşturulan bir değişkendir";
console.log(cumle);

var kelime;
console.log(kelime);

// Global Scope ve Local Scope 

//? Global scope:Program içerisinde fonksiyonların dışında tanımlanan ve heryerden ulaşılabilen alan

//? Local scope:Bir block içi {} (fonksiyoların içi, döngü içleri, if block içleri)

const global="Bu global alanda tanımlanmış bir değişkendir";
console.log(global);

{
    const local="Bu değişken local alanda oluşturulmuş bir değişkendir"
    console.log(local);
}

// VAR KULLANIMI
// var her ortamda erişilebilir ve değiştirilebilir bu nedenle ES6 ile gelen Let ile Const kullanımı daha çok önerilir.

var num=8;

console.log(num);

{
    console.log(num);
}
num1=40
console.log(num1);

/*------------------------------------------------------------------*/
// Const ve Let Kullanımı

// cont:constant:sabit(değişmeyen)

const pi=3.14;
console.log(pi);

// Let Kullanımı

let kisiSayisi=300;
console.log( "Kurstaki öğrenci sayısı:", kisiSayisi);

kisiSayisi=kisiSayisi+1

console.log("Kurstaki öğrenci sayısı:", kisiSayisi);

{
    let ad="Helen";
    console.log(ad);
    ad="Harvey";
    console.log(ad);
}
// console.log(ad); error




