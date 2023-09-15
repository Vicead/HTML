/* -------------------------------------------------------------------------- */
//!                               ARROW FUNCTIONS                              */
/* -------------------------------------------------------------------------- */
// REVIEW
// 1-function decleration

function Greeting(name){
    console.log(`Hello ${name}`);
}
Greeting("John")

// return keyword

function Greeting(name){
    return `Hello${name}`
}
console.log(Greeting(" John"));

//expression function

const sayHello=function(name){
    return `Hello ${name}`
}
console.log(sayHello("John"));

/* -------------------------------------------------------------------------- */
//                                 ARROW FUNCTION
/* -------------------------------------------------------------------------- */

// const sayHi=(name)=>{
//     return `Hi ${name}`
// }
// console.log(sayHi("DE07"));

// const sum=(n1,n2)=> console.log(n1+n2);
// sum(67,78)

//Verilen sayı tek mi çift mi

const OddEven=(number)=>{
    if(number%2===0){
        return "Even"
    }else{
        return "Odd"
    }
}
console.log(OddEven(3));

const isOddEven=(number)=>number%2===0? "Even":"Odd"
console.log(isOddEven(23));

//Silindir hacmini bulduran program

const calculateCylinderVolume = (radius, height) => Math.PI * Math.pow(radius, 2) * height;

console.log(calculateCylinderVolume(3,5));

/* -------------------------------------------------------------------------- */
//çok fazla sayıda gönderilen değerler için tek tek değişken yazmak yerine function declaratin ve exp functionda arguments kullanılır ancak arrow functionda arguments kelimesi tanımlı değildir

const arg=function(){
    console.log(arguments);
}
arg(45,78,42,23,56)

//! Arrow functionda rest operatörü ...değişkenadi

const values=(...number)=>console.log(number[5]);

values(23,13,45,64,78,21)

const sum=(...numbers)=>{
    for(let num of numbers){
        console.log(num);
    }
    for(let i=0; i<numbers.length;i++){
        console.log(numbers[i]);
    }
    return 
}
sum(45,67,9,43,21)

//Verilen değerler arasından max bulan program

const maxValue = (...mon) => console.log(Math.max(...mon));
maxValue(6,45,87,21,56,89)

/* -------------------------------------------------------------------------- */

const numFind=(num1,num2,...leftnums)=>{
    console.log(num1);
    console.log(num2);
    console.log(leftnums);
    return
}
numFind(34,23,53,12,64)

/* -------------------------------------------------------------------------- */
// Bir ürün ve fiyat giriliyor. %18 vergi ekleyip döndüren program
// Bulaşık Makinası 8.500    

// Vergi %18 = 1.530 TL
// Bu ürünün KDV dahil fiyatı: 10.030 TL 

const calculateTotalPrice = (price) => (price * 1.18);
let total = calculateTotalPrice(8500);
console.log(`${total}TL`);


/* -------------------------------------------------------------------------- */

const convertToCelsius = (degree, scale) => scale.toLowerCase() === 'fahrenheit' ? (degree - 32) * 5/9 : scale.toLowerCase() === 'kelvin' ? degree - 273.15 : "Scale must be either 'Fahrenheit' or 'Kelvin'";

let celsiusTemp = convertToCelsius(68, 'Fahrenheit');
console.log(celsiusTemp); 

celsiusTemp = convertToCelsius(293, 'Kelvin');
console.log(celsiusTemp); 