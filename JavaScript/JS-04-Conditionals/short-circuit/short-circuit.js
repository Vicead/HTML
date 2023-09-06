// // Short circuit, programlama terimleri içinde sıkça kullanılan bir kavramdır ve genellikle mantık operatörleri (AND, OR) ve koşullu ifadelerle ilişkilendirilir. Short circuit, bir koşulun değerlendirmesinin bir noktada durdurulması veya atlanması anlamına gelir. Bu, bazı durumları hızlı bir şekilde belirlemeye ve gereksiz işlemleri önlemeye yardımcı olabilir.

// // Short circuit özellikle `&&` (ve) ve `||` (veya) mantık operatörleri ile ilgilidir. İşte bu iki operatörün short circuit özelliği ile nasıl çalıştığını açıklayan örnekler:

// // 1. `&&` (ve) Operatörü:
// //    - `&&` operatörü kullanıldığında, sol taraftaki ifade doğru (true) değilse, sağ taraftaki ifade değerlendirilmez ve sonuç hemen `false` olarak kabul edilir.
// //    - Bu, bir koşulun her iki tarafının da doğru olması gerektiği durumlarda kullanışlıdır.


// const x=6;
// const y=8;

// if(x>0&&y>0){
//     console.log(`Her iki koşulda doğru`);
// }
// else{
//     console.log(`En az bir koşul yanlış`);
// }
// //AND ilk false gördüğünde onu yazar
// //eğer hepsi true ise sonuncu olanı yazar
// console.log(`12`&&5&&`Merhaba` );
// console.log(`12`&&0&&`Merhaba` );
// console.log(`12`&&5&&false);

// //false üreten değerler:
// //0,false,NaN,"",null,undefined
// /* -------------------------------------------------------------------------- */

// //OR
// //Mütevazidir: En az bir doğru yeterlidir ilk gördüğü true değere sahip değeri yazar
// //Hepsi false olduğunda false değer üretir. Bunlardan sonuncusunu yazar

// console.log(`object`||""||1||0);
// console.log(``||0||`k`||false);
// console.log(``||[]);

// /* -------------------------------------------------------------------------- */

// let name=`Selena`
// let age=17

// if(name===`Selena`||age>18){
//     console.log(`Welcome`);
// }
// else{
//     console.log(`Cannot login`);
// }

// // {
// //     isLogin||(
// //         <div>
// //             <p>You should login</p>
// //             <button>Login</button>
// //         </div>
// //     )
// // }

// var res = (100 * (100+1)) / 2;

// console.log(res);

// // // let sum = 0;  

// // for (i = 1; i <= 100; i++) {
// //     sum += i;
// //   }

// // console.log(sum);

// // let g1=70
// // let g2=80
// // let g3=95
// // for (i=1;i<=100;i=i+1){
// //     avg=(g1+g2+g3)/3
// // }
// //  console.log(avg);


// // let sum = 0;

// // for (let i = 1; i <= 5; i++) {
// //     sum += i * i;  
// // }

// // console.log(sum); 

for(let i=1; i <= 5; i++) {
    let star=``
    for(let j=1; j <= i; j++) {
        star += `*`;
    }
    console.log(star);
}
for(let number = 2; number <= 100; number++) {
    let isPrime = true; 
    for (let divisor = 2; divisor < number; divisor++) { 
        if (number % divisor === 0) { 
            isPrime = false; 
            break; 
        } 
    } 
    if (isPrime) {
        console.log(number);
    }
}

