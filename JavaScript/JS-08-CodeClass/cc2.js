

// islem(10,15)

// function islem(par1,par2,par3){
//     console.log(par1);
//     console.log(par2);
//     return par1+par2+par3
// }
// let topla = islem(3,5)
// console.log(topla);

// const  topla=()=>console.log("first");;
// topla()

// let isim="harvey watson"
// console.log(isim.length);
// console.log(isim[2]);

//! 1-Celsius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız. (C*9/5)+32=F

let cel=45

const transformFah=(cel)=>((cel*9/5)+32)
console.log(transformFah(45));

//! 2-Belirli bir string ifadenin tersini bulan fonksiyon yazınız

function reverseString(str){
    let newS="";
    for(let i=str.length-1; i>=0;i--){
        newS +=str[i];
    }
    return newS
}
console.log(reverseString("daha çok çalış"));

//! 3- Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız?



const string1="selles"
function isPalindrome(str){
    let newStr=""
    for(i=str.length-1;i>=0;i--){
        newStr +=str[i]
    }
    return newStr===str;
}
console.log(isPalindrome(string1));

//! 4- Belirli bir sayının tam bölenlerinin taplamını bulan fonksiyon yazınız

function sod(value){
    let sum=0;
    for(let i=1;i<=value;i++){
        if(value%i===0){
            sum+=i
        }
    }
    return sum
}
console.log(sod(5));

//! 5- Yarıçapı verilen dairenin alan ve çevresini bula program yazınız

function areaperi(radius){
    return `area:${Math.PI*radius*radius} Perimeter:${2*Math.PI*radius}`
}
console.log(areaperi(4));

//! 6- Belirli bir sayının asal olup olmadığını bulan fonksiyonu yazınız

function isPrime(num){
    if(num<2)
        return false;
    for(let i=2; i<num;i++){
        if(num%i===0)
            return false;        
    }
    return true;
}
console.log(isPrime(3));

//! 7- İlk 2 parametreyi çarpıp 3. parametre üssüne alan fonksiyon yazınız


function mult(num1,num2,num3){
    return ((num1*num2)**num3)
}
console.log(mult(3,4,2));

//! 8- Bir sayıyı tersine çevirecek bir fonksiyon yazın

function reverseString(input){
    let newS="";
    let str=input.toString()
    for(let i=str.length-1; i>=0;i--){
        newS +=str[i];
    }
    return parseInt(newS)
}
console.log(reverseString(12345));

function reverseNumber(num) {
    let reversed = 0;
    while(num!=0) {
        let digit = num % 10; 
        reversed = reversed * 10 + digit; 
        num = Math.trunc(num / 10); 
    }
    return reversed;
}
console.log("reverse number:",reverseNumber(123456)); 


//! 9- 100-1000 e kadar olan sayılardan polindrom olanları belirten/yazan program

function checkPalindrome(str){
    for(let i=100;i<1000;i++){
        if(reverseNumber(i)===i){
            console.log(`${i} sayısı polindromdur`);
        } 
    }
}
function reverseNumber(num){
    var reverse = 0
    while (num!=0) {
        reverse = reverse *10
        reverse = reverse + (num%10)
        num = Math.trunc(num/10)
    }
    return reverse
}

checkPalindrome();
console.clear();

//! 12- Mükemmel sayıyı bulan fonksiyonu yazınız.

//? Bölen sayıları toplamı orjinal sayının 2 katına eşitse bu mükemmel sayıdır...(6,28,496)
//? 6   = 1, 2, 3, 6 = 12  = 6*2
//? 28  = 1, 2, 4, 7, 14, 28   = 56   = 28*2;

const dere=(der)=>{
    console.log(der);
    let sen=0
    for(i=0;i<=der;i++){
        if(der%i===0){
            sen+=i 
        }
    }
    return sen===der*2
}

console.log(dere(28));