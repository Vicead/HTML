//! ********* FOR - LOOP ************
// Karar durumları gibi döngülerde günlük hayatta çok karşımıza çıkan yapılardır.
//Tekrarlı olan işlerde farklı türlerde döngülerden birini kullanabiliriz

//? FOR -LOOP
//? for (initialization;condition;increment/decrement){

//? }

// for(let i=1 ;i<=10;i++){
//     console.log(i);
// }
// for(let i=10;i>=1;i--){
//     console.log(i);
// }
// console.clear();
// /* -------------------------------------------------------------------------- */

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);


/* -------------------------------------------------------------------------- */


let sumEven = 0;
for (let i = 2; i <= 100; i += 2)  {
    sumEven += i ;
}
console.log(sumEven);

//! Eğer tek satırlık bir kod çalıştıracaksak {}(süslü parantezler) kullanılmayabilir
let sumOdd=0;
for(let i=1;i<=100;i+=2) sumOdd+=i;
console.log(sumOdd);

/* -------------------------------------------------------------------------- */

let fac=1
let n=6
for(let i=1;i<=n;i++){
    fac*=i
}
console.log(fac);

/* -------------------------------------------------------------------------- */

for(let i=2;i<100;i++){
    let isPrime=true 
        for(let j=2;j<i;j++){
        if(i%j===0){
            isPrime=false
            }
        }
    if(isPrime){
        console.log(`${i} is a prime number`);
    }
}
console.clear();

/* -------------------------------------------------------------------------- */

// let num = Number(prompt('Enter a number: '));
// let isPrime=true
// if(num<=0){
//     console.log(`Not valid`);
// }
// else if(num===1){
//     console.log(`Enter a number that is not 1`);
// }
// else{ 
//     for(let i = 2; i <= Math.sqrt(num); i++) {
//         if(num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(num + " is a prime number");
//     } else {2
//         console.log(num + " is a not prime number");
//     }
// }
console.clear();

/* -------------------------------------------------------------------------- */
//Armstrong Number:Bir sayının sayı değerlerinin küplerinin toplamı kendine eşit ise o sayı amstrong sayı olarak tanımlanır
// 153=1**3+5**3+3**3

let num=Number(prompt(`Enter a number`))
let stdigit = num % 10;
let tenthdigit = Math.trunc(num / 10) % 10;
let hundredthdigit = Math.trunc(num / 100);
let result;

if(hundredthdigit**3 + tenthdigit**3 + stdigit**3 === num) {
    result = `${num} is an armstrong number`;
} 
else {
    result = `${num} is not an armstrong number`;
}
console.log(result);