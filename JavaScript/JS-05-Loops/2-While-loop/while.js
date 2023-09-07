//!  ***** WHILE LOOP ******* 
// For loop ile benzer şekilde sadece syntax farklılığı vardır.Birbirini yerine kullanılabilir
//*"while" döngüsü, belirli bir koşul doğru olduğu sürece kod bloğunu tekrarlayan bir döngüdür. "While" döngüsü, başlangıçta belirtilen koşul doğru olduğu sürece çalışır ve koşul yanlış olduğunda döngüyü sonlandırır.
//! NOT: Eğer koşul düzgün yapılındırılmamışsa, "while" döngüsü sonsuz bir döngü oluşturabilir ve bu durum sayfanızın veya uygulamanızın donmasına neden olabilir.
// while(Koşul) {
//      çalıştırılacak kodlar
//   }

// 1den 10 a kadar olan sayıları yazdıran program

// let i=1;
// while(i<10){
//     console.log(i);
//     i++
// }
/* -------------------------------------------------------------------------- */

//Kullanıcı 100-200 bir değer girene kadar işlemi devam ettirsin

// let num=90
// while(num<=100||num>=200){
    // num=Number(prompt(`Enter a number 100-200`))
// }

/* -------------------------------------------------------------------------- */

//Çıkış işlemi

// let answer=``;
// while(answer !==`yes`){
//     answer=prompt(`Do you want to leave(Yes/No):`).toLowerCase()
// }
// console.log(`Thank you choosing us`);

/* -------------------------------------------------------------------------- */
//console.log(`Ürün Programı`)
//1-Ürün Giriniz
//2-Ürün Listele
//3-Ürün Sil
//4-Çıkış`);
// let check=true
// while(check===true){
//     console.log(`***Ürün Programı***
//     1-Ürün Giriniz
//     2-Ürün Listele
//     3-Ürün Sil
//     4-Çıkış`);

//     let choice=Number(prompt(`Yapacağınız işlemin numarasını girin:`))

//     switch(choice){
//         case 1:
//             console.log(`Ürününüz girildi`);
//             break
//         case 2:
//             console.log(`Ürün listelendi`);
//             break
//         case 3:
//             console.log(`Ürün silindi`);
//             break
//         case 4:
//             check=false
//             break
//         default:
//             console.log(`Geçersiz giriş yaptınız`);
//     }
// }


// var randomNumber = Math.floor(Math.random() * 10) + 1;


// var maxTries = 3;
// var currentTry = 0;

// while(currentTry < maxTries){
    
//     var userGuess = prompt("Guess a number between 1 and 10");
        

//     userGuess = Number(userGuess);

//     if(userGuess === randomNumber){
//         console.log("Congratulations! You guessed the number.");
//         break;
//     }
//     else {
//         currentTry++;
//         if(currentTry === maxTries) {
//             console.log("Sorry, you didn't guess the number. The number was " + randomNumber);
//         }
//         else {
//             console.log("Wrong guess. Try again!");
//         }
//     }
// }

// let number = 12312312312345; 
// let numDigits = Math.abs(number).toString().length;

// console.log(`Number is ${numDigits} digits`); 
