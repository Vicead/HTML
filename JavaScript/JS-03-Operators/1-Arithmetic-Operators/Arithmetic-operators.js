// //! *********** ARITHMETIC OPERATORS**************
// let num1=54;
// let num2=77;

// console.log("Aritmetik operatörler");

// //Addition toplama işlemi
// console.log("Toplama işlemi:",num1+num2);
// //Subtraction çıkarma işlemi
// console.log("Çıkartma işlemi:",num2-num1);
// //Multiplication çarpma işlemi
// console.log("Çarpma işlemi:", num1*num2);
// //Division bölme işlemi
// console.log("Bölme işlemi:", num2/num1);
// //Power üs alma
// console.log("Üs alma:", 2**3);
// //Modules mod alma 
// console.log("Mod alma:", num1%10);

// const num=526;

// const birler=num%10
// const onlar=(Math.trunc(num/10))%10
// const yüzler=(Math.trunc(num/100))%10

// console.log(`Sayı değerleri: ${yüzler} - ${onlar} - ${birler}`);

// //Example: Kullanıcıdan aldığı saat bilgisini alıp işin kaç günde yapıldığını hesplayan program

// // let hours=+prompt("Bu iş kaç saatte yapıldı")
// // console.log(typeof hours);

// // let day=Math.trunc(hours/24)
// // let remainder=hours%24
// // console.log(`Bu iş ${day} gün ve ${remainder} saatte tamamlanmıştır`);

// let now=new Date()
// console.log(now);

// let saat=now.getHours()
// let dakika=now.getMinutes()

// console.log(`${saat}:${dakika}`);

//? INCREMENT - DECREMENT

let num=54;
console.log(num);
console.log(++num);
console.log(num++);
console.log(num++);
console.log(num);

let num2=15;
console.log(num2--);
console.log(num2);
console.log(--num2);
console.log(num2--);
console.log(--num2);