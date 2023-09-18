// ?=========================================================
// ?                 STRING METOTLARI
// ?=========================================================
console.log("****STRING METHODS******");

//!1-Klasik yöntemle tanımlanan String ilkel (primitive)dir
const str1="clarusway"
const str2="hello"
const str3=" all the world"

console.log(str2+str3,typeof(str2+str3));

//!2-constructor ile tanımlanan String non-primitive(ilkel olmayan)dir

const str4=new String("yeni bir String")
console.log(typeof(str4));

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript  otomatik olarak primitive String'leri String
//! object lerine dönüştürür. Bu sayede, String object lerine ait olan
//! fonksiyonlar veya özellikleri primitive string ile kullanmak
//! mümkün olur. Ayrıca 2 tür arasında çevrim yapmakta mümkündür.
//? Ek Açıklama için : https://javascript.info/primitives-methods

// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================

const s1="clarusway"
const s2="hello"

console.log(s1.concat(s2));

const s3=s1.concat(s2)

console.log(s3);

//orjinal değerler değişmez, assign ile kalıcı hale getirebiliriz


// *=========================================================
// *   toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================


const myName="Ashley Miller"

console.log(myName.toLocaleLowerCase());

console.log(myName.toUpperCase());

console.log(myName.toLocaleUpperCase("tr"));
//toLocalUpperCase("tr")=Türkçe büyük demek boş bırakınca eng (ingilizce) karakterlere uygun büyütebiliriz

const esitMi=(a,b)=>a==b.toLocaleUpperCase("tr")?"eşittir":"eşit değildir"

console.log(esitMi("İSMET","ismet"));

/* -------------------------------------------------------------------------- */
/*                                  charAt()                                  */
/* -------------------------------------------------------------------------- */

const s4="primitive \nveri tiplerinin \nproperty ya \nda methodu olmaz."
console.log(s4);

console.log(s4.charAt(5));
console.log(s4.charAt(12));
console.log(s4.charAt(s4.length-1));

console.log(`primitive 
veri tiplerinin
property ya
da methodu olmaz.`);

/* -------------------------------------------------------------------------- */
/*           includes()- case sensitive (büyük küçük harfe duyarlı)           */
/* -------------------------------------------------------------------------- */

const kelime="To be or not to be, that is The questions."

console.log(kelime.includes("to be"));
console.log(kelime.includes("To be"));
console.log(kelime.toUpperCase().includes("TO BE"));
console.log(kelime.includes(" "));
console.log(kelime.includes("to be",14));
console.log(kelime.includes(",")?"evet var":"hayır yok");

/* -------------------------------------------------------------------------- */
/*            indexOf()- case sensitive (büyük küçük harfe duyarlı)           */
/* -------------------------------------------------------------------------- */

console.log(kelime.indexOf("be"));
console.log(kelime.lastIndexOf("be"));
console.log(kelime.indexOf("BE"));
console.log(kelime.indexOf("be",kelime.indexOf("be")+1));

/* -------------------------------------------------------------------------- */
/*                                  search()                                  */
/* -------------------------------------------------------------------------- */

const kelime3="to, be or not to be, 5 that is The question."

console.log(kelime3.search(/[A-Z]/));
console.log(kelime3.search(/[a-z]/));

//cümledeki büyük harfi bul onu küçült

console.log(kelime3.charAt(kelime3.search(/[A-Z]/)).toLowerCase());
console.log(kelime3.search(/[0-9]/));
console.log(kelime3.search(/[0-9a-zA-Z]/));
console.log(kelime3.search(/[^0-9a-zA-Z]/));

/* -------------------------------------------------------------------------- */
/*                 startsWith(), endsWith() -- case sensetive                 */
/* -------------------------------------------------------------------------- */

const cumle="Salına salına sinsice olurum sana!"

console.log(cumle.startsWith("S"));
console.log(cumle.startsWith("s"));
console.log(cumle.endsWith("!"));
console.log(cumle.endsWith("salına",13));

/* -------------------------------------------------------------------------- */
/*           replace(searchFor,replaceWith) --immtuble (değiştirmez)          */
/* -------------------------------------------------------------------------- */

let oku="Oku Johny gibi saf olma saf olma saf olma"

console.log(oku.replace("saf olma","akıllı ol"));
console.log(oku);
oku=oku.replace("saf olma","akıllı ol")
console.log(oku);

console.log(oku.replace(/SAF/i,"fakir"));
// /SAF/i;  (i=incase sensitive) yazımı büyük küçük harfe duyarsız ara demek

console.log(oku.replace(/Saf olma/gi,"zengin al"));

//?replaceAll

console.log(oku.replaceAll("saf olma","zeki ol"));

/* -------------------------------------------------------------------------- */
/*                         slice(beginIndex, endIndex)                        */
/*                       substring(beginIndex, endIndex)                      */
/* -------------------------------------------------------------------------- */

const veysel="UZUN İNCE BİR YOLDAYIM YÜRÜYORUM GÜNDÜZ GECE"

console.log(veysel.slice(10));
console.log(veysel.slice(10,22));
console.log(veysel.substring(10,22));
console.log(veysel.slice(-11));
console.log(veysel.slice(17,-12));
//substring de eksi index çalışmaz

//* ----------------------------------------------------------
//* split= string i diziye çevirir
//* split(seperator , limit ) =>ikisi de optional
//* split("x")=>x lerden ayırır, virgül+boşluk yapar ve yeni dizi döndürür.orjinal diziyi değiştirmez
//* ----------------------------------------------------------

const tarkan="Gel gündüzle gece olalım"

console.log(tarkan.split());//1 elemanlı array e çevirir
console.log(tarkan.split(" "));//boşluklardan ayır
console.log(tarkan.split(""));//hiçliklerden ayır
console.log(tarkan.split("e"));//e ler iptal, yerine virgül ve boşluk koyar
console.log(tarkan.split("e",3));// dizinin 3 elemanını al

/* -------------------------------------------------------------------------- */
/*                                   trim()                                   */
/* -------------------------------------------------------------------------- */

const ramazan="     Hos geldin ya Sehr i Ramazan     "

console.log(ramazan);
console.log(ramazan.trim());
console.log(ramazan.trim().endsWith("n"));

//chaining

let abc="           Clarusway Full Stack"

console.log(abc.trim().slice(0,9).toUpperCase());
