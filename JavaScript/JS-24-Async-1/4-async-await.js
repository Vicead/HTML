//*===============================================================
//*                   4- ASYNC-AWAIT
//*===============================================================
//? Async-Await ECMAScript 2017 ile Javascript diline eklenmistir.
//? Aslinda Promise yapisinin syntax olarak basitlestirilmis halidir.
//?! Bu baglamda syntatic sugar benzetmesi yapilabilir.

//* Bir fonksiyonu async  hale getirmek icin fonksiyon keyword'nun onune async keyword'u eklenir.

//* Bir async fonksiyon icerisinde await keyword'u ile yapilan istegin cevabinin beklenmesi saglanir.

//* Aslinda dizilis olarak senkron mantiga benzeyen kod yazarak Asenkron kod yazmayı mumkun kilar.

//* Await, promise-temelli herhangi bir fonksiyonun onune getirilerek getirildigi satirdaki kodun durdurulmasini saglar. Yapilan istek yerine getirilip sonuc degerlerinin dondurulmesi ile kodun calismasi devam eder.
//! JavaScript try anahtar kelimesi kod bloğundaki kodları çalışma zamanında test etmek için kullanılır.

//! JavaScript catch anahtar kelimesi çalışma zaman hatası sonucu oluşan hataları ekrana yazdırmak için kullanılır.

//! JavaScript throw anahtar kelimesi özel hata oluşturmayı sağlar.

//!throw ile hata fırlatırsak, kodumuz çalışmayı durdurur ve kullanıcıyı uyaramayız, bu yüzden kod durmasın diye try-catch kod bloğunu
//!hata msjını görmek için url de ? ne kadar silebiliriz
const veriGetir = async () => {
try{ 
  const res = await fetch("https://api.tvmaze.com/search/shows?q=girls");

  if(!res.ok){
    throw new Error(`biraz hata var ${res.status}`)
    console.log("merhaba");
  }
  const veri = await res.json();
  ekranaBastir(veri)
} catch (error){

  console.log(error);

  console.log("try-catch sayesinde kod devam ediyor");

  console.log("merhaba");
}

 
};




document.querySelector("button").onclick = () => {
  veriGetir();
};



const ekranaBastir = (data) => {
  const alan = document.querySelector("section");
  console.log(data);

  data.forEach((eleman) => {
    alan.innerHTML += `  <h1 class=mt-4> NAME:  <span class="text-danger"> ${eleman.show.name}    </span> </h1> 
<img src= ${eleman.show.image.medium}  width="50%"/>

<h3 class="mt-4 fst-italic">${eleman.show.genres} </h3>
`;
  });
};
