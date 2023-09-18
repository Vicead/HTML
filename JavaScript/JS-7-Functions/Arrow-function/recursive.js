// ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.

//* Özellikle karmaşık hesaplamaların kodlamasını kolaylaştırmak için kullanılır.
//* Ancak, dikkatli kullanmak gerekir. Yoksa stack overflow hatası alınabilir.

//!sayma sayılarının ilk 6 terim toplamını bulunuz

let sum=0;
const add=(n)=>{
    for(let i=1;i<=n;i++){
        sum=sum+i 
    }
    return sum 
}
console.log(add(6));

//aynı soruyu recursive ile çözelim

const sum1=(n)=>{
    if(n<1)
    return n
    else return sum1(n-1)+n 
}
console.log(sum1(6));

function sum2(n) {
    return (n*(n+1))/2
}
console.log(sum2(6));

//* ORNEK: Girilen n. terimdeki Fibonacci sayısını  yazdıran fonksiyonu recursive olarak kodlayınız.
console.log("************ 5- RECURSION *************");

//? FIBONACCI terimleri:   1, 1, 2, 3, 5, 8, 13, 21, 34 ...
//!fibonacci dizisindeki  n. terimi  bulma fonksiyonu

const fibo=(n)=>{
    if(n<2)
    return n
    else return fibo(n-1)+fibo(n-2)
}
console.log(fibo(5));