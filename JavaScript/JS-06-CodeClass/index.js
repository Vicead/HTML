//AND Operatörü

//? her iki değer de true ise son true değeri döndürür, aksi takdirde ilk false değeri döndürür

// console.log(true&&1);
// console.log(false&&1);
// console.log(1&&3);
// console.log(1&&0);
// console.log([]&&1);

//OR Operatörü

// console.log(1||false);
// console.log(false||0);
// console.log(0||NaN);
// console.log(213||`Harvey`);
// console.log(1||true);

// const a=true;

// if(a){
//     console.log(`Merhaba`);
// }

// const status1=true;

// if(status1){
//     console.log(`deneme1`);
// }else{
//     console.log(`deneme2`);
// }

//! 1- 18 yaşından büyüklerin oy kullanabileceğini 18 yaşından küçüklerin oy kullanamayacağını ternary yapı ile konsola yazdıran kodu yazınız. (ternary)

// const age=+prompt(`Enter your age`);

// if(age>=18){
//     console.log(`You can vote, your age is ${age}`);
// }else{
//     console.log(`You cannot vote, your age is ${age}`);
// }

// age<18? console.log(`You cannot vote, your age is ${age}`):console.log(`You can vote, your age is ${age}`);

//! (bonus) girilen yılın yüzyılını veren program 1788 > 18.yüzyıl

// let year =+prompt(`Enter year`)

// let x = Math.trunc(year/100)+1
// console.log(`${x}. yüzyıl`);


//! 2- Bir dersten alınan notun harfini aşağıdaki duruma göre konsola yazdırınız?  
//?  Not:
//?  90'dan büyükse AA.
//? - 80'den büyük yada 90'a eşitse AB,
//? - 70'den büyük yada 80'a eşitse BB,
//? - 60'den büyük yada 70'a eşitse BC,
//? - 40'den büyük yada 50'a eşitse CD,
//? - 30'den büyük yada 40'a eşitse DD,
//? - 30'dan küçük yada eşitse FF ,
//? - 50'den büyük yada 60'a eşitse CC,

// let note=+prompt(`Enter your note`);

// if(note<0||note>100){
//     console.log(`Not valid`);
// }else if(note>=90){
//     console.log(`AA`);
// }else if(note>=80){
//     console.log(`AB`);
// }else if(note>=70){
//     console.log(`BB`);
// }else if(note>=60){
//     console.log(`BC`);
// }else if(note>=50){
//     console.log(`CC`);
// }else if(note>=40){
//     console.log(`CD`);
// }else if(note>=30){
//     console.log(`DD`);
// }else{console.log(`FF`);}

//! 3- Artık yıl sorusu
//? Artık yıl, bir yıldaki günlerin 365 yerine 366 gün olmasına denir. Bu fazladan gün (artık gün), normalde 28 gün olan şubat ayına 29 Şubat'ın eklenmesi ile elde edilir.  Bunun hesaplanması için aşağıdaki algoritma kullanılır.

//? Bir tarih 4 ile tam bölünüp 100 katları ile tam bölünemiyorsa, veya yıl 400 sayısına tam bölünüyorsa artık yıldır. BU iki şartın dışında yılarda şubat ayı 28 gün, artık yıllarda 29 gün olarak belirlenir.

//? Yukarıdaki bilgilere göre bir yılın artık yıl olup olmadığını konsola yazdıran conditional statement'i yazınız.

// let year=-800;

// if(year%4==0 && year%100!==0){
//     console.log(`${year} yılı artık yıldır`);
// }else if(year%400==0){
//     console.log(`${year} yılı artık yıldır`);
// }else{
//     console.log(`${year} yılı artık yıl değildir`);
// }

//! 4- 1000 ile 2000 arasındaki 13e bölümünden kalanı 3 olan sayıları konsola yazdırınız.

// let counter=0
// for(let i=1000;i<2000;i++){
//     if(i%13==3){
//         console.log(i);
//         counter ++
//     }
// }
// console.log(counter);

//! 5- kullanıcıdan alınan 5 adet sayınn ortalamasını konsola yazdırınız

// let num=0;
// let result=0;
// while(num<5){
//     let num1=+prompt(`Please Enter a number`)
//     result+=num1
//     num++
// }
// console.log(result/num);

// let num=0
// let sum=0
// for(let i=0;i<5;i++){
//     num1=+prompt(`Enter a number`)
//     num++
//     sum+=num1
// }
// console.log(sum/num);

//! 6- Kullanıcıdan alınan sayıları negatif girilene kadar toplayan ve sonucunu konsola yazdıran kodu yazınız

// let sum=0
// while(true){
//     let num=+prompt(`Enter a number`)
//     if(num<0){
//         break
//     }
//     sum+=num
    
// }
// console.log(sum);

//! 7- sizden 1'den 100'e kadar sayıları konsola yazdırmanız istenmektedir ancak 3'ün katlarına gelince 'Fizz', 5'in katlarına glince 'Buzz' yazacak. Hem 3'ün hemde 5'in katına geldiğinde ise 'FizzBuzz' yazdırmanız istenmektedir.

// for(let i=1;i<=100;i++){
//     if(i%15===0){
//         console.log(`FizzBuzz`);
//     }else if(i%5===0){
//         console.log(`Buzz`);
//     }else if(i%3===0){
//         console.log(`Fizz`);
//     }else{
//         console.log(i);
//     }
// }

//! 8- Bir sayının basamak sayısını yazdıran kodu yazınız

// let num=123546687;
// let digitCount=0;

// while(num!==0){
//     num=Math.trunc(num/10)
//     digitCount++;
// }
// console.log(digitCount);

// let num=213654654;
// let numDigits = Math.abs(num).toString().length;

// console.log(`Number is ${numDigits} digits`); 

//! 9- Kullanıcıdan alınan n adet kadar olan Fibonacci dizisini aralarında boşluk olan string şekilde konsola yazdırınız

// let n=+prompt("How many fibonacci numbers do you want")
// let a=0
// let b=1
// let strFib='0 1'
// for(let i=2;i<n;i++){
//     c=a+b
//     strFib+=` ${c}`
//     a=b
//     b=c 
// }
// console.log(strFib);

//! 10- Aşağıdaki çıktıyı kons0la yazdırınız

//? * * * * * 
//? * * * * * 
//? * * * * * 
//? * * * * * 
//? * * * * * 

// let star=``
// for(let i=0;i<5;i++){
//     for(let j=0;j<5;j++){
//         star+=` *`
//     }
//     star=`${star}\n`
    
// };
// console.log(star);

//! 11- Aşağıdaki çıktıyı kons0la yazdırınız

//? 0
//? 00
//? 000
//? 0000
//? 00000
//? 000000


// for(let i=1;i<7;i++){
//     let zero=``
//     for(let j=0; j<i;j++){
//     zero+=`0`
//     }
//     console.log(zero);
// }

//! 12-Girilen değerlerin üçgen oluşturup oluşturmadığını bulan program

// let a=+prompt("Birinci kener uzunluğu")
// let b=+prompt("İkinci kener uzunluğu")
// let c=+prompt("Üçüncü kener uzunluğu")

// let check1=a+b>c;
// let check2=a+c>b;
// let check3=b+c>a;

// if(check1&&check2&&check3){
//     console.log(`Bu sayılar bir üçgen oluşturabilir`);
// }else{
//     console.log(`Bu sayılar bir üçgen oluşturamaz`);
// }

