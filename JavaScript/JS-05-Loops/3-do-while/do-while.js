//!  ********** DO- WHILE *******
// kontrol sonda yapıldığı için, en az bir defa işlem gerçekleşir.

// do {
//      çalıştırılacak kodlar
//   }
//   while(Koşul);

//? Kullanıcıdan vize ve final notlarını isteyen ve vizenin %40 ını finalin %60 ını alarak notunu hesaplayan her işlem bittiğinde devam etmek isteyip istemediğini soran program

// let isContinue=""
// let Avg;

// do{
//     let vize=+prompt("Vize notunuzu girin")
//     let final=+prompt("Final notunuzu giriniz")
//     Avg=vize*0.4+final*0.6
//     console.log(`Ortalamınız ${Avg}`);
//     isContinue=prompt("Devam etmek istiyormusunuz(e/h").toLocaleLowerCase()
// }while(isContinue==="e"){

// }

/* -------------------------------------------------------------------------- */

//Girilen şifreye yada pin kodu doğru mu kontrolü

// const Pin="1234"
// let enterPin;
// let tryCounts=0
// do{
//     enterPin=prompt("Enter Pin")
//     tryCounts++
// }while(enterPin!=Pin)
// console.log(`${tryCounts} kadar deneme yaptınız...`);

/* -------------------------------------------------------------------------- */

//Kullanıcıdan bir sayı istiyoruz sayı değilse tekrar girsin

// let check=isNaN("asdasd") //String olduğu değer döner
// check=(isNaN(5)) //Sayı olduğunda false değer döner
// console.log(check);

// let number;
// do{
//     number=prompt("Bir Sayı giriniz")
// }while(isNaN(number)===true)
