let isimler=["harvey","helen","ashley","ethan","fernando",12]
let bos=[]

console.log(typeof isimler[0]);
console.log(isimler.length);
console.log(Boolean(isimler));
console.log(Boolean(bos));

bos.length ? console.log("veriler geliyo"):console.log("veriler gelmiyo");

//for while forEach do while

// for(let i=0;i<isimler.length;i++){
//     console.log(isimler[i]);
// }

// let sayac=0
// while(sayac<isimler.length){
//     console.log(isimler[sayac])
//     sayac++
// }

// isimler.forEach((isim)=>console.log(isim))

//! 1-Belili bir string ifadenin içindeki sesli harfleri bulan fonksiyon yazınız

function findVowels(str){
    let vowels="aeıioöuü"
    let newStr=""
    for(let i=0;i<str.length;i++){
        if(vowels.includes(str[i])){
            newStr+=str[i]
        }
    }
    return newStr
}
console.log(findVowels("hello worlds"));

//! 2-Bir dizi içerisindeki en büyük sayıyı bulan bir fonksiyon yazınız

let arr=[3,4,50,6,20,8,9,10]

let num=[3,5,8,90,2,1]

num.sort((a,b)=>a-b).forEach((x)=>console.log(num[num.length-1]))

function bigNum(num1){
    let bigOne=num1[0]
    for(let i=0;i<num1.length;i++){
        if(num1[i]>bigOne){
            bigOne=num1[i]            
        }
    }
    return bigOne
}
console.log(bigNum(arr)); 

//! 3-Bir dizi içerisindeki sayıları toplayan bir fonksiyon yazınız

function sum(n){
    let total=0
    for(let i=0;i<n.length;i++){
        total+=n[i]
    }
    return total
}
console.log(sum(arr));

const summery=arr.reduce((total, currentValue) => total + currentValue, 0)
console.log(summery);

//! 4-Bir dizideki sayıların ortalamsını bulan fonksiyonu yazınız

function avgNum(n){
    let total=0
    for(let i=0;i<n.length;i++){
        total+=n[i]
    }
    let avg=total/n.length
    return avg
}
console.log(avgNum(arr));


const avgNum1=arr.reduce((total,currentValue)=>total+currentValue,0)
console.log(avgNum1/arr.length);


//! 5-Girilen bir cümledeki kelime sayısını bulan bir fonksiyon yazınız

const a="Sen beni bilemedin amacıma veremedin barışta yaraladın acımadın aldın"

function countWords(sentence){
    let words = sentence.split(" ");
    return words.length;
}

console.log(countWords(a));  

const sentence1="sen ben o biz siz onlar"
const counter=sentence1.split(" ")
console.log(counter.length);

//! 6-Bir cümleyi alın ve kelimeleri ters sırayala birleştirerek yeni bir cümle oluşturun

let sentence2="JavaScript harika bir dil"

const reSentence=sentence2.split(" ").reverse().join(" ")
console.log(reSentence);

function rereSentence(a){
    let splitSentence=a.split(" ")
    let b=splitSentence.reverse().join(" ")
    return b
}
console.log(rereSentence(sentence2));

//! 7-Bir isim listesi oluşturmak istiyorsunuz. İlk başta boş bir diziyle başlayın. Kullanıcıdan klavyeden  isimleri alarak listeye ekleyin. Kullanıcı 'q' tuşuna basana kadar isim eklemeye devam edin. Kullanıcı 'q' tuşuna bastığında en son eklediği ismi listeden çıkarın ve sonuçları konsola yazdırın.

// const isim=[]
// while(true){
//     const name=prompt("Lütfen isim giriniz")
//     if(name==="q"){
//         isim.pop()
//         break
//     }
//     isim.push(name)
// }
// console.log(isim);

//! 8- kullanıcının isim ve doğum tarihi değerlerini parametre olarak alan ve kullanıcın yaşını hesaplayan fonksiyonu function declaration ve arrow function ile yazınız

function nameBirth(name,date){
    let age=new Date().getFullYear()-date
    return console.log(`${name} is ${age} years old`);
}
nameBirth("Ömer",1995)

const nameBirth1=(name,date)=>{let age=new Date().getFullYear()-date
     return console.log(`${name} is ${age} years old`)
}
nameBirth1("Ömer",1995)

//! 9- isimler dizisin içerisindeki her ismi küçük harf olarak yeni bir diziye saklayınız.

const isimler1 = [
    'Ahmet',
    'mehmet',
    'ismet',
    'SAFFET',
    'Can',
    'Canan',
    'Cavidan',
  ];

  const lowercaseName=isimler1.map(name=>name.toLocaleLowerCase())
  console.log(lowercaseName);

  // * fiyatlar array'inde fiyatı 250 TL den az olanlari ayri bir diziye saklayalınız.

const fiyatlar = [100, 250, 50, 89,249,500];

let yeniFiyat=fiyatlar.filter((a)=>a<250)
console.log(yeniFiyat);

//! 10-Bir sayının faktöriyelini hesaplayan fonksiyon yazınız

// 5! = 5*4*3*2*1
//! 1.yötem
function factorial(num) {
    let result = 1
    for (let i = 1; i <= num; i++) {
        result *= i
    }
    return result
}

console.log(factorial(6))   // 1*2*3*4*5 = 120
//! 2.yöntem
function factorial2(n) {
    if (n === 0 || n === 1) {
        return 1
    } else {
        return n * factorial2(n-1)
    }
}

console.log(factorial2(5))

//! 11- kayıp sayıyı bulun?
const sal = [5,2,6,1,3,7]

//1.yöntem
let dizi3=[5,2,6,1,3,7]
dizi3.sort((a,b)=>a-b)
console.log(dizi3);

for(let i=0;i<dizi3.length;i++){
    if(dizi3[i]!==dizi3[i+1]-1){
        console.log(dizi3[i]+1);
        break
    }
}

//2.yöntem
const findNum=(arr)=>{
    let total=(arr.length+1)*(arr.length+2)/2
    
    let arrTotal=sal.reduce((acc,curr)=>{
        console.log("akümülatör",acc)
        console.log("current",curr)
        return acc+curr
    })
    return total-arrTotal
}
console.log(findNum(sal));
